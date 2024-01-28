import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { createRouter } from "./generated/routers";

export const postRouter = createRouter(createTRPCRouter, publicProcedure);
