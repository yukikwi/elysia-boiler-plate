# Elysia Boilerplate - AI Coding Instructions

## Architecture Overview

**Tech Stack**: Elysia + TypeScript + Drizzle ORM + BetterAuth + PostgreSQL + Bun

**Core Pattern**: Feature-based folder structure where each domain (auth, user, example_app) contains:
- `models.ts` - Drizzle ORM schemas (database tables)
- `views.ts` - Request handlers/controllers
- `routers.ts` - Elysia route definitions
- `validators.ts` - TypeBox schemas for request validation
- `middlewares.ts` - Auth/session middleware

**Server Initialization** (`src/server.ts`):
- Uses cluster module for multi-worker setup
- Loads plugins: static files, CORS, Swagger docs (`/documents`), OpenTelemetry
- Composes three main app routers: `example_app`, `auth`, `user`

## Database & Migrations

**Schema Location**: Each feature's `models.ts` exports Drizzle `pgTable` definitions
**Migration Discovery**: `drizzle.config.ts` auto-discovers schemas at `src/**/models.ts` and `src/**/models/*.ts`

**Workflow**:
```bash
bun run makemigrations  # Generate SQL from schema changes
bun run migrate        # Apply migrations to PostgreSQL
```

Generated migrations go to `database_migrations/`. Always commit both SQL files and meta snapshots.

## Authentication Pattern

**System**: BetterAuth (complete auth solution with sessions/JWT)

**Key Files**:
- `src/lib/auth.ts` - Auth instance initialization
- `src/auth/views.ts` - Proxies all requests to `auth.handler()`
- `src/auth/middlewares.ts` - `userMiddleware` extracts session from request headers
- `src/auth/models/better_auth.ts` - **Auto-generated** from CLI

**Update Auth Config**:
```bash
bun run better-auth_generate  # Regenerates src/auth/models/better_auth.ts
```

Auth routes use `/api/auth/*` prefix. Never manually edit `src/auth/models/better_auth.ts`.

## Development Commands

| Command | Purpose |
|---------|---------|
| `bun run dev` | Start dev server with watch mode (port 3000) |
| `bun build` | Production build to `dist/index.js` |
| `bun start` | Run production build |
| `bun run compile` | Create standalone binary |

## Common Patterns

**Adding a Feature Route**:
1. Create `src/[feature]/models.ts` with Drizzle schema
2. Create `src/[feature]/validators.ts` with TypeBox validators
3. Create `src/[feature]/views.ts` with handler functions
4. Create `src/[feature]/routers.ts` exporting Elysia app with routes
5. Import and `.use()` in `src/server.ts`
6. Run migrations

**Example** (`src/example_app/`):
- Models define `animals` table with type inference (`Animal`, `NewAnimal`)
- Views use database queries and return typed responses
- Routers compose views with validation: `.post("/animal", views.insertAnimal, { body: insertAnimalValidators })`

**Error Handling**: Use Elysia's context error method: `context.error(405)`

## Configuration

**Environment Variables** (`src/config.ts` centralized):
- `APP_PORT`, `APP_WORKERS`, `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`
- `FRONTEND_URL` for CORS origin (defaults to `false` if not set)
- `BETTER_AUTH_TRUSTED_DOMAIN` as comma-separated domain list

Database connection throws error if `DB_HOST` is undefined—always provide credentials.

## Type Safety

- Use Drizzle's `$inferSelect` and `$inferInsert` for table-based types
- TypeBox (`t`) for request/response schemas with type inference
- Elysia handlers receive typed `body`, `query`, `params` via validator schemas
- `src/server.ts` exports `BackendApp` type for client integration

## Build & Docker

- `build_docker.sh` provides containerization
- Production build uses `--minify` and `--target bun` flags
- Compiled binary output: `server` binary in project root
