import type { AuthType } from "./lib/auth";
import app from "./app";

declare module "hono" {
  interface ContextVariableMap {
    user?: AuthType["user"];
    session?: AuthType["session"];
  }
}

const port = Number(process.env.PORT ?? 3000)

const server = Bun.serve({
  fetch: app.fetch,
  port: port,
  hostname: "0.0.0.0",
});

console.log(`Server running at http://${server.hostname}:${server.port}/`);