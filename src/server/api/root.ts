import { postRouter } from "~/server/api/routers/post";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = postRouter;

// export type definition of API
export type AppRouter = typeof appRouter;
