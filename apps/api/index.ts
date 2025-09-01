import type { AuthType } from "./lib/auth";
import app from "./app";

declare module "hono" {
  interface ContextVariableMap {
    user?: AuthType["user"];
    session?: AuthType["session"];
  }
}

const server = Bun.serve({
  fetch: app.fetch,
  port: 3000,
  hostname: "0.0.0.0",
});

console.log(`Server running at http://${server.hostname}:${server.port}/`);