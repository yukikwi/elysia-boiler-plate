import os from "node:os";

export const APP_PORT = parseInt(process.env.APP_PORT || "3000")
export const APP_WORKERS = parseInt(process.env.APP_WORKERS || os.availableParallelism().toString());

// Database configuration
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = parseInt(process.env.DB_PORT || "5432")
export const DB_USER = process.env.DB_USER
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_NAME = process.env.DB_NAME
export const DB_PROVIDER = "pg"

// CORS domain
export const FRONTEND_URL = process.env.FRONTEND_URL || false

// Swagger configuration
export const SWAGGER_PATH = "/documents"

// BetterAuth
export const BETTER_AUTH_TRUSTED_DOMAIN = process.env.BETTER_AUTH_TRUSTED_DOMAIN?.split(",") || null