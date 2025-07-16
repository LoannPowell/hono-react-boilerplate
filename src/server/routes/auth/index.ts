import { Hono } from "hono";
import { auth, AuthType } from "../../lib/auth";
 
export const authRoutes = new Hono<{ Bindings: AuthType }>({
    strict: false,
})
.on(["POST", "GET"], "/**", (c) => auth.handler(c.req.raw));
 