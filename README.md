# Optioo Monorepo

A modern monorepo built with Turborepo, featuring a React web app, API server, and shared packages.

## Structure

```
optioo/
├── apps/
│   ├── web/                 # React web application
│   └── api/                 # Hono API server
├── packages/
│   ├── database/            # Database schema and migrations
│   ├── shared/              # Shared types and utilities
│   └── config/              # Environment configuration
├── turbo.json               # Turborepo configuration
└── package.json             # Root package.json
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (recommended) or Node.js 18+
- PostgreSQL database

### Installation

```bash
# Install dependencies
bun install

# Set up environment variables
cp .env.example .env
# Edit .env with your database URL and other secrets
```

### Development

```bash
# Start all apps in development mode
bun run dev

# Start specific app
bun run dev --filter=@optioo/web
bun run dev --filter=@optioo/api

# Build all apps
bun run build

# Run linting
bun run lint

# Type checking
bun run type-check
```

### Database

```bash
# Generate migrations
bun run db:generate

# Push schema changes
bun run db:push

# Run migrations
bun run db:migrate
```

## Apps

### Web App (`apps/web`)
- React 19 with Vite
- TanStack Router for routing
- Tailwind CSS for styling
- Radix UI components
- Better Auth for authentication

### API (`apps/api`)
- Hono framework
- Better Auth for authentication
- Drizzle ORM with PostgreSQL
- AI integration with OpenAI
- Email functionality with Resend

## Packages

### Database (`packages/database`)
- Drizzle schema definitions
- Database migrations
- Connection utilities

### Shared (`packages/shared`)
- TypeScript types
- Zod validation schemas
- Shared utilities

### Config (`packages/config`)
- Environment variable validation
- Configuration utilities

## Scripts

- `bun run dev` - Start all apps in development
- `bun run build` - Build all apps
- `bun run lint` - Lint all packages
- `bun run type-check` - Type check all packages
- `bun run clean` - Clean all build artifacts

## Tech Stack

- **Monorepo**: Turborepo
- **Runtime**: Bun
- **Frontend**: React 19, Vite, TanStack Router, Tailwind CSS
- **Backend**: Hono, Better Auth
- **Database**: PostgreSQL, Drizzle ORM
- **AI**: OpenAI SDK
- **Email**: Resend
- **Type Safety**: TypeScript, Zod

## Contributing

1. Make changes in the appropriate app or package
2. Run `bun run type-check` to ensure type safety
3. Run `bun run lint` to check code quality
4. Test your changes with `bun run dev`