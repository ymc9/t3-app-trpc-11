/* eslint-disable */
import { type PrismaClient } from "@prisma/client";
import { type TRPCProcedureRouterRecord as ProcedureRouterRecord } from "@trpc/server";
import {
  unsetMarker,
  type AnyRootTypes,
  type BuiltRouter,
  type ProcedureBuilder,
} from "@trpc/server/unstable-core-do-not-import";
import createPostRouter from "./Post.router";

export type BaseConfig = AnyRootTypes;

export type RouterFactory<Config extends BaseConfig> = <
  ProcRouterRecord extends ProcedureRouterRecord,
>(
  procedures: ProcRouterRecord,
) => BuiltRouter<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
  Config["ctx"],
  any,
  any,
  any,
  any,
  UnsetMarker,
  UnsetMarker
>;

export function db(ctx: any) {
  if (!ctx.prisma) {
    throw new Error('Missing "prisma" field in trpc context');
  }
  return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    post: createPostRouter(router, procedure),
  });
}
