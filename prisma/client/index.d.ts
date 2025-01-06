
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TaskList
 * 
 */
export type TaskList = $Result.DefaultSelection<Prisma.$TaskListPayload>
/**
 * Model Records
 * 
 */
export type Records = $Result.DefaultSelection<Prisma.$RecordsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TaskLists
 * const taskLists = await prisma.taskList.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TaskLists
   * const taskLists = await prisma.taskList.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.taskList`: Exposes CRUD operations for the **TaskList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskLists
    * const taskLists = await prisma.taskList.findMany()
    * ```
    */
  get taskList(): Prisma.TaskListDelegate<ExtArgs>;

  /**
   * `prisma.records`: Exposes CRUD operations for the **Records** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Records
    * const records = await prisma.records.findMany()
    * ```
    */
  get records(): Prisma.RecordsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    TaskList: 'TaskList',
    Records: 'Records'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "taskList" | "records"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TaskList: {
        payload: Prisma.$TaskListPayload<ExtArgs>
        fields: Prisma.TaskListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload>
          }
          findFirst: {
            args: Prisma.TaskListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload>
          }
          findMany: {
            args: Prisma.TaskListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload>[]
          }
          create: {
            args: Prisma.TaskListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload>
          }
          createMany: {
            args: Prisma.TaskListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload>[]
          }
          delete: {
            args: Prisma.TaskListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload>
          }
          update: {
            args: Prisma.TaskListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload>
          }
          deleteMany: {
            args: Prisma.TaskListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskListPayload>
          }
          aggregate: {
            args: Prisma.TaskListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskList>
          }
          groupBy: {
            args: Prisma.TaskListGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskListGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskListCountArgs<ExtArgs>
            result: $Utils.Optional<TaskListCountAggregateOutputType> | number
          }
        }
      }
      Records: {
        payload: Prisma.$RecordsPayload<ExtArgs>
        fields: Prisma.RecordsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecordsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecordsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          findFirst: {
            args: Prisma.RecordsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecordsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          findMany: {
            args: Prisma.RecordsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>[]
          }
          create: {
            args: Prisma.RecordsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          createMany: {
            args: Prisma.RecordsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecordsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>[]
          }
          delete: {
            args: Prisma.RecordsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          update: {
            args: Prisma.RecordsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          deleteMany: {
            args: Prisma.RecordsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecordsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RecordsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          aggregate: {
            args: Prisma.RecordsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecords>
          }
          groupBy: {
            args: Prisma.RecordsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecordsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecordsCountArgs<ExtArgs>
            result: $Utils.Optional<RecordsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TaskListCountOutputType
   */

  export type TaskListCountOutputType = {
    Records: number
  }

  export type TaskListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Records?: boolean | TaskListCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes
  /**
   * TaskListCountOutputType without action
   */
  export type TaskListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskListCountOutputType
     */
    select?: TaskListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskListCountOutputType without action
   */
  export type TaskListCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TaskList
   */

  export type AggregateTaskList = {
    _count: TaskListCountAggregateOutputType | null
    _avg: TaskListAvgAggregateOutputType | null
    _sum: TaskListSumAggregateOutputType | null
    _min: TaskListMinAggregateOutputType | null
    _max: TaskListMaxAggregateOutputType | null
  }

  export type TaskListAvgAggregateOutputType = {
    id: number | null
  }

  export type TaskListSumAggregateOutputType = {
    id: number | null
  }

  export type TaskListMinAggregateOutputType = {
    id: number | null
    taskName: string | null
    taskDescription: string | null
    data: string | null
    executeTime: Date | null
    startTime: Date | null
    finishTime: Date | null
  }

  export type TaskListMaxAggregateOutputType = {
    id: number | null
    taskName: string | null
    taskDescription: string | null
    data: string | null
    executeTime: Date | null
    startTime: Date | null
    finishTime: Date | null
  }

  export type TaskListCountAggregateOutputType = {
    id: number
    taskName: number
    taskDescription: number
    data: number
    executeTime: number
    startTime: number
    finishTime: number
    _all: number
  }


  export type TaskListAvgAggregateInputType = {
    id?: true
  }

  export type TaskListSumAggregateInputType = {
    id?: true
  }

  export type TaskListMinAggregateInputType = {
    id?: true
    taskName?: true
    taskDescription?: true
    data?: true
    executeTime?: true
    startTime?: true
    finishTime?: true
  }

  export type TaskListMaxAggregateInputType = {
    id?: true
    taskName?: true
    taskDescription?: true
    data?: true
    executeTime?: true
    startTime?: true
    finishTime?: true
  }

  export type TaskListCountAggregateInputType = {
    id?: true
    taskName?: true
    taskDescription?: true
    data?: true
    executeTime?: true
    startTime?: true
    finishTime?: true
    _all?: true
  }

  export type TaskListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskList to aggregate.
     */
    where?: TaskListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLists to fetch.
     */
    orderBy?: TaskListOrderByWithRelationInput | TaskListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskLists
    **/
    _count?: true | TaskListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskListMaxAggregateInputType
  }

  export type GetTaskListAggregateType<T extends TaskListAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskList[P]>
      : GetScalarType<T[P], AggregateTaskList[P]>
  }




  export type TaskListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskListWhereInput
    orderBy?: TaskListOrderByWithAggregationInput | TaskListOrderByWithAggregationInput[]
    by: TaskListScalarFieldEnum[] | TaskListScalarFieldEnum
    having?: TaskListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskListCountAggregateInputType | true
    _avg?: TaskListAvgAggregateInputType
    _sum?: TaskListSumAggregateInputType
    _min?: TaskListMinAggregateInputType
    _max?: TaskListMaxAggregateInputType
  }

  export type TaskListGroupByOutputType = {
    id: number
    taskName: string
    taskDescription: string
    data: string
    executeTime: Date
    startTime: Date | null
    finishTime: Date | null
    _count: TaskListCountAggregateOutputType | null
    _avg: TaskListAvgAggregateOutputType | null
    _sum: TaskListSumAggregateOutputType | null
    _min: TaskListMinAggregateOutputType | null
    _max: TaskListMaxAggregateOutputType | null
  }

  type GetTaskListGroupByPayload<T extends TaskListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskListGroupByOutputType[P]>
            : GetScalarType<T[P], TaskListGroupByOutputType[P]>
        }
      >
    >


  export type TaskListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskName?: boolean
    taskDescription?: boolean
    data?: boolean
    executeTime?: boolean
    startTime?: boolean
    finishTime?: boolean
    Records?: boolean | TaskList$RecordsArgs<ExtArgs>
    _count?: boolean | TaskListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskList"]>

  export type TaskListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskName?: boolean
    taskDescription?: boolean
    data?: boolean
    executeTime?: boolean
    startTime?: boolean
    finishTime?: boolean
  }, ExtArgs["result"]["taskList"]>

  export type TaskListSelectScalar = {
    id?: boolean
    taskName?: boolean
    taskDescription?: boolean
    data?: boolean
    executeTime?: boolean
    startTime?: boolean
    finishTime?: boolean
  }

  export type TaskListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Records?: boolean | TaskList$RecordsArgs<ExtArgs>
    _count?: boolean | TaskListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TaskListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskList"
    objects: {
      Records: Prisma.$RecordsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taskName: string
      taskDescription: string
      data: string
      executeTime: Date
      startTime: Date | null
      finishTime: Date | null
    }, ExtArgs["result"]["taskList"]>
    composites: {}
  }

  type TaskListGetPayload<S extends boolean | null | undefined | TaskListDefaultArgs> = $Result.GetResult<Prisma.$TaskListPayload, S>

  type TaskListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskListFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskListCountAggregateInputType | true
    }

  export interface TaskListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskList'], meta: { name: 'TaskList' } }
    /**
     * Find zero or one TaskList that matches the filter.
     * @param {TaskListFindUniqueArgs} args - Arguments to find a TaskList
     * @example
     * // Get one TaskList
     * const taskList = await prisma.taskList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskListFindUniqueArgs>(args: SelectSubset<T, TaskListFindUniqueArgs<ExtArgs>>): Prisma__TaskListClient<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TaskList that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskListFindUniqueOrThrowArgs} args - Arguments to find a TaskList
     * @example
     * // Get one TaskList
     * const taskList = await prisma.taskList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskListFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskListClient<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TaskList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskListFindFirstArgs} args - Arguments to find a TaskList
     * @example
     * // Get one TaskList
     * const taskList = await prisma.taskList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskListFindFirstArgs>(args?: SelectSubset<T, TaskListFindFirstArgs<ExtArgs>>): Prisma__TaskListClient<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TaskList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskListFindFirstOrThrowArgs} args - Arguments to find a TaskList
     * @example
     * // Get one TaskList
     * const taskList = await prisma.taskList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskListFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskListFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskListClient<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TaskLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskLists
     * const taskLists = await prisma.taskList.findMany()
     * 
     * // Get first 10 TaskLists
     * const taskLists = await prisma.taskList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskListWithIdOnly = await prisma.taskList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskListFindManyArgs>(args?: SelectSubset<T, TaskListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TaskList.
     * @param {TaskListCreateArgs} args - Arguments to create a TaskList.
     * @example
     * // Create one TaskList
     * const TaskList = await prisma.taskList.create({
     *   data: {
     *     // ... data to create a TaskList
     *   }
     * })
     * 
     */
    create<T extends TaskListCreateArgs>(args: SelectSubset<T, TaskListCreateArgs<ExtArgs>>): Prisma__TaskListClient<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TaskLists.
     * @param {TaskListCreateManyArgs} args - Arguments to create many TaskLists.
     * @example
     * // Create many TaskLists
     * const taskList = await prisma.taskList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskListCreateManyArgs>(args?: SelectSubset<T, TaskListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskLists and returns the data saved in the database.
     * @param {TaskListCreateManyAndReturnArgs} args - Arguments to create many TaskLists.
     * @example
     * // Create many TaskLists
     * const taskList = await prisma.taskList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskLists and only return the `id`
     * const taskListWithIdOnly = await prisma.taskList.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskListCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TaskList.
     * @param {TaskListDeleteArgs} args - Arguments to delete one TaskList.
     * @example
     * // Delete one TaskList
     * const TaskList = await prisma.taskList.delete({
     *   where: {
     *     // ... filter to delete one TaskList
     *   }
     * })
     * 
     */
    delete<T extends TaskListDeleteArgs>(args: SelectSubset<T, TaskListDeleteArgs<ExtArgs>>): Prisma__TaskListClient<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TaskList.
     * @param {TaskListUpdateArgs} args - Arguments to update one TaskList.
     * @example
     * // Update one TaskList
     * const taskList = await prisma.taskList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskListUpdateArgs>(args: SelectSubset<T, TaskListUpdateArgs<ExtArgs>>): Prisma__TaskListClient<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TaskLists.
     * @param {TaskListDeleteManyArgs} args - Arguments to filter TaskLists to delete.
     * @example
     * // Delete a few TaskLists
     * const { count } = await prisma.taskList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskListDeleteManyArgs>(args?: SelectSubset<T, TaskListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskLists
     * const taskList = await prisma.taskList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskListUpdateManyArgs>(args: SelectSubset<T, TaskListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskList.
     * @param {TaskListUpsertArgs} args - Arguments to update or create a TaskList.
     * @example
     * // Update or create a TaskList
     * const taskList = await prisma.taskList.upsert({
     *   create: {
     *     // ... data to create a TaskList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskList we want to update
     *   }
     * })
     */
    upsert<T extends TaskListUpsertArgs>(args: SelectSubset<T, TaskListUpsertArgs<ExtArgs>>): Prisma__TaskListClient<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TaskLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskListCountArgs} args - Arguments to filter TaskLists to count.
     * @example
     * // Count the number of TaskLists
     * const count = await prisma.taskList.count({
     *   where: {
     *     // ... the filter for the TaskLists we want to count
     *   }
     * })
    **/
    count<T extends TaskListCountArgs>(
      args?: Subset<T, TaskListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskListAggregateArgs>(args: Subset<T, TaskListAggregateArgs>): Prisma.PrismaPromise<GetTaskListAggregateType<T>>

    /**
     * Group by TaskList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskListGroupByArgs['orderBy'] }
        : { orderBy?: TaskListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskList model
   */
  readonly fields: TaskListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Records<T extends TaskList$RecordsArgs<ExtArgs> = {}>(args?: Subset<T, TaskList$RecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskList model
   */ 
  interface TaskListFieldRefs {
    readonly id: FieldRef<"TaskList", 'Int'>
    readonly taskName: FieldRef<"TaskList", 'String'>
    readonly taskDescription: FieldRef<"TaskList", 'String'>
    readonly data: FieldRef<"TaskList", 'String'>
    readonly executeTime: FieldRef<"TaskList", 'DateTime'>
    readonly startTime: FieldRef<"TaskList", 'DateTime'>
    readonly finishTime: FieldRef<"TaskList", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskList findUnique
   */
  export type TaskListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * Filter, which TaskList to fetch.
     */
    where: TaskListWhereUniqueInput
  }

  /**
   * TaskList findUniqueOrThrow
   */
  export type TaskListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * Filter, which TaskList to fetch.
     */
    where: TaskListWhereUniqueInput
  }

  /**
   * TaskList findFirst
   */
  export type TaskListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * Filter, which TaskList to fetch.
     */
    where?: TaskListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLists to fetch.
     */
    orderBy?: TaskListOrderByWithRelationInput | TaskListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskLists.
     */
    cursor?: TaskListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskLists.
     */
    distinct?: TaskListScalarFieldEnum | TaskListScalarFieldEnum[]
  }

  /**
   * TaskList findFirstOrThrow
   */
  export type TaskListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * Filter, which TaskList to fetch.
     */
    where?: TaskListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLists to fetch.
     */
    orderBy?: TaskListOrderByWithRelationInput | TaskListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskLists.
     */
    cursor?: TaskListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskLists.
     */
    distinct?: TaskListScalarFieldEnum | TaskListScalarFieldEnum[]
  }

  /**
   * TaskList findMany
   */
  export type TaskListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * Filter, which TaskLists to fetch.
     */
    where?: TaskListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskLists to fetch.
     */
    orderBy?: TaskListOrderByWithRelationInput | TaskListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskLists.
     */
    cursor?: TaskListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskLists.
     */
    skip?: number
    distinct?: TaskListScalarFieldEnum | TaskListScalarFieldEnum[]
  }

  /**
   * TaskList create
   */
  export type TaskListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskList.
     */
    data: XOR<TaskListCreateInput, TaskListUncheckedCreateInput>
  }

  /**
   * TaskList createMany
   */
  export type TaskListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskLists.
     */
    data: TaskListCreateManyInput | TaskListCreateManyInput[]
  }

  /**
   * TaskList createManyAndReturn
   */
  export type TaskListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TaskLists.
     */
    data: TaskListCreateManyInput | TaskListCreateManyInput[]
  }

  /**
   * TaskList update
   */
  export type TaskListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskList.
     */
    data: XOR<TaskListUpdateInput, TaskListUncheckedUpdateInput>
    /**
     * Choose, which TaskList to update.
     */
    where: TaskListWhereUniqueInput
  }

  /**
   * TaskList updateMany
   */
  export type TaskListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskLists.
     */
    data: XOR<TaskListUpdateManyMutationInput, TaskListUncheckedUpdateManyInput>
    /**
     * Filter which TaskLists to update
     */
    where?: TaskListWhereInput
  }

  /**
   * TaskList upsert
   */
  export type TaskListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskList to update in case it exists.
     */
    where: TaskListWhereUniqueInput
    /**
     * In case the TaskList found by the `where` argument doesn't exist, create a new TaskList with this data.
     */
    create: XOR<TaskListCreateInput, TaskListUncheckedCreateInput>
    /**
     * In case the TaskList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskListUpdateInput, TaskListUncheckedUpdateInput>
  }

  /**
   * TaskList delete
   */
  export type TaskListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
    /**
     * Filter which TaskList to delete.
     */
    where: TaskListWhereUniqueInput
  }

  /**
   * TaskList deleteMany
   */
  export type TaskListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskLists to delete
     */
    where?: TaskListWhereInput
  }

  /**
   * TaskList.Records
   */
  export type TaskList$RecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    where?: RecordsWhereInput
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    cursor?: RecordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }

  /**
   * TaskList without action
   */
  export type TaskListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskList
     */
    select?: TaskListSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskListInclude<ExtArgs> | null
  }


  /**
   * Model Records
   */

  export type AggregateRecords = {
    _count: RecordsCountAggregateOutputType | null
    _avg: RecordsAvgAggregateOutputType | null
    _sum: RecordsSumAggregateOutputType | null
    _min: RecordsMinAggregateOutputType | null
    _max: RecordsMaxAggregateOutputType | null
  }

  export type RecordsAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
  }

  export type RecordsSumAggregateOutputType = {
    id: number | null
    taskId: number | null
  }

  export type RecordsMinAggregateOutputType = {
    id: number | null
    finishTime: Date | null
    itemId: string | null
    taskId: number | null
    error: string | null
  }

  export type RecordsMaxAggregateOutputType = {
    id: number | null
    finishTime: Date | null
    itemId: string | null
    taskId: number | null
    error: string | null
  }

  export type RecordsCountAggregateOutputType = {
    id: number
    finishTime: number
    itemId: number
    taskId: number
    error: number
    _all: number
  }


  export type RecordsAvgAggregateInputType = {
    id?: true
    taskId?: true
  }

  export type RecordsSumAggregateInputType = {
    id?: true
    taskId?: true
  }

  export type RecordsMinAggregateInputType = {
    id?: true
    finishTime?: true
    itemId?: true
    taskId?: true
    error?: true
  }

  export type RecordsMaxAggregateInputType = {
    id?: true
    finishTime?: true
    itemId?: true
    taskId?: true
    error?: true
  }

  export type RecordsCountAggregateInputType = {
    id?: true
    finishTime?: true
    itemId?: true
    taskId?: true
    error?: true
    _all?: true
  }

  export type RecordsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Records to aggregate.
     */
    where?: RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Records
    **/
    _count?: true | RecordsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecordsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecordsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordsMaxAggregateInputType
  }

  export type GetRecordsAggregateType<T extends RecordsAggregateArgs> = {
        [P in keyof T & keyof AggregateRecords]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecords[P]>
      : GetScalarType<T[P], AggregateRecords[P]>
  }




  export type RecordsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordsWhereInput
    orderBy?: RecordsOrderByWithAggregationInput | RecordsOrderByWithAggregationInput[]
    by: RecordsScalarFieldEnum[] | RecordsScalarFieldEnum
    having?: RecordsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordsCountAggregateInputType | true
    _avg?: RecordsAvgAggregateInputType
    _sum?: RecordsSumAggregateInputType
    _min?: RecordsMinAggregateInputType
    _max?: RecordsMaxAggregateInputType
  }

  export type RecordsGroupByOutputType = {
    id: number
    finishTime: Date
    itemId: string
    taskId: number
    error: string | null
    _count: RecordsCountAggregateOutputType | null
    _avg: RecordsAvgAggregateOutputType | null
    _sum: RecordsSumAggregateOutputType | null
    _min: RecordsMinAggregateOutputType | null
    _max: RecordsMaxAggregateOutputType | null
  }

  type GetRecordsGroupByPayload<T extends RecordsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecordsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordsGroupByOutputType[P]>
            : GetScalarType<T[P], RecordsGroupByOutputType[P]>
        }
      >
    >


  export type RecordsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    finishTime?: boolean
    itemId?: boolean
    taskId?: boolean
    error?: boolean
    task?: boolean | TaskListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["records"]>

  export type RecordsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    finishTime?: boolean
    itemId?: boolean
    taskId?: boolean
    error?: boolean
    task?: boolean | TaskListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["records"]>

  export type RecordsSelectScalar = {
    id?: boolean
    finishTime?: boolean
    itemId?: boolean
    taskId?: boolean
    error?: boolean
  }

  export type RecordsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskListDefaultArgs<ExtArgs>
  }
  export type RecordsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskListDefaultArgs<ExtArgs>
  }

  export type $RecordsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Records"
    objects: {
      task: Prisma.$TaskListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      finishTime: Date
      itemId: string
      taskId: number
      error: string | null
    }, ExtArgs["result"]["records"]>
    composites: {}
  }

  type RecordsGetPayload<S extends boolean | null | undefined | RecordsDefaultArgs> = $Result.GetResult<Prisma.$RecordsPayload, S>

  type RecordsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecordsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecordsCountAggregateInputType | true
    }

  export interface RecordsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Records'], meta: { name: 'Records' } }
    /**
     * Find zero or one Records that matches the filter.
     * @param {RecordsFindUniqueArgs} args - Arguments to find a Records
     * @example
     * // Get one Records
     * const records = await prisma.records.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecordsFindUniqueArgs>(args: SelectSubset<T, RecordsFindUniqueArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Records that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RecordsFindUniqueOrThrowArgs} args - Arguments to find a Records
     * @example
     * // Get one Records
     * const records = await prisma.records.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecordsFindUniqueOrThrowArgs>(args: SelectSubset<T, RecordsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsFindFirstArgs} args - Arguments to find a Records
     * @example
     * // Get one Records
     * const records = await prisma.records.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecordsFindFirstArgs>(args?: SelectSubset<T, RecordsFindFirstArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Records that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsFindFirstOrThrowArgs} args - Arguments to find a Records
     * @example
     * // Get one Records
     * const records = await prisma.records.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecordsFindFirstOrThrowArgs>(args?: SelectSubset<T, RecordsFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Records
     * const records = await prisma.records.findMany()
     * 
     * // Get first 10 Records
     * const records = await prisma.records.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recordsWithIdOnly = await prisma.records.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecordsFindManyArgs>(args?: SelectSubset<T, RecordsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Records.
     * @param {RecordsCreateArgs} args - Arguments to create a Records.
     * @example
     * // Create one Records
     * const Records = await prisma.records.create({
     *   data: {
     *     // ... data to create a Records
     *   }
     * })
     * 
     */
    create<T extends RecordsCreateArgs>(args: SelectSubset<T, RecordsCreateArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Records.
     * @param {RecordsCreateManyArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const records = await prisma.records.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecordsCreateManyArgs>(args?: SelectSubset<T, RecordsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Records and returns the data saved in the database.
     * @param {RecordsCreateManyAndReturnArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const records = await prisma.records.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Records and only return the `id`
     * const recordsWithIdOnly = await prisma.records.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecordsCreateManyAndReturnArgs>(args?: SelectSubset<T, RecordsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Records.
     * @param {RecordsDeleteArgs} args - Arguments to delete one Records.
     * @example
     * // Delete one Records
     * const Records = await prisma.records.delete({
     *   where: {
     *     // ... filter to delete one Records
     *   }
     * })
     * 
     */
    delete<T extends RecordsDeleteArgs>(args: SelectSubset<T, RecordsDeleteArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Records.
     * @param {RecordsUpdateArgs} args - Arguments to update one Records.
     * @example
     * // Update one Records
     * const records = await prisma.records.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecordsUpdateArgs>(args: SelectSubset<T, RecordsUpdateArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Records.
     * @param {RecordsDeleteManyArgs} args - Arguments to filter Records to delete.
     * @example
     * // Delete a few Records
     * const { count } = await prisma.records.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecordsDeleteManyArgs>(args?: SelectSubset<T, RecordsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Records
     * const records = await prisma.records.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecordsUpdateManyArgs>(args: SelectSubset<T, RecordsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Records.
     * @param {RecordsUpsertArgs} args - Arguments to update or create a Records.
     * @example
     * // Update or create a Records
     * const records = await prisma.records.upsert({
     *   create: {
     *     // ... data to create a Records
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Records we want to update
     *   }
     * })
     */
    upsert<T extends RecordsUpsertArgs>(args: SelectSubset<T, RecordsUpsertArgs<ExtArgs>>): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsCountArgs} args - Arguments to filter Records to count.
     * @example
     * // Count the number of Records
     * const count = await prisma.records.count({
     *   where: {
     *     // ... the filter for the Records we want to count
     *   }
     * })
    **/
    count<T extends RecordsCountArgs>(
      args?: Subset<T, RecordsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecordsAggregateArgs>(args: Subset<T, RecordsAggregateArgs>): Prisma.PrismaPromise<GetRecordsAggregateType<T>>

    /**
     * Group by Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecordsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordsGroupByArgs['orderBy'] }
        : { orderBy?: RecordsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecordsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Records model
   */
  readonly fields: RecordsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Records.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecordsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskListDefaultArgs<ExtArgs>>): Prisma__TaskListClient<$Result.GetResult<Prisma.$TaskListPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Records model
   */ 
  interface RecordsFieldRefs {
    readonly id: FieldRef<"Records", 'Int'>
    readonly finishTime: FieldRef<"Records", 'DateTime'>
    readonly itemId: FieldRef<"Records", 'String'>
    readonly taskId: FieldRef<"Records", 'Int'>
    readonly error: FieldRef<"Records", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Records findUnique
   */
  export type RecordsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where: RecordsWhereUniqueInput
  }

  /**
   * Records findUniqueOrThrow
   */
  export type RecordsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where: RecordsWhereUniqueInput
  }

  /**
   * Records findFirst
   */
  export type RecordsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }

  /**
   * Records findFirstOrThrow
   */
  export type RecordsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }

  /**
   * Records findMany
   */
  export type RecordsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Records.
     */
    cursor?: RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }

  /**
   * Records create
   */
  export type RecordsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * The data needed to create a Records.
     */
    data: XOR<RecordsCreateInput, RecordsUncheckedCreateInput>
  }

  /**
   * Records createMany
   */
  export type RecordsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Records.
     */
    data: RecordsCreateManyInput | RecordsCreateManyInput[]
  }

  /**
   * Records createManyAndReturn
   */
  export type RecordsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Records.
     */
    data: RecordsCreateManyInput | RecordsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Records update
   */
  export type RecordsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * The data needed to update a Records.
     */
    data: XOR<RecordsUpdateInput, RecordsUncheckedUpdateInput>
    /**
     * Choose, which Records to update.
     */
    where: RecordsWhereUniqueInput
  }

  /**
   * Records updateMany
   */
  export type RecordsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Records.
     */
    data: XOR<RecordsUpdateManyMutationInput, RecordsUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordsWhereInput
  }

  /**
   * Records upsert
   */
  export type RecordsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * The filter to search for the Records to update in case it exists.
     */
    where: RecordsWhereUniqueInput
    /**
     * In case the Records found by the `where` argument doesn't exist, create a new Records with this data.
     */
    create: XOR<RecordsCreateInput, RecordsUncheckedCreateInput>
    /**
     * In case the Records was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecordsUpdateInput, RecordsUncheckedUpdateInput>
  }

  /**
   * Records delete
   */
  export type RecordsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter which Records to delete.
     */
    where: RecordsWhereUniqueInput
  }

  /**
   * Records deleteMany
   */
  export type RecordsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Records to delete
     */
    where?: RecordsWhereInput
  }

  /**
   * Records without action
   */
  export type RecordsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TaskListScalarFieldEnum: {
    id: 'id',
    taskName: 'taskName',
    taskDescription: 'taskDescription',
    data: 'data',
    executeTime: 'executeTime',
    startTime: 'startTime',
    finishTime: 'finishTime'
  };

  export type TaskListScalarFieldEnum = (typeof TaskListScalarFieldEnum)[keyof typeof TaskListScalarFieldEnum]


  export const RecordsScalarFieldEnum: {
    id: 'id',
    finishTime: 'finishTime',
    itemId: 'itemId',
    taskId: 'taskId',
    error: 'error'
  };

  export type RecordsScalarFieldEnum = (typeof RecordsScalarFieldEnum)[keyof typeof RecordsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type TaskListWhereInput = {
    AND?: TaskListWhereInput | TaskListWhereInput[]
    OR?: TaskListWhereInput[]
    NOT?: TaskListWhereInput | TaskListWhereInput[]
    id?: IntFilter<"TaskList"> | number
    taskName?: StringFilter<"TaskList"> | string
    taskDescription?: StringFilter<"TaskList"> | string
    data?: StringFilter<"TaskList"> | string
    executeTime?: DateTimeFilter<"TaskList"> | Date | string
    startTime?: DateTimeNullableFilter<"TaskList"> | Date | string | null
    finishTime?: DateTimeNullableFilter<"TaskList"> | Date | string | null
    Records?: RecordsListRelationFilter
  }

  export type TaskListOrderByWithRelationInput = {
    id?: SortOrder
    taskName?: SortOrder
    taskDescription?: SortOrder
    data?: SortOrder
    executeTime?: SortOrder
    startTime?: SortOrderInput | SortOrder
    finishTime?: SortOrderInput | SortOrder
    Records?: RecordsOrderByRelationAggregateInput
  }

  export type TaskListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskListWhereInput | TaskListWhereInput[]
    OR?: TaskListWhereInput[]
    NOT?: TaskListWhereInput | TaskListWhereInput[]
    taskName?: StringFilter<"TaskList"> | string
    taskDescription?: StringFilter<"TaskList"> | string
    data?: StringFilter<"TaskList"> | string
    executeTime?: DateTimeFilter<"TaskList"> | Date | string
    startTime?: DateTimeNullableFilter<"TaskList"> | Date | string | null
    finishTime?: DateTimeNullableFilter<"TaskList"> | Date | string | null
    Records?: RecordsListRelationFilter
  }, "id">

  export type TaskListOrderByWithAggregationInput = {
    id?: SortOrder
    taskName?: SortOrder
    taskDescription?: SortOrder
    data?: SortOrder
    executeTime?: SortOrder
    startTime?: SortOrderInput | SortOrder
    finishTime?: SortOrderInput | SortOrder
    _count?: TaskListCountOrderByAggregateInput
    _avg?: TaskListAvgOrderByAggregateInput
    _max?: TaskListMaxOrderByAggregateInput
    _min?: TaskListMinOrderByAggregateInput
    _sum?: TaskListSumOrderByAggregateInput
  }

  export type TaskListScalarWhereWithAggregatesInput = {
    AND?: TaskListScalarWhereWithAggregatesInput | TaskListScalarWhereWithAggregatesInput[]
    OR?: TaskListScalarWhereWithAggregatesInput[]
    NOT?: TaskListScalarWhereWithAggregatesInput | TaskListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaskList"> | number
    taskName?: StringWithAggregatesFilter<"TaskList"> | string
    taskDescription?: StringWithAggregatesFilter<"TaskList"> | string
    data?: StringWithAggregatesFilter<"TaskList"> | string
    executeTime?: DateTimeWithAggregatesFilter<"TaskList"> | Date | string
    startTime?: DateTimeNullableWithAggregatesFilter<"TaskList"> | Date | string | null
    finishTime?: DateTimeNullableWithAggregatesFilter<"TaskList"> | Date | string | null
  }

  export type RecordsWhereInput = {
    AND?: RecordsWhereInput | RecordsWhereInput[]
    OR?: RecordsWhereInput[]
    NOT?: RecordsWhereInput | RecordsWhereInput[]
    id?: IntFilter<"Records"> | number
    finishTime?: DateTimeFilter<"Records"> | Date | string
    itemId?: StringFilter<"Records"> | string
    taskId?: IntFilter<"Records"> | number
    error?: StringNullableFilter<"Records"> | string | null
    task?: XOR<TaskListScalarRelationFilter, TaskListWhereInput>
  }

  export type RecordsOrderByWithRelationInput = {
    id?: SortOrder
    finishTime?: SortOrder
    itemId?: SortOrder
    taskId?: SortOrder
    error?: SortOrderInput | SortOrder
    task?: TaskListOrderByWithRelationInput
  }

  export type RecordsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RecordsWhereInput | RecordsWhereInput[]
    OR?: RecordsWhereInput[]
    NOT?: RecordsWhereInput | RecordsWhereInput[]
    finishTime?: DateTimeFilter<"Records"> | Date | string
    itemId?: StringFilter<"Records"> | string
    taskId?: IntFilter<"Records"> | number
    error?: StringNullableFilter<"Records"> | string | null
    task?: XOR<TaskListScalarRelationFilter, TaskListWhereInput>
  }, "id">

  export type RecordsOrderByWithAggregationInput = {
    id?: SortOrder
    finishTime?: SortOrder
    itemId?: SortOrder
    taskId?: SortOrder
    error?: SortOrderInput | SortOrder
    _count?: RecordsCountOrderByAggregateInput
    _avg?: RecordsAvgOrderByAggregateInput
    _max?: RecordsMaxOrderByAggregateInput
    _min?: RecordsMinOrderByAggregateInput
    _sum?: RecordsSumOrderByAggregateInput
  }

  export type RecordsScalarWhereWithAggregatesInput = {
    AND?: RecordsScalarWhereWithAggregatesInput | RecordsScalarWhereWithAggregatesInput[]
    OR?: RecordsScalarWhereWithAggregatesInput[]
    NOT?: RecordsScalarWhereWithAggregatesInput | RecordsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Records"> | number
    finishTime?: DateTimeWithAggregatesFilter<"Records"> | Date | string
    itemId?: StringWithAggregatesFilter<"Records"> | string
    taskId?: IntWithAggregatesFilter<"Records"> | number
    error?: StringNullableWithAggregatesFilter<"Records"> | string | null
  }

  export type TaskListCreateInput = {
    taskName: string
    taskDescription: string
    data: string
    executeTime: Date | string
    startTime?: Date | string | null
    finishTime?: Date | string | null
    Records?: RecordsCreateNestedManyWithoutTaskInput
  }

  export type TaskListUncheckedCreateInput = {
    id?: number
    taskName: string
    taskDescription: string
    data: string
    executeTime: Date | string
    startTime?: Date | string | null
    finishTime?: Date | string | null
    Records?: RecordsUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskListUpdateInput = {
    taskName?: StringFieldUpdateOperationsInput | string
    taskDescription?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    executeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Records?: RecordsUpdateManyWithoutTaskNestedInput
  }

  export type TaskListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskName?: StringFieldUpdateOperationsInput | string
    taskDescription?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    executeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Records?: RecordsUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskListCreateManyInput = {
    id?: number
    taskName: string
    taskDescription: string
    data: string
    executeTime: Date | string
    startTime?: Date | string | null
    finishTime?: Date | string | null
  }

  export type TaskListUpdateManyMutationInput = {
    taskName?: StringFieldUpdateOperationsInput | string
    taskDescription?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    executeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskName?: StringFieldUpdateOperationsInput | string
    taskDescription?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    executeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecordsCreateInput = {
    finishTime: Date | string
    itemId: string
    error?: string | null
    task: TaskListCreateNestedOneWithoutRecordsInput
  }

  export type RecordsUncheckedCreateInput = {
    id?: number
    finishTime: Date | string
    itemId: string
    taskId: number
    error?: string | null
  }

  export type RecordsUpdateInput = {
    finishTime?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
    task?: TaskListUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type RecordsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    finishTime?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
    taskId?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecordsCreateManyInput = {
    id?: number
    finishTime: Date | string
    itemId: string
    taskId: number
    error?: string | null
  }

  export type RecordsUpdateManyMutationInput = {
    finishTime?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecordsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    finishTime?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
    taskId?: IntFieldUpdateOperationsInput | number
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RecordsListRelationFilter = {
    every?: RecordsWhereInput
    some?: RecordsWhereInput
    none?: RecordsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RecordsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskListCountOrderByAggregateInput = {
    id?: SortOrder
    taskName?: SortOrder
    taskDescription?: SortOrder
    data?: SortOrder
    executeTime?: SortOrder
    startTime?: SortOrder
    finishTime?: SortOrder
  }

  export type TaskListAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TaskListMaxOrderByAggregateInput = {
    id?: SortOrder
    taskName?: SortOrder
    taskDescription?: SortOrder
    data?: SortOrder
    executeTime?: SortOrder
    startTime?: SortOrder
    finishTime?: SortOrder
  }

  export type TaskListMinOrderByAggregateInput = {
    id?: SortOrder
    taskName?: SortOrder
    taskDescription?: SortOrder
    data?: SortOrder
    executeTime?: SortOrder
    startTime?: SortOrder
    finishTime?: SortOrder
  }

  export type TaskListSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TaskListScalarRelationFilter = {
    is?: TaskListWhereInput
    isNot?: TaskListWhereInput
  }

  export type RecordsCountOrderByAggregateInput = {
    id?: SortOrder
    finishTime?: SortOrder
    itemId?: SortOrder
    taskId?: SortOrder
    error?: SortOrder
  }

  export type RecordsAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
  }

  export type RecordsMaxOrderByAggregateInput = {
    id?: SortOrder
    finishTime?: SortOrder
    itemId?: SortOrder
    taskId?: SortOrder
    error?: SortOrder
  }

  export type RecordsMinOrderByAggregateInput = {
    id?: SortOrder
    finishTime?: SortOrder
    itemId?: SortOrder
    taskId?: SortOrder
    error?: SortOrder
  }

  export type RecordsSumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RecordsCreateNestedManyWithoutTaskInput = {
    create?: XOR<RecordsCreateWithoutTaskInput, RecordsUncheckedCreateWithoutTaskInput> | RecordsCreateWithoutTaskInput[] | RecordsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutTaskInput | RecordsCreateOrConnectWithoutTaskInput[]
    createMany?: RecordsCreateManyTaskInputEnvelope
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
  }

  export type RecordsUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<RecordsCreateWithoutTaskInput, RecordsUncheckedCreateWithoutTaskInput> | RecordsCreateWithoutTaskInput[] | RecordsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutTaskInput | RecordsCreateOrConnectWithoutTaskInput[]
    createMany?: RecordsCreateManyTaskInputEnvelope
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RecordsUpdateManyWithoutTaskNestedInput = {
    create?: XOR<RecordsCreateWithoutTaskInput, RecordsUncheckedCreateWithoutTaskInput> | RecordsCreateWithoutTaskInput[] | RecordsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutTaskInput | RecordsCreateOrConnectWithoutTaskInput[]
    upsert?: RecordsUpsertWithWhereUniqueWithoutTaskInput | RecordsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: RecordsCreateManyTaskInputEnvelope
    set?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    disconnect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    delete?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    update?: RecordsUpdateWithWhereUniqueWithoutTaskInput | RecordsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: RecordsUpdateManyWithWhereWithoutTaskInput | RecordsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RecordsUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<RecordsCreateWithoutTaskInput, RecordsUncheckedCreateWithoutTaskInput> | RecordsCreateWithoutTaskInput[] | RecordsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutTaskInput | RecordsCreateOrConnectWithoutTaskInput[]
    upsert?: RecordsUpsertWithWhereUniqueWithoutTaskInput | RecordsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: RecordsCreateManyTaskInputEnvelope
    set?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    disconnect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    delete?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    update?: RecordsUpdateWithWhereUniqueWithoutTaskInput | RecordsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: RecordsUpdateManyWithWhereWithoutTaskInput | RecordsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
  }

  export type TaskListCreateNestedOneWithoutRecordsInput = {
    create?: XOR<TaskListCreateWithoutRecordsInput, TaskListUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: TaskListCreateOrConnectWithoutRecordsInput
    connect?: TaskListWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TaskListUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<TaskListCreateWithoutRecordsInput, TaskListUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: TaskListCreateOrConnectWithoutRecordsInput
    upsert?: TaskListUpsertWithoutRecordsInput
    connect?: TaskListWhereUniqueInput
    update?: XOR<XOR<TaskListUpdateToOneWithWhereWithoutRecordsInput, TaskListUpdateWithoutRecordsInput>, TaskListUncheckedUpdateWithoutRecordsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RecordsCreateWithoutTaskInput = {
    finishTime: Date | string
    itemId: string
    error?: string | null
  }

  export type RecordsUncheckedCreateWithoutTaskInput = {
    id?: number
    finishTime: Date | string
    itemId: string
    error?: string | null
  }

  export type RecordsCreateOrConnectWithoutTaskInput = {
    where: RecordsWhereUniqueInput
    create: XOR<RecordsCreateWithoutTaskInput, RecordsUncheckedCreateWithoutTaskInput>
  }

  export type RecordsCreateManyTaskInputEnvelope = {
    data: RecordsCreateManyTaskInput | RecordsCreateManyTaskInput[]
  }

  export type RecordsUpsertWithWhereUniqueWithoutTaskInput = {
    where: RecordsWhereUniqueInput
    update: XOR<RecordsUpdateWithoutTaskInput, RecordsUncheckedUpdateWithoutTaskInput>
    create: XOR<RecordsCreateWithoutTaskInput, RecordsUncheckedCreateWithoutTaskInput>
  }

  export type RecordsUpdateWithWhereUniqueWithoutTaskInput = {
    where: RecordsWhereUniqueInput
    data: XOR<RecordsUpdateWithoutTaskInput, RecordsUncheckedUpdateWithoutTaskInput>
  }

  export type RecordsUpdateManyWithWhereWithoutTaskInput = {
    where: RecordsScalarWhereInput
    data: XOR<RecordsUpdateManyMutationInput, RecordsUncheckedUpdateManyWithoutTaskInput>
  }

  export type RecordsScalarWhereInput = {
    AND?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
    OR?: RecordsScalarWhereInput[]
    NOT?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
    id?: IntFilter<"Records"> | number
    finishTime?: DateTimeFilter<"Records"> | Date | string
    itemId?: StringFilter<"Records"> | string
    taskId?: IntFilter<"Records"> | number
    error?: StringNullableFilter<"Records"> | string | null
  }

  export type TaskListCreateWithoutRecordsInput = {
    taskName: string
    taskDescription: string
    data: string
    executeTime: Date | string
    startTime?: Date | string | null
    finishTime?: Date | string | null
  }

  export type TaskListUncheckedCreateWithoutRecordsInput = {
    id?: number
    taskName: string
    taskDescription: string
    data: string
    executeTime: Date | string
    startTime?: Date | string | null
    finishTime?: Date | string | null
  }

  export type TaskListCreateOrConnectWithoutRecordsInput = {
    where: TaskListWhereUniqueInput
    create: XOR<TaskListCreateWithoutRecordsInput, TaskListUncheckedCreateWithoutRecordsInput>
  }

  export type TaskListUpsertWithoutRecordsInput = {
    update: XOR<TaskListUpdateWithoutRecordsInput, TaskListUncheckedUpdateWithoutRecordsInput>
    create: XOR<TaskListCreateWithoutRecordsInput, TaskListUncheckedCreateWithoutRecordsInput>
    where?: TaskListWhereInput
  }

  export type TaskListUpdateToOneWithWhereWithoutRecordsInput = {
    where?: TaskListWhereInput
    data: XOR<TaskListUpdateWithoutRecordsInput, TaskListUncheckedUpdateWithoutRecordsInput>
  }

  export type TaskListUpdateWithoutRecordsInput = {
    taskName?: StringFieldUpdateOperationsInput | string
    taskDescription?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    executeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskListUncheckedUpdateWithoutRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskName?: StringFieldUpdateOperationsInput | string
    taskDescription?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    executeTime?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RecordsCreateManyTaskInput = {
    id?: number
    finishTime: Date | string
    itemId: string
    error?: string | null
  }

  export type RecordsUpdateWithoutTaskInput = {
    finishTime?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecordsUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    finishTime?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecordsUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    finishTime?: DateTimeFieldUpdateOperationsInput | Date | string
    itemId?: StringFieldUpdateOperationsInput | string
    error?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}