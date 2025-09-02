#!/bin/bash
set -e

echo "🚀 Starting build process..."

# Install dependencies
echo "📦 Installing dependencies..."
bun install

# Build frontend
echo "🎨 Building frontend..."
bun run build --filter=@your-org/web

# Copy frontend to API public directory
echo "📁 Copying frontend to API..."
mkdir -p apps/api/public
cp -r apps/web/dist/* apps/api/public/

# Build API as executable binary
echo "⚙️ Building API binary..."
cd apps/api
bun build index.ts --compile --outfile=prod-server
cd ../..

# Make binary executable
chmod +x apps/api/prod-server

echo "✅ Build completed successfully!"
