FROM oven/bun:1.2.18 AS base

WORKDIR /

COPY . .

RUN bun install

WORKDIR /src/client
RUN bun install && bun run build

WORKDIR /

EXPOSE 3000

CMD ["bun", "start"]
