/* eslint-disable */
import { Prisma } from "@prisma/client";
import { TRPCClientErrorLike } from "@trpc/client";
import {
  UseTRPCInfiniteQueryOptions,
  UseTRPCInfiniteQueryResult,
  UseTRPCMutationOptions,
  UseTRPCMutationResult,
  UseTRPCQueryOptions,
  UseTRPCQueryResult,
} from "@trpc/react-query/shared";
import { AnyRouter } from "@trpc/server";
import $Schema from "@zenstackhq/runtime/zod/input";
import { db, type BaseConfig, type ProcBuilder, type RouterFactory } from ".";
import { checkMutate, checkRead } from "../helper";

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    aggregate: procedure
      .input($Schema.PostInputSchema.aggregate)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).post.aggregate(input as any)),
      ),

    create: procedure
      .input($Schema.PostInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).post.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.PostInputSchema.deleteMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).post.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.PostInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).post.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.PostInputSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).post.findFirst(input as any)),
      ),

    findFirstOrThrow: procedure
      .input($Schema.PostInputSchema.findFirst)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).post.findFirstOrThrow(input as any)),
      ),

    findMany: procedure
      .input($Schema.PostInputSchema.findMany)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).post.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.PostInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).post.findUnique(input as any)),
      ),

    findUniqueOrThrow: procedure
      .input($Schema.PostInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).post.findUniqueOrThrow(input as any)),
      ),

    groupBy: procedure
      .input($Schema.PostInputSchema.groupBy)
      .query(({ ctx, input }) => checkRead(db(ctx).post.groupBy(input as any))),

    updateMany: procedure
      .input($Schema.PostInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).post.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.PostInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).post.update(input as any)),
      ),

    upsert: procedure
      .input($Schema.PostInputSchema.upsert)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).post.upsert(input as any)),
      ),

    count: procedure
      .input($Schema.PostInputSchema.count)
      .query(({ ctx, input }) => checkRead(db(ctx).post.count(input as any))),
  });
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter["_def"]["_config"]["$types"]["ctx"],
> {
  aggregate: {
    useQuery: <T extends Prisma.PostAggregateArgs>(
      input: Prisma.Subset<T, Prisma.PostAggregateArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.GetPostAggregateType<T>,
        Prisma.GetPostAggregateType<T>,
        Error
      >,
    ) => UseTRPCQueryResult<
      Prisma.GetPostAggregateType<T>,
      TRPCClientErrorLike<AppRouter>
    >;
    useInfiniteQuery: <T extends Prisma.PostAggregateArgs>(
      input: Omit<Prisma.Subset<T, Prisma.PostAggregateArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.GetPostAggregateType<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.GetPostAggregateType<T>,
      TRPCClientErrorLike<AppRouter>
    >;
  };
  create: {
    useMutation: <T extends Prisma.PostCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PostCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.PostGetPayload<null>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.PostGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PostCreateArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.PostCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.PostGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.PostGetPayload<T>>;
    };
  };
  deleteMany: {
    useMutation: <T extends Prisma.PostDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PostDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.PostGetPayload<null>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PostDeleteManyArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.PostDeleteManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>;
    };
  };
  delete: {
    useMutation: <T extends Prisma.PostDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PostDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.PostGetPayload<null>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.PostGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PostDeleteArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.PostDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.PostGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.PostGetPayload<T>>;
    };
  };
  findFirst: {
    useQuery: <T extends Prisma.PostFindFirstArgs>(
      input: Prisma.SelectSubset<T, Prisma.PostFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.PostGetPayload<T>,
        Prisma.PostGetPayload<T>,
        Error
      >,
    ) => UseTRPCQueryResult<
      Prisma.PostGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >;
    useInfiniteQuery: <T extends Prisma.PostFindFirstArgs>(
      input: Omit<Prisma.SelectSubset<T, Prisma.PostFindFirstArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.PostGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.PostGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >;
  };
  findFirstOrThrow: {
    useQuery: <T extends Prisma.PostFindFirstOrThrowArgs>(
      input: Prisma.SelectSubset<T, Prisma.PostFindFirstOrThrowArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.PostGetPayload<T>,
        Prisma.PostGetPayload<T>,
        Error
      >,
    ) => UseTRPCQueryResult<
      Prisma.PostGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >;
    useInfiniteQuery: <T extends Prisma.PostFindFirstOrThrowArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.PostFindFirstOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.PostGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.PostGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >;
  };
  findMany: {
    useQuery: <T extends Prisma.PostFindManyArgs>(
      input: Prisma.SelectSubset<T, Prisma.PostFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.PostGetPayload<T>>,
        Array<Prisma.PostGetPayload<T>>,
        Error
      >,
    ) => UseTRPCQueryResult<
      Array<Prisma.PostGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >;
    useInfiniteQuery: <T extends Prisma.PostFindManyArgs>(
      input: Omit<Prisma.SelectSubset<T, Prisma.PostFindManyArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.PostGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.PostGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >;
  };
  findUnique: {
    useQuery: <T extends Prisma.PostFindUniqueArgs>(
      input: Prisma.SelectSubset<T, Prisma.PostFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.PostGetPayload<T>,
        Prisma.PostGetPayload<T>,
        Error
      >,
    ) => UseTRPCQueryResult<
      Prisma.PostGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >;
    useInfiniteQuery: <T extends Prisma.PostFindUniqueArgs>(
      input: Omit<Prisma.SelectSubset<T, Prisma.PostFindUniqueArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.PostGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.PostGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >;
  };
  findUniqueOrThrow: {
    useQuery: <T extends Prisma.PostFindUniqueOrThrowArgs>(
      input: Prisma.SelectSubset<T, Prisma.PostFindUniqueOrThrowArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.PostGetPayload<T>,
        Prisma.PostGetPayload<T>,
        Error
      >,
    ) => UseTRPCQueryResult<
      Prisma.PostGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >;
    useInfiniteQuery: <T extends Prisma.PostFindUniqueOrThrowArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.PostFindUniqueOrThrowArgs>,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.PostGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.PostGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >;
  };
  groupBy: {
    useQuery: <
      T extends Prisma.PostGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.PostGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.PostGroupByArgs["orderBy"] },
      OrderFields extends Prisma.ExcludeUnderscoreKeys<
        Prisma.Keys<Prisma.MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends Prisma.MaybeTupleToUnion<T["by"]>,
      ByValid extends Prisma.Has<ByFields, OrderFields>,
      HavingFields extends Prisma.GetHavingFields<T["having"]>,
      HavingValid extends Prisma.Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? Prisma.True : Prisma.False,
      InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Prisma.Keys<T>
            ? "orderBy" extends Prisma.Keys<T>
              ? ByValid extends Prisma.True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Prisma.Keys<T>
              ? "orderBy" extends Prisma.Keys<T>
                ? ByValid extends Prisma.True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends Prisma.True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      input: Prisma.SubsetIntersection<T, Prisma.PostGroupByArgs, OrderByArg> &
        InputErrors,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        {} extends InputErrors ? Prisma.GetPostGroupByPayload<T> : InputErrors,
        {} extends InputErrors ? Prisma.GetPostGroupByPayload<T> : InputErrors,
        Error
      >,
    ) => UseTRPCQueryResult<
      {} extends InputErrors ? Prisma.GetPostGroupByPayload<T> : InputErrors,
      TRPCClientErrorLike<AppRouter>
    >;
    useInfiniteQuery: <
      T extends Prisma.PostGroupByArgs,
      HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<"skip", Prisma.Keys<T>>,
        Prisma.Extends<"take", Prisma.Keys<T>>
      >,
      OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.PostGroupByArgs["orderBy"] }
        : { orderBy?: Prisma.PostGroupByArgs["orderBy"] },
      OrderFields extends Prisma.ExcludeUnderscoreKeys<
        Prisma.Keys<Prisma.MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends Prisma.MaybeTupleToUnion<T["by"]>,
      ByValid extends Prisma.Has<ByFields, OrderFields>,
      HavingFields extends Prisma.GetHavingFields<T["having"]>,
      HavingValid extends Prisma.Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? Prisma.True : Prisma.False,
      InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Prisma.Keys<T>
            ? "orderBy" extends Prisma.Keys<T>
              ? ByValid extends Prisma.True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Prisma.Keys<T>
              ? "orderBy" extends Prisma.Keys<T>
                ? ByValid extends Prisma.True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends Prisma.True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      input: Omit<
        Prisma.SubsetIntersection<T, Prisma.PostGroupByArgs, OrderByArg> &
          InputErrors,
        "cursor"
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        {} extends InputErrors ? Prisma.GetPostGroupByPayload<T> : InputErrors,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      {} extends InputErrors ? Prisma.GetPostGroupByPayload<T> : InputErrors,
      TRPCClientErrorLike<AppRouter>
    >;
  };
  updateMany: {
    useMutation: <T extends Prisma.PostUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PostUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.PostGetPayload<null>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PostUpdateManyArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.PostUpdateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>;
    };
  };
  update: {
    useMutation: <T extends Prisma.PostUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PostUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.PostGetPayload<null>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.PostGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PostUpdateArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.PostUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.PostGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.PostGetPayload<T>>;
    };
  };
  upsert: {
    useMutation: <T extends Prisma.PostUpsertArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.PostUpsertArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.PostGetPayload<null>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.PostGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.PostUpsertArgs>,
        Context
      >,
      "mutateAsync"
    > & {
      mutateAsync: <T extends Prisma.PostUpsertArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.PostGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.PostGetPayload<T>>;
    };
  };
  count: {
    useQuery: <T extends Prisma.PostCountArgs>(
      input: Prisma.Subset<T, Prisma.PostCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.PostCountAggregateOutputType
              >
          : number,
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.PostCountAggregateOutputType
              >
          : number,
        Error
      >,
    ) => UseTRPCQueryResult<
      "select" extends keyof T
        ? T["select"] extends true
          ? number
          : Prisma.GetScalarType<
              T["select"],
              Prisma.PostCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >;
    useInfiniteQuery: <T extends Prisma.PostCountArgs>(
      input: Omit<Prisma.Subset<T, Prisma.PostCountArgs>, "cursor">,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        "select" extends keyof T
          ? T["select"] extends true
            ? number
            : Prisma.GetScalarType<
                T["select"],
                Prisma.PostCountAggregateOutputType
              >
          : number,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      "select" extends keyof T
        ? T["select"] extends true
          ? number
          : Prisma.GetScalarType<
              T["select"],
              Prisma.PostCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >;
  };
}
