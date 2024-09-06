import cluster from "node:cluster";
import process from "node:process";
import { APP_WORKERS } from "./config";

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);
  
  for (let i = 0; i < APP_WORKERS; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`worker ${worker.process.pid} died`);
    process.exit(1);
  });
} else {
  await import("./server");
  console.log(`Worker ${process.pid} started`);
}