# Modern Full-Stack Monorepo

A production-ready monorepo template built with Turborepo, featuring a React web application, API server, and shared packages. Perfect for building scalable full-stack applications with modern tooling.

## ✨ Features

- 🚀 **Modern Stack**: React 19, Hono, TypeScript, and Bun
- 🏗️ **Monorepo**: Turborepo for efficient builds and caching
- 🔐 **Authentication**: Better Auth with email/password and OAuth providers
- 🎨 **UI Components**: shadcn/ui with Tailwind CSS and dark mode
- 📱 **Responsive**: Mobile-first design with modern UX patterns
- 🗄️ **Database**: Drizzle ORM with PostgreSQL and migrations
- 🤖 **AI Ready**: Optional OpenAI integration
- 📧 **Email**: Optional Resend integration for transactional emails
- 🔧 **Developer Experience**: Biome linting, pre-commit hooks, and type safety
- 🚀 **Deployment Ready**: Coolify, Docker, and VPS deployment configs

## Structure

```
project/
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
bun run dev --filter=@your-org/web
bun run dev --filter=@your-org/api

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
- React 19 with Vite for fast development
- TanStack Router for type-safe routing
- Tailwind CSS for utility-first styling
- Radix UI components for accessibility
- Better Auth for authentication
- shadcn/ui component library
- Dark/light theme support

### API (`apps/api`)
- Hono framework for high-performance APIs
- Better Auth for secure authentication
- Drizzle ORM with PostgreSQL
- AI integration with OpenAI (optional)
- Email functionality with Resend (optional)
- Type-safe API routes

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

- `bun run dev` - Start all apps in development mode
- `bun run build` - Build all apps for production
- `bun run lint` - Lint all packages with Biome
- `bun run lint:fix` - Fix linting issues automatically
- `bun run format` - Format code with Biome
- `bun run type-check` - Type check all packages
- `bun run clean` - Clean all build artifacts

## Tech Stack

- **Monorepo**: Turborepo for fast, cached builds
- **Runtime**: Bun for lightning-fast package management
- **Frontend**: React 19, Vite, TanStack Router, Tailwind CSS, shadcn/ui
- **Backend**: Hono, Better Auth
- **Database**: PostgreSQL, Drizzle ORM
- **AI**: OpenAI SDK (optional)
- **Email**: Resend (optional)
- **Type Safety**: TypeScript, Zod
- **Linting**: Biome for fast linting and formatting
- **Git Hooks**: Husky for pre-commit formatting

## Customization

### Setting up your project

1. **Clone and rename**: Clone this repository and update the package names in `package.json` files
2. **Environment variables**: Copy `.env.example` to `.env` and configure your settings
3. **Database**: Set up your PostgreSQL database and update the connection string
4. **Authentication**: Configure Better Auth providers in `apps/api/lib/auth.ts`
5. **Optional services**: Set up OpenAI and Resend if you need AI or email functionality

### Development workflow

1. Make changes in the appropriate app or package
2. Run `bun run type-check` to ensure type safety
3. Run `bun run lint` to check code quality
4. Test your changes with `bun run dev`
5. Code is automatically formatted on commit via pre-commit hooks

## Deployment

This template includes deployment configuration for:
- **Coolify**: Ready-to-deploy with `nixpacks.toml`
- **Docker**: Multi-stage Dockerfile for production builds
- **Self-hosting**: Optimized for VPS deployment

## License

MIT License - feel free to use this template for your projects!