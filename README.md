# Monolithic App with Bun, Hono, React, Drizzle, Better Auth, and AI

This is a full-stack monolith built using:

- 🌐 **Frontend**: React (Vite)
- 🔥 **Backend**: Hono (Bun runtime)
- 🧠 **Auth**: Better Auth
- 🗃️ **ORM**: Drizzle
- ⚡ **Runtime**: Bun
- 🤖 **AI features**: integrated
- 🗃️ **Database**: Postgres

---

## 🛠️ Install Dependencies

```sh
bun install && cd src/client && bun install
```

## 🚀 Run Locally (Development)

```sh
bun run dev
```

```sh
cd src/frontend && bun dev
```

## 🗃️ Database Migrations (Drizzle ORM)

For running migrations and managing your database schema, use **Drizzle Kit**.

Refer to the official documentation here:  
👉 [https://orm.drizzle.team/docs/kit-overview](https://orm.drizzle.team/docs/kit-overview)

Example commands:

```sh
# Generate SQL migration from schema
bunx drizzle-kit generate

# Push migrations to database
bunx drizzle-kit push