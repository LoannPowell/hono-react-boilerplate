FROM oven/bun:1-alpine AS base
WORKDIR /app

# Install dependencies
COPY package.json bun.lockb ./
COPY apps/api/package.json ./apps/api/
COPY apps/web/package.json ./apps/web/
COPY packages/*/package.json ./packages/*/
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Build frontend first
RUN bun run build --filter=@optioo/web

# Copy built frontend to API
RUN cp -r apps/web/dist apps/api/public

# Build API as executable binary
RUN cd apps/api && bun build index.ts --compile --outfile=optioo-server

# Production stage
FROM alpine:latest AS production
WORKDIR /app

# Install runtime dependencies
RUN apk add --no-cache ca-certificates

# Copy the compiled binary
COPY --from=base /app/apps/api/optioo-server ./optioo-server

# Copy built frontend
COPY --from=base /app/apps/api/public ./public

# Make binary executable
RUN chmod +x ./optioo-server

# Expose port
EXPOSE 8000

# Start the application
CMD ["./optioo-server"]