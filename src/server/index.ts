import app from "./app";

const server = Bun.serve({
  fetch: app.fetch,
  port: 3000,
  hostname: "0.0.0.0",
});

console.log(`Server running at http://${server.hostname}:${server.port}/`);