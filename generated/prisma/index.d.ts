
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
 * Model order_products
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type order_products = $Result.DefaultSelection<Prisma.$order_productsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model products
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model user_products
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type user_products = $Result.DefaultSelection<Prisma.$user_productsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Order_products
 * const order_products = await prisma.order_products.findMany()
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
   * // Fetch zero or more Order_products
   * const order_products = await prisma.order_products.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.order_products`: Exposes CRUD operations for the **order_products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_products
    * const order_products = await prisma.order_products.findMany()
    * ```
    */
  get order_products(): Prisma.order_productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_products`: Exposes CRUD operations for the **user_products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_products
    * const user_products = await prisma.user_products.findMany()
    * ```
    */
  get user_products(): Prisma.user_productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    order_products: 'order_products',
    orders: 'orders',
    products: 'products',
    user_products: 'user_products',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "order_products" | "orders" | "products" | "user_products" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      order_products: {
        payload: Prisma.$order_productsPayload<ExtArgs>
        fields: Prisma.order_productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_productsPayload>
          }
          findFirst: {
            args: Prisma.order_productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_productsPayload>
          }
          findMany: {
            args: Prisma.order_productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_productsPayload>[]
          }
          create: {
            args: Prisma.order_productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_productsPayload>
          }
          createMany: {
            args: Prisma.order_productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_productsPayload>[]
          }
          delete: {
            args: Prisma.order_productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_productsPayload>
          }
          update: {
            args: Prisma.order_productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_productsPayload>
          }
          deleteMany: {
            args: Prisma.order_productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.order_productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_productsPayload>[]
          }
          upsert: {
            args: Prisma.order_productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_productsPayload>
          }
          aggregate: {
            args: Prisma.Order_productsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_products>
          }
          groupBy: {
            args: Prisma.order_productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_productsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_productsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_productsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      user_products: {
        payload: Prisma.$user_productsPayload<ExtArgs>
        fields: Prisma.user_productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_productsPayload>
          }
          findFirst: {
            args: Prisma.user_productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_productsPayload>
          }
          findMany: {
            args: Prisma.user_productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_productsPayload>[]
          }
          create: {
            args: Prisma.user_productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_productsPayload>
          }
          createMany: {
            args: Prisma.user_productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_productsPayload>[]
          }
          delete: {
            args: Prisma.user_productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_productsPayload>
          }
          update: {
            args: Prisma.user_productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_productsPayload>
          }
          deleteMany: {
            args: Prisma.user_productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_productsPayload>[]
          }
          upsert: {
            args: Prisma.user_productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_productsPayload>
          }
          aggregate: {
            args: Prisma.User_productsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_products>
          }
          groupBy: {
            args: Prisma.user_productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_productsGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_productsCountArgs<ExtArgs>
            result: $Utils.Optional<User_productsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    order_products?: order_productsOmit
    orders?: ordersOmit
    products?: productsOmit
    user_products?: user_productsOmit
    users?: usersOmit
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
    | 'updateManyAndReturn'
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
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_products: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_products?: boolean | OrdersCountOutputTypeCountOrder_productsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_productsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    order_products: number
    user_products: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_products?: boolean | ProductsCountOutputTypeCountOrder_productsArgs
    user_products?: boolean | ProductsCountOutputTypeCountUser_productsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_productsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountUser_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_productsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    order_products: number
    orders: number
    user_products: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_products?: boolean | UsersCountOutputTypeCountOrder_productsArgs
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
    user_products?: boolean | UsersCountOutputTypeCountUser_productsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrder_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_productsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountUser_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_productsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model order_products
   */

  export type AggregateOrder_products = {
    _count: Order_productsCountAggregateOutputType | null
    _avg: Order_productsAvgAggregateOutputType | null
    _sum: Order_productsSumAggregateOutputType | null
    _min: Order_productsMinAggregateOutputType | null
    _max: Order_productsMaxAggregateOutputType | null
  }

  export type Order_productsAvgAggregateOutputType = {
    quantity: number | null
    unit_price: number | null
  }

  export type Order_productsSumAggregateOutputType = {
    quantity: number | null
    unit_price: number | null
  }

  export type Order_productsMinAggregateOutputType = {
    id: string | null
    order_id: string | null
    user_id: string | null
    product_id: string | null
    quantity: number | null
    unit_price: number | null
  }

  export type Order_productsMaxAggregateOutputType = {
    id: string | null
    order_id: string | null
    user_id: string | null
    product_id: string | null
    quantity: number | null
    unit_price: number | null
  }

  export type Order_productsCountAggregateOutputType = {
    id: number
    order_id: number
    user_id: number
    product_id: number
    quantity: number
    unit_price: number
    _all: number
  }


  export type Order_productsAvgAggregateInputType = {
    quantity?: true
    unit_price?: true
  }

  export type Order_productsSumAggregateInputType = {
    quantity?: true
    unit_price?: true
  }

  export type Order_productsMinAggregateInputType = {
    id?: true
    order_id?: true
    user_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
  }

  export type Order_productsMaxAggregateInputType = {
    id?: true
    order_id?: true
    user_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
  }

  export type Order_productsCountAggregateInputType = {
    id?: true
    order_id?: true
    user_id?: true
    product_id?: true
    quantity?: true
    unit_price?: true
    _all?: true
  }

  export type Order_productsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_products to aggregate.
     */
    where?: order_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_products to fetch.
     */
    orderBy?: order_productsOrderByWithRelationInput | order_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_products
    **/
    _count?: true | Order_productsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_productsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_productsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_productsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_productsMaxAggregateInputType
  }

  export type GetOrder_productsAggregateType<T extends Order_productsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_products]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_products[P]>
      : GetScalarType<T[P], AggregateOrder_products[P]>
  }




  export type order_productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_productsWhereInput
    orderBy?: order_productsOrderByWithAggregationInput | order_productsOrderByWithAggregationInput[]
    by: Order_productsScalarFieldEnum[] | Order_productsScalarFieldEnum
    having?: order_productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_productsCountAggregateInputType | true
    _avg?: Order_productsAvgAggregateInputType
    _sum?: Order_productsSumAggregateInputType
    _min?: Order_productsMinAggregateInputType
    _max?: Order_productsMaxAggregateInputType
  }

  export type Order_productsGroupByOutputType = {
    id: string
    order_id: string
    user_id: string
    product_id: string
    quantity: number
    unit_price: number
    _count: Order_productsCountAggregateOutputType | null
    _avg: Order_productsAvgAggregateOutputType | null
    _sum: Order_productsSumAggregateOutputType | null
    _min: Order_productsMinAggregateOutputType | null
    _max: Order_productsMaxAggregateOutputType | null
  }

  type GetOrder_productsGroupByPayload<T extends order_productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_productsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_productsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_productsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_productsGroupByOutputType[P]>
        }
      >
    >


  export type order_productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    user_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_products"]>

  export type order_productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    user_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_products"]>

  export type order_productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    user_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_products"]>

  export type order_productsSelectScalar = {
    id?: boolean
    order_id?: boolean
    user_id?: boolean
    product_id?: boolean
    quantity?: boolean
    unit_price?: boolean
  }

  export type order_productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "user_id" | "product_id" | "quantity" | "unit_price", ExtArgs["result"]["order_products"]>
  export type order_productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type order_productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type order_productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $order_productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_products"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_id: string
      user_id: string
      product_id: string
      quantity: number
      unit_price: number
    }, ExtArgs["result"]["order_products"]>
    composites: {}
  }

  type order_productsGetPayload<S extends boolean | null | undefined | order_productsDefaultArgs> = $Result.GetResult<Prisma.$order_productsPayload, S>

  type order_productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_productsCountAggregateInputType | true
    }

  export interface order_productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_products'], meta: { name: 'order_products' } }
    /**
     * Find zero or one Order_products that matches the filter.
     * @param {order_productsFindUniqueArgs} args - Arguments to find a Order_products
     * @example
     * // Get one Order_products
     * const order_products = await prisma.order_products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_productsFindUniqueArgs>(args: SelectSubset<T, order_productsFindUniqueArgs<ExtArgs>>): Prisma__order_productsClient<$Result.GetResult<Prisma.$order_productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_productsFindUniqueOrThrowArgs} args - Arguments to find a Order_products
     * @example
     * // Get one Order_products
     * const order_products = await prisma.order_products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_productsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_productsClient<$Result.GetResult<Prisma.$order_productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_productsFindFirstArgs} args - Arguments to find a Order_products
     * @example
     * // Get one Order_products
     * const order_products = await prisma.order_products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_productsFindFirstArgs>(args?: SelectSubset<T, order_productsFindFirstArgs<ExtArgs>>): Prisma__order_productsClient<$Result.GetResult<Prisma.$order_productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_productsFindFirstOrThrowArgs} args - Arguments to find a Order_products
     * @example
     * // Get one Order_products
     * const order_products = await prisma.order_products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_productsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_productsClient<$Result.GetResult<Prisma.$order_productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_products
     * const order_products = await prisma.order_products.findMany()
     * 
     * // Get first 10 Order_products
     * const order_products = await prisma.order_products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_productsWithIdOnly = await prisma.order_products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_productsFindManyArgs>(args?: SelectSubset<T, order_productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_products.
     * @param {order_productsCreateArgs} args - Arguments to create a Order_products.
     * @example
     * // Create one Order_products
     * const Order_products = await prisma.order_products.create({
     *   data: {
     *     // ... data to create a Order_products
     *   }
     * })
     * 
     */
    create<T extends order_productsCreateArgs>(args: SelectSubset<T, order_productsCreateArgs<ExtArgs>>): Prisma__order_productsClient<$Result.GetResult<Prisma.$order_productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_products.
     * @param {order_productsCreateManyArgs} args - Arguments to create many Order_products.
     * @example
     * // Create many Order_products
     * const order_products = await prisma.order_products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_productsCreateManyArgs>(args?: SelectSubset<T, order_productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_products and returns the data saved in the database.
     * @param {order_productsCreateManyAndReturnArgs} args - Arguments to create many Order_products.
     * @example
     * // Create many Order_products
     * const order_products = await prisma.order_products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_products and only return the `id`
     * const order_productsWithIdOnly = await prisma.order_products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_productsCreateManyAndReturnArgs>(args?: SelectSubset<T, order_productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_products.
     * @param {order_productsDeleteArgs} args - Arguments to delete one Order_products.
     * @example
     * // Delete one Order_products
     * const Order_products = await prisma.order_products.delete({
     *   where: {
     *     // ... filter to delete one Order_products
     *   }
     * })
     * 
     */
    delete<T extends order_productsDeleteArgs>(args: SelectSubset<T, order_productsDeleteArgs<ExtArgs>>): Prisma__order_productsClient<$Result.GetResult<Prisma.$order_productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_products.
     * @param {order_productsUpdateArgs} args - Arguments to update one Order_products.
     * @example
     * // Update one Order_products
     * const order_products = await prisma.order_products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_productsUpdateArgs>(args: SelectSubset<T, order_productsUpdateArgs<ExtArgs>>): Prisma__order_productsClient<$Result.GetResult<Prisma.$order_productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_products.
     * @param {order_productsDeleteManyArgs} args - Arguments to filter Order_products to delete.
     * @example
     * // Delete a few Order_products
     * const { count } = await prisma.order_products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_productsDeleteManyArgs>(args?: SelectSubset<T, order_productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_products
     * const order_products = await prisma.order_products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_productsUpdateManyArgs>(args: SelectSubset<T, order_productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_products and returns the data updated in the database.
     * @param {order_productsUpdateManyAndReturnArgs} args - Arguments to update many Order_products.
     * @example
     * // Update many Order_products
     * const order_products = await prisma.order_products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_products and only return the `id`
     * const order_productsWithIdOnly = await prisma.order_products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends order_productsUpdateManyAndReturnArgs>(args: SelectSubset<T, order_productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_products.
     * @param {order_productsUpsertArgs} args - Arguments to update or create a Order_products.
     * @example
     * // Update or create a Order_products
     * const order_products = await prisma.order_products.upsert({
     *   create: {
     *     // ... data to create a Order_products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_products we want to update
     *   }
     * })
     */
    upsert<T extends order_productsUpsertArgs>(args: SelectSubset<T, order_productsUpsertArgs<ExtArgs>>): Prisma__order_productsClient<$Result.GetResult<Prisma.$order_productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_productsCountArgs} args - Arguments to filter Order_products to count.
     * @example
     * // Count the number of Order_products
     * const count = await prisma.order_products.count({
     *   where: {
     *     // ... the filter for the Order_products we want to count
     *   }
     * })
    **/
    count<T extends order_productsCountArgs>(
      args?: Subset<T, order_productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_productsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_productsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_productsAggregateArgs>(args: Subset<T, Order_productsAggregateArgs>): Prisma.PrismaPromise<GetOrder_productsAggregateType<T>>

    /**
     * Group by Order_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_productsGroupByArgs} args - Group by arguments.
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
      T extends order_productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_productsGroupByArgs['orderBy'] }
        : { orderBy?: order_productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_productsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_products model
   */
  readonly fields: order_productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the order_products model
   */
  interface order_productsFieldRefs {
    readonly id: FieldRef<"order_products", 'String'>
    readonly order_id: FieldRef<"order_products", 'String'>
    readonly user_id: FieldRef<"order_products", 'String'>
    readonly product_id: FieldRef<"order_products", 'String'>
    readonly quantity: FieldRef<"order_products", 'Int'>
    readonly unit_price: FieldRef<"order_products", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * order_products findUnique
   */
  export type order_productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_products
     */
    select?: order_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_products
     */
    omit?: order_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_productsInclude<ExtArgs> | null
    /**
     * Filter, which order_products to fetch.
     */
    where: order_productsWhereUniqueInput
  }

  /**
   * order_products findUniqueOrThrow
   */
  export type order_productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_products
     */
    select?: order_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_products
     */
    omit?: order_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_productsInclude<ExtArgs> | null
    /**
     * Filter, which order_products to fetch.
     */
    where: order_productsWhereUniqueInput
  }

  /**
   * order_products findFirst
   */
  export type order_productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_products
     */
    select?: order_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_products
     */
    omit?: order_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_productsInclude<ExtArgs> | null
    /**
     * Filter, which order_products to fetch.
     */
    where?: order_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_products to fetch.
     */
    orderBy?: order_productsOrderByWithRelationInput | order_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_products.
     */
    cursor?: order_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_products.
     */
    distinct?: Order_productsScalarFieldEnum | Order_productsScalarFieldEnum[]
  }

  /**
   * order_products findFirstOrThrow
   */
  export type order_productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_products
     */
    select?: order_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_products
     */
    omit?: order_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_productsInclude<ExtArgs> | null
    /**
     * Filter, which order_products to fetch.
     */
    where?: order_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_products to fetch.
     */
    orderBy?: order_productsOrderByWithRelationInput | order_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_products.
     */
    cursor?: order_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_products.
     */
    distinct?: Order_productsScalarFieldEnum | Order_productsScalarFieldEnum[]
  }

  /**
   * order_products findMany
   */
  export type order_productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_products
     */
    select?: order_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_products
     */
    omit?: order_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_productsInclude<ExtArgs> | null
    /**
     * Filter, which order_products to fetch.
     */
    where?: order_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_products to fetch.
     */
    orderBy?: order_productsOrderByWithRelationInput | order_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_products.
     */
    cursor?: order_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_products.
     */
    skip?: number
    distinct?: Order_productsScalarFieldEnum | Order_productsScalarFieldEnum[]
  }

  /**
   * order_products create
   */
  export type order_productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_products
     */
    select?: order_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_products
     */
    omit?: order_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_productsInclude<ExtArgs> | null
    /**
     * The data needed to create a order_products.
     */
    data: XOR<order_productsCreateInput, order_productsUncheckedCreateInput>
  }

  /**
   * order_products createMany
   */
  export type order_productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_products.
     */
    data: order_productsCreateManyInput | order_productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_products createManyAndReturn
   */
  export type order_productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_products
     */
    select?: order_productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_products
     */
    omit?: order_productsOmit<ExtArgs> | null
    /**
     * The data used to create many order_products.
     */
    data: order_productsCreateManyInput | order_productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_products update
   */
  export type order_productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_products
     */
    select?: order_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_products
     */
    omit?: order_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_productsInclude<ExtArgs> | null
    /**
     * The data needed to update a order_products.
     */
    data: XOR<order_productsUpdateInput, order_productsUncheckedUpdateInput>
    /**
     * Choose, which order_products to update.
     */
    where: order_productsWhereUniqueInput
  }

  /**
   * order_products updateMany
   */
  export type order_productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_products.
     */
    data: XOR<order_productsUpdateManyMutationInput, order_productsUncheckedUpdateManyInput>
    /**
     * Filter which order_products to update
     */
    where?: order_productsWhereInput
    /**
     * Limit how many order_products to update.
     */
    limit?: number
  }

  /**
   * order_products updateManyAndReturn
   */
  export type order_productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_products
     */
    select?: order_productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_products
     */
    omit?: order_productsOmit<ExtArgs> | null
    /**
     * The data used to update order_products.
     */
    data: XOR<order_productsUpdateManyMutationInput, order_productsUncheckedUpdateManyInput>
    /**
     * Filter which order_products to update
     */
    where?: order_productsWhereInput
    /**
     * Limit how many order_products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_products upsert
   */
  export type order_productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_products
     */
    select?: order_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_products
     */
    omit?: order_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_productsInclude<ExtArgs> | null
    /**
     * The filter to search for the order_products to update in case it exists.
     */
    where: order_productsWhereUniqueInput
    /**
     * In case the order_products found by the `where` argument doesn't exist, create a new order_products with this data.
     */
    create: XOR<order_productsCreateInput, order_productsUncheckedCreateInput>
    /**
     * In case the order_products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_productsUpdateInput, order_productsUncheckedUpdateInput>
  }

  /**
   * order_products delete
   */
  export type order_productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_products
     */
    select?: order_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_products
     */
    omit?: order_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_productsInclude<ExtArgs> | null
    /**
     * Filter which order_products to delete.
     */
    where: order_productsWhereUniqueInput
  }

  /**
   * order_products deleteMany
   */
  export type order_productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_products to delete
     */
    where?: order_productsWhereInput
    /**
     * Limit how many order_products to delete.
     */
    limit?: number
  }

  /**
   * order_products without action
   */
  export type order_productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_products
     */
    select?: order_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_products
     */
    omit?: order_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_productsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    order_date: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    order_date: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    user_id: number
    order_date: number
    _all: number
  }


  export type OrdersMinAggregateInputType = {
    id?: true
    user_id?: true
    order_date?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    user_id?: true
    order_date?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    user_id?: true
    order_date?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: string
    user_id: string
    order_date: Date
    _count: OrdersCountAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    order_date?: boolean
    order_products?: boolean | orders$order_productsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    order_date?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    order_date?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    id?: boolean
    user_id?: boolean
    order_date?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "order_date", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_products?: boolean | orders$order_productsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      order_products: Prisma.$order_productsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      order_date: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
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
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_products<T extends orders$order_productsArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'String'>
    readonly user_id: FieldRef<"orders", 'String'>
    readonly order_date: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.order_products
   */
  export type orders$order_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_products
     */
    select?: order_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_products
     */
    omit?: order_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_productsInclude<ExtArgs> | null
    where?: order_productsWhereInput
    orderBy?: order_productsOrderByWithRelationInput | order_productsOrderByWithRelationInput[]
    cursor?: order_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_productsScalarFieldEnum | Order_productsScalarFieldEnum[]
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type ProductsSumAggregateOutputType = {
    price: number | null
    stock: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    img_url: string | null
    size: string | null
    includes: string | null
    category: string | null
    price: number | null
    stock: number | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    img_url: string | null
    size: string | null
    includes: string | null
    category: string | null
    price: number | null
    stock: number | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    img_url: number
    size: number
    includes: number
    category: number
    price: number
    stock: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ProductsSumAggregateInputType = {
    price?: true
    stock?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    img_url?: true
    size?: true
    includes?: true
    category?: true
    price?: true
    stock?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    img_url?: true
    size?: true
    includes?: true
    category?: true
    price?: true
    stock?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    img_url?: true
    size?: true
    includes?: true
    category?: true
    price?: true
    stock?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    name: string
    description: string
    img_url: string
    size: string
    includes: string
    category: string
    price: number
    stock: number
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    img_url?: boolean
    size?: boolean
    includes?: boolean
    category?: boolean
    price?: boolean
    stock?: boolean
    order_products?: boolean | products$order_productsArgs<ExtArgs>
    user_products?: boolean | products$user_productsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    img_url?: boolean
    size?: boolean
    includes?: boolean
    category?: boolean
    price?: boolean
    stock?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    img_url?: boolean
    size?: boolean
    includes?: boolean
    category?: boolean
    price?: boolean
    stock?: boolean
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    img_url?: boolean
    size?: boolean
    includes?: boolean
    category?: boolean
    price?: boolean
    stock?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "img_url" | "size" | "includes" | "category" | "price" | "stock", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_products?: boolean | products$order_productsArgs<ExtArgs>
    user_products?: boolean | products$user_productsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      order_products: Prisma.$order_productsPayload<ExtArgs>[]
      user_products: Prisma.$user_productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      img_url: string
      size: string
      includes: string
      category: string
      price: number
      stock: number
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_products<T extends products$order_productsArgs<ExtArgs> = {}>(args?: Subset<T, products$order_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_products<T extends products$user_productsArgs<ExtArgs> = {}>(args?: Subset<T, products$user_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'String'>
    readonly name: FieldRef<"products", 'String'>
    readonly description: FieldRef<"products", 'String'>
    readonly img_url: FieldRef<"products", 'String'>
    readonly size: FieldRef<"products", 'String'>
    readonly includes: FieldRef<"products", 'String'>
    readonly category: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Float'>
    readonly stock: FieldRef<"products", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.order_products
   */
  export type products$order_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_products
     */
    select?: order_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_products
     */
    omit?: order_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_productsInclude<ExtArgs> | null
    where?: order_productsWhereInput
    orderBy?: order_productsOrderByWithRelationInput | order_productsOrderByWithRelationInput[]
    cursor?: order_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_productsScalarFieldEnum | Order_productsScalarFieldEnum[]
  }

  /**
   * products.user_products
   */
  export type products$user_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_products
     */
    select?: user_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_products
     */
    omit?: user_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_productsInclude<ExtArgs> | null
    where?: user_productsWhereInput
    orderBy?: user_productsOrderByWithRelationInput | user_productsOrderByWithRelationInput[]
    cursor?: user_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_productsScalarFieldEnum | User_productsScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model user_products
   */

  export type AggregateUser_products = {
    _count: User_productsCountAggregateOutputType | null
    _avg: User_productsAvgAggregateOutputType | null
    _sum: User_productsSumAggregateOutputType | null
    _min: User_productsMinAggregateOutputType | null
    _max: User_productsMaxAggregateOutputType | null
  }

  export type User_productsAvgAggregateOutputType = {
    quantity: number | null
  }

  export type User_productsSumAggregateOutputType = {
    quantity: number | null
  }

  export type User_productsMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    product_id: string | null
    quantity: number | null
  }

  export type User_productsMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    product_id: string | null
    quantity: number | null
  }

  export type User_productsCountAggregateOutputType = {
    id: number
    user_id: number
    product_id: number
    quantity: number
    _all: number
  }


  export type User_productsAvgAggregateInputType = {
    quantity?: true
  }

  export type User_productsSumAggregateInputType = {
    quantity?: true
  }

  export type User_productsMinAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    quantity?: true
  }

  export type User_productsMaxAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    quantity?: true
  }

  export type User_productsCountAggregateInputType = {
    id?: true
    user_id?: true
    product_id?: true
    quantity?: true
    _all?: true
  }

  export type User_productsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_products to aggregate.
     */
    where?: user_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_products to fetch.
     */
    orderBy?: user_productsOrderByWithRelationInput | user_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_products
    **/
    _count?: true | User_productsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_productsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_productsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_productsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_productsMaxAggregateInputType
  }

  export type GetUser_productsAggregateType<T extends User_productsAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_products]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_products[P]>
      : GetScalarType<T[P], AggregateUser_products[P]>
  }




  export type user_productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_productsWhereInput
    orderBy?: user_productsOrderByWithAggregationInput | user_productsOrderByWithAggregationInput[]
    by: User_productsScalarFieldEnum[] | User_productsScalarFieldEnum
    having?: user_productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_productsCountAggregateInputType | true
    _avg?: User_productsAvgAggregateInputType
    _sum?: User_productsSumAggregateInputType
    _min?: User_productsMinAggregateInputType
    _max?: User_productsMaxAggregateInputType
  }

  export type User_productsGroupByOutputType = {
    id: string
    user_id: string
    product_id: string
    quantity: number
    _count: User_productsCountAggregateOutputType | null
    _avg: User_productsAvgAggregateOutputType | null
    _sum: User_productsSumAggregateOutputType | null
    _min: User_productsMinAggregateOutputType | null
    _max: User_productsMaxAggregateOutputType | null
  }

  type GetUser_productsGroupByPayload<T extends user_productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_productsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_productsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_productsGroupByOutputType[P]>
            : GetScalarType<T[P], User_productsGroupByOutputType[P]>
        }
      >
    >


  export type user_productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    quantity?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_products"]>

  export type user_productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    quantity?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_products"]>

  export type user_productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    quantity?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_products"]>

  export type user_productsSelectScalar = {
    id?: boolean
    user_id?: boolean
    product_id?: boolean
    quantity?: boolean
  }

  export type user_productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "product_id" | "quantity", ExtArgs["result"]["user_products"]>
  export type user_productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type user_productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $user_productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_products"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      product_id: string
      quantity: number
    }, ExtArgs["result"]["user_products"]>
    composites: {}
  }

  type user_productsGetPayload<S extends boolean | null | undefined | user_productsDefaultArgs> = $Result.GetResult<Prisma.$user_productsPayload, S>

  type user_productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_productsCountAggregateInputType | true
    }

  export interface user_productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_products'], meta: { name: 'user_products' } }
    /**
     * Find zero or one User_products that matches the filter.
     * @param {user_productsFindUniqueArgs} args - Arguments to find a User_products
     * @example
     * // Get one User_products
     * const user_products = await prisma.user_products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_productsFindUniqueArgs>(args: SelectSubset<T, user_productsFindUniqueArgs<ExtArgs>>): Prisma__user_productsClient<$Result.GetResult<Prisma.$user_productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_productsFindUniqueOrThrowArgs} args - Arguments to find a User_products
     * @example
     * // Get one User_products
     * const user_products = await prisma.user_products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_productsFindUniqueOrThrowArgs>(args: SelectSubset<T, user_productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_productsClient<$Result.GetResult<Prisma.$user_productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_productsFindFirstArgs} args - Arguments to find a User_products
     * @example
     * // Get one User_products
     * const user_products = await prisma.user_products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_productsFindFirstArgs>(args?: SelectSubset<T, user_productsFindFirstArgs<ExtArgs>>): Prisma__user_productsClient<$Result.GetResult<Prisma.$user_productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_productsFindFirstOrThrowArgs} args - Arguments to find a User_products
     * @example
     * // Get one User_products
     * const user_products = await prisma.user_products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_productsFindFirstOrThrowArgs>(args?: SelectSubset<T, user_productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_productsClient<$Result.GetResult<Prisma.$user_productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_products
     * const user_products = await prisma.user_products.findMany()
     * 
     * // Get first 10 User_products
     * const user_products = await prisma.user_products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const user_productsWithIdOnly = await prisma.user_products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends user_productsFindManyArgs>(args?: SelectSubset<T, user_productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_products.
     * @param {user_productsCreateArgs} args - Arguments to create a User_products.
     * @example
     * // Create one User_products
     * const User_products = await prisma.user_products.create({
     *   data: {
     *     // ... data to create a User_products
     *   }
     * })
     * 
     */
    create<T extends user_productsCreateArgs>(args: SelectSubset<T, user_productsCreateArgs<ExtArgs>>): Prisma__user_productsClient<$Result.GetResult<Prisma.$user_productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_products.
     * @param {user_productsCreateManyArgs} args - Arguments to create many User_products.
     * @example
     * // Create many User_products
     * const user_products = await prisma.user_products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_productsCreateManyArgs>(args?: SelectSubset<T, user_productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_products and returns the data saved in the database.
     * @param {user_productsCreateManyAndReturnArgs} args - Arguments to create many User_products.
     * @example
     * // Create many User_products
     * const user_products = await prisma.user_products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_products and only return the `id`
     * const user_productsWithIdOnly = await prisma.user_products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_productsCreateManyAndReturnArgs>(args?: SelectSubset<T, user_productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_products.
     * @param {user_productsDeleteArgs} args - Arguments to delete one User_products.
     * @example
     * // Delete one User_products
     * const User_products = await prisma.user_products.delete({
     *   where: {
     *     // ... filter to delete one User_products
     *   }
     * })
     * 
     */
    delete<T extends user_productsDeleteArgs>(args: SelectSubset<T, user_productsDeleteArgs<ExtArgs>>): Prisma__user_productsClient<$Result.GetResult<Prisma.$user_productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_products.
     * @param {user_productsUpdateArgs} args - Arguments to update one User_products.
     * @example
     * // Update one User_products
     * const user_products = await prisma.user_products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_productsUpdateArgs>(args: SelectSubset<T, user_productsUpdateArgs<ExtArgs>>): Prisma__user_productsClient<$Result.GetResult<Prisma.$user_productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_products.
     * @param {user_productsDeleteManyArgs} args - Arguments to filter User_products to delete.
     * @example
     * // Delete a few User_products
     * const { count } = await prisma.user_products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_productsDeleteManyArgs>(args?: SelectSubset<T, user_productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_products
     * const user_products = await prisma.user_products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_productsUpdateManyArgs>(args: SelectSubset<T, user_productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_products and returns the data updated in the database.
     * @param {user_productsUpdateManyAndReturnArgs} args - Arguments to update many User_products.
     * @example
     * // Update many User_products
     * const user_products = await prisma.user_products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_products and only return the `id`
     * const user_productsWithIdOnly = await prisma.user_products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_productsUpdateManyAndReturnArgs>(args: SelectSubset<T, user_productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_products.
     * @param {user_productsUpsertArgs} args - Arguments to update or create a User_products.
     * @example
     * // Update or create a User_products
     * const user_products = await prisma.user_products.upsert({
     *   create: {
     *     // ... data to create a User_products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_products we want to update
     *   }
     * })
     */
    upsert<T extends user_productsUpsertArgs>(args: SelectSubset<T, user_productsUpsertArgs<ExtArgs>>): Prisma__user_productsClient<$Result.GetResult<Prisma.$user_productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_productsCountArgs} args - Arguments to filter User_products to count.
     * @example
     * // Count the number of User_products
     * const count = await prisma.user_products.count({
     *   where: {
     *     // ... the filter for the User_products we want to count
     *   }
     * })
    **/
    count<T extends user_productsCountArgs>(
      args?: Subset<T, user_productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_productsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_productsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends User_productsAggregateArgs>(args: Subset<T, User_productsAggregateArgs>): Prisma.PrismaPromise<GetUser_productsAggregateType<T>>

    /**
     * Group by User_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_productsGroupByArgs} args - Group by arguments.
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
      T extends user_productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_productsGroupByArgs['orderBy'] }
        : { orderBy?: user_productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, user_productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_productsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_products model
   */
  readonly fields: user_productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the user_products model
   */
  interface user_productsFieldRefs {
    readonly id: FieldRef<"user_products", 'String'>
    readonly user_id: FieldRef<"user_products", 'String'>
    readonly product_id: FieldRef<"user_products", 'String'>
    readonly quantity: FieldRef<"user_products", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * user_products findUnique
   */
  export type user_productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_products
     */
    select?: user_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_products
     */
    omit?: user_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_productsInclude<ExtArgs> | null
    /**
     * Filter, which user_products to fetch.
     */
    where: user_productsWhereUniqueInput
  }

  /**
   * user_products findUniqueOrThrow
   */
  export type user_productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_products
     */
    select?: user_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_products
     */
    omit?: user_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_productsInclude<ExtArgs> | null
    /**
     * Filter, which user_products to fetch.
     */
    where: user_productsWhereUniqueInput
  }

  /**
   * user_products findFirst
   */
  export type user_productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_products
     */
    select?: user_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_products
     */
    omit?: user_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_productsInclude<ExtArgs> | null
    /**
     * Filter, which user_products to fetch.
     */
    where?: user_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_products to fetch.
     */
    orderBy?: user_productsOrderByWithRelationInput | user_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_products.
     */
    cursor?: user_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_products.
     */
    distinct?: User_productsScalarFieldEnum | User_productsScalarFieldEnum[]
  }

  /**
   * user_products findFirstOrThrow
   */
  export type user_productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_products
     */
    select?: user_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_products
     */
    omit?: user_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_productsInclude<ExtArgs> | null
    /**
     * Filter, which user_products to fetch.
     */
    where?: user_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_products to fetch.
     */
    orderBy?: user_productsOrderByWithRelationInput | user_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_products.
     */
    cursor?: user_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_products.
     */
    distinct?: User_productsScalarFieldEnum | User_productsScalarFieldEnum[]
  }

  /**
   * user_products findMany
   */
  export type user_productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_products
     */
    select?: user_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_products
     */
    omit?: user_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_productsInclude<ExtArgs> | null
    /**
     * Filter, which user_products to fetch.
     */
    where?: user_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_products to fetch.
     */
    orderBy?: user_productsOrderByWithRelationInput | user_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_products.
     */
    cursor?: user_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_products.
     */
    skip?: number
    distinct?: User_productsScalarFieldEnum | User_productsScalarFieldEnum[]
  }

  /**
   * user_products create
   */
  export type user_productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_products
     */
    select?: user_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_products
     */
    omit?: user_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_productsInclude<ExtArgs> | null
    /**
     * The data needed to create a user_products.
     */
    data: XOR<user_productsCreateInput, user_productsUncheckedCreateInput>
  }

  /**
   * user_products createMany
   */
  export type user_productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_products.
     */
    data: user_productsCreateManyInput | user_productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_products createManyAndReturn
   */
  export type user_productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_products
     */
    select?: user_productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_products
     */
    omit?: user_productsOmit<ExtArgs> | null
    /**
     * The data used to create many user_products.
     */
    data: user_productsCreateManyInput | user_productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_products update
   */
  export type user_productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_products
     */
    select?: user_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_products
     */
    omit?: user_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_productsInclude<ExtArgs> | null
    /**
     * The data needed to update a user_products.
     */
    data: XOR<user_productsUpdateInput, user_productsUncheckedUpdateInput>
    /**
     * Choose, which user_products to update.
     */
    where: user_productsWhereUniqueInput
  }

  /**
   * user_products updateMany
   */
  export type user_productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_products.
     */
    data: XOR<user_productsUpdateManyMutationInput, user_productsUncheckedUpdateManyInput>
    /**
     * Filter which user_products to update
     */
    where?: user_productsWhereInput
    /**
     * Limit how many user_products to update.
     */
    limit?: number
  }

  /**
   * user_products updateManyAndReturn
   */
  export type user_productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_products
     */
    select?: user_productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_products
     */
    omit?: user_productsOmit<ExtArgs> | null
    /**
     * The data used to update user_products.
     */
    data: XOR<user_productsUpdateManyMutationInput, user_productsUncheckedUpdateManyInput>
    /**
     * Filter which user_products to update
     */
    where?: user_productsWhereInput
    /**
     * Limit how many user_products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_products upsert
   */
  export type user_productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_products
     */
    select?: user_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_products
     */
    omit?: user_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_productsInclude<ExtArgs> | null
    /**
     * The filter to search for the user_products to update in case it exists.
     */
    where: user_productsWhereUniqueInput
    /**
     * In case the user_products found by the `where` argument doesn't exist, create a new user_products with this data.
     */
    create: XOR<user_productsCreateInput, user_productsUncheckedCreateInput>
    /**
     * In case the user_products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_productsUpdateInput, user_productsUncheckedUpdateInput>
  }

  /**
   * user_products delete
   */
  export type user_productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_products
     */
    select?: user_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_products
     */
    omit?: user_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_productsInclude<ExtArgs> | null
    /**
     * Filter which user_products to delete.
     */
    where: user_productsWhereUniqueInput
  }

  /**
   * user_products deleteMany
   */
  export type user_productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_products to delete
     */
    where?: user_productsWhereInput
    /**
     * Limit how many user_products to delete.
     */
    limit?: number
  }

  /**
   * user_products without action
   */
  export type user_productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_products
     */
    select?: user_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_products
     */
    omit?: user_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_productsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    is_admin: boolean | null
    name: string | null
    email_address: string | null
    mailing_address: string | null
    phone_number: string | null
    billing_address: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    is_admin: boolean | null
    name: string | null
    email_address: string | null
    mailing_address: string | null
    phone_number: string | null
    billing_address: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    is_admin: number
    name: number
    email_address: number
    mailing_address: number
    phone_number: number
    billing_address: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    is_admin?: true
    name?: true
    email_address?: true
    mailing_address?: true
    phone_number?: true
    billing_address?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    is_admin?: true
    name?: true
    email_address?: true
    mailing_address?: true
    phone_number?: true
    billing_address?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    is_admin?: true
    name?: true
    email_address?: true
    mailing_address?: true
    phone_number?: true
    billing_address?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string
    password: string
    is_admin: boolean | null
    name: string
    email_address: string | null
    mailing_address: string
    phone_number: string | null
    billing_address: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    is_admin?: boolean
    name?: boolean
    email_address?: boolean
    mailing_address?: boolean
    phone_number?: boolean
    billing_address?: boolean
    order_products?: boolean | users$order_productsArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    user_products?: boolean | users$user_productsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    is_admin?: boolean
    name?: boolean
    email_address?: boolean
    mailing_address?: boolean
    phone_number?: boolean
    billing_address?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    is_admin?: boolean
    name?: boolean
    email_address?: boolean
    mailing_address?: boolean
    phone_number?: boolean
    billing_address?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    is_admin?: boolean
    name?: boolean
    email_address?: boolean
    mailing_address?: boolean
    phone_number?: boolean
    billing_address?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "is_admin" | "name" | "email_address" | "mailing_address" | "phone_number" | "billing_address", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_products?: boolean | users$order_productsArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    user_products?: boolean | users$user_productsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      order_products: Prisma.$order_productsPayload<ExtArgs>[]
      orders: Prisma.$ordersPayload<ExtArgs>[]
      user_products: Prisma.$user_productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      is_admin: boolean | null
      name: string
      email_address: string | null
      mailing_address: string
      phone_number: string | null
      billing_address: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_products<T extends users$order_productsArgs<ExtArgs> = {}>(args?: Subset<T, users$order_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_products<T extends users$user_productsArgs<ExtArgs> = {}>(args?: Subset<T, users$user_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly is_admin: FieldRef<"users", 'Boolean'>
    readonly name: FieldRef<"users", 'String'>
    readonly email_address: FieldRef<"users", 'String'>
    readonly mailing_address: FieldRef<"users", 'String'>
    readonly phone_number: FieldRef<"users", 'String'>
    readonly billing_address: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.order_products
   */
  export type users$order_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_products
     */
    select?: order_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_products
     */
    omit?: order_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_productsInclude<ExtArgs> | null
    where?: order_productsWhereInput
    orderBy?: order_productsOrderByWithRelationInput | order_productsOrderByWithRelationInput[]
    cursor?: order_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_productsScalarFieldEnum | Order_productsScalarFieldEnum[]
  }

  /**
   * users.orders
   */
  export type users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * users.user_products
   */
  export type users$user_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_products
     */
    select?: user_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_products
     */
    omit?: user_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_productsInclude<ExtArgs> | null
    where?: user_productsWhereInput
    orderBy?: user_productsOrderByWithRelationInput | user_productsOrderByWithRelationInput[]
    cursor?: user_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_productsScalarFieldEnum | User_productsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Order_productsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    user_id: 'user_id',
    product_id: 'product_id',
    quantity: 'quantity',
    unit_price: 'unit_price'
  };

  export type Order_productsScalarFieldEnum = (typeof Order_productsScalarFieldEnum)[keyof typeof Order_productsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    order_date: 'order_date'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    img_url: 'img_url',
    size: 'size',
    includes: 'includes',
    category: 'category',
    price: 'price',
    stock: 'stock'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const User_productsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    product_id: 'product_id',
    quantity: 'quantity'
  };

  export type User_productsScalarFieldEnum = (typeof User_productsScalarFieldEnum)[keyof typeof User_productsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    is_admin: 'is_admin',
    name: 'name',
    email_address: 'email_address',
    mailing_address: 'mailing_address',
    phone_number: 'phone_number',
    billing_address: 'billing_address'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type order_productsWhereInput = {
    AND?: order_productsWhereInput | order_productsWhereInput[]
    OR?: order_productsWhereInput[]
    NOT?: order_productsWhereInput | order_productsWhereInput[]
    id?: UuidFilter<"order_products"> | string
    order_id?: UuidFilter<"order_products"> | string
    user_id?: UuidFilter<"order_products"> | string
    product_id?: UuidFilter<"order_products"> | string
    quantity?: IntFilter<"order_products"> | number
    unit_price?: FloatFilter<"order_products"> | number
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type order_productsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    orders?: ordersOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type order_productsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    order_id_product_id?: order_productsOrder_idProduct_idCompoundUniqueInput
    AND?: order_productsWhereInput | order_productsWhereInput[]
    OR?: order_productsWhereInput[]
    NOT?: order_productsWhereInput | order_productsWhereInput[]
    order_id?: UuidFilter<"order_products"> | string
    user_id?: UuidFilter<"order_products"> | string
    product_id?: UuidFilter<"order_products"> | string
    quantity?: IntFilter<"order_products"> | number
    unit_price?: FloatFilter<"order_products"> | number
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "order_id_product_id">

  export type order_productsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
    _count?: order_productsCountOrderByAggregateInput
    _avg?: order_productsAvgOrderByAggregateInput
    _max?: order_productsMaxOrderByAggregateInput
    _min?: order_productsMinOrderByAggregateInput
    _sum?: order_productsSumOrderByAggregateInput
  }

  export type order_productsScalarWhereWithAggregatesInput = {
    AND?: order_productsScalarWhereWithAggregatesInput | order_productsScalarWhereWithAggregatesInput[]
    OR?: order_productsScalarWhereWithAggregatesInput[]
    NOT?: order_productsScalarWhereWithAggregatesInput | order_productsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"order_products"> | string
    order_id?: UuidWithAggregatesFilter<"order_products"> | string
    user_id?: UuidWithAggregatesFilter<"order_products"> | string
    product_id?: UuidWithAggregatesFilter<"order_products"> | string
    quantity?: IntWithAggregatesFilter<"order_products"> | number
    unit_price?: FloatWithAggregatesFilter<"order_products"> | number
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: UuidFilter<"orders"> | string
    user_id?: UuidFilter<"orders"> | string
    order_date?: DateTimeFilter<"orders"> | Date | string
    order_products?: Order_productsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_date?: SortOrder
    order_products?: order_productsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    user_id?: UuidFilter<"orders"> | string
    order_date?: DateTimeFilter<"orders"> | Date | string
    order_products?: Order_productsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_date?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"orders"> | string
    user_id?: UuidWithAggregatesFilter<"orders"> | string
    order_date?: DateTimeWithAggregatesFilter<"orders"> | Date | string
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: UuidFilter<"products"> | string
    name?: StringFilter<"products"> | string
    description?: StringFilter<"products"> | string
    img_url?: StringFilter<"products"> | string
    size?: StringFilter<"products"> | string
    includes?: StringFilter<"products"> | string
    category?: StringFilter<"products"> | string
    price?: FloatFilter<"products"> | number
    stock?: IntFilter<"products"> | number
    order_products?: Order_productsListRelationFilter
    user_products?: User_productsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    img_url?: SortOrder
    size?: SortOrder
    includes?: SortOrder
    category?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    order_products?: order_productsOrderByRelationAggregateInput
    user_products?: user_productsOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringFilter<"products"> | string
    description?: StringFilter<"products"> | string
    img_url?: StringFilter<"products"> | string
    size?: StringFilter<"products"> | string
    includes?: StringFilter<"products"> | string
    category?: StringFilter<"products"> | string
    price?: FloatFilter<"products"> | number
    stock?: IntFilter<"products"> | number
    order_products?: Order_productsListRelationFilter
    user_products?: User_productsListRelationFilter
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    img_url?: SortOrder
    size?: SortOrder
    includes?: SortOrder
    category?: SortOrder
    price?: SortOrder
    stock?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"products"> | string
    name?: StringWithAggregatesFilter<"products"> | string
    description?: StringWithAggregatesFilter<"products"> | string
    img_url?: StringWithAggregatesFilter<"products"> | string
    size?: StringWithAggregatesFilter<"products"> | string
    includes?: StringWithAggregatesFilter<"products"> | string
    category?: StringWithAggregatesFilter<"products"> | string
    price?: FloatWithAggregatesFilter<"products"> | number
    stock?: IntWithAggregatesFilter<"products"> | number
  }

  export type user_productsWhereInput = {
    AND?: user_productsWhereInput | user_productsWhereInput[]
    OR?: user_productsWhereInput[]
    NOT?: user_productsWhereInput | user_productsWhereInput[]
    id?: UuidFilter<"user_products"> | string
    user_id?: UuidFilter<"user_products"> | string
    product_id?: UuidFilter<"user_products"> | string
    quantity?: IntFilter<"user_products"> | number
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type user_productsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    products?: productsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type user_productsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id_product_id?: user_productsUser_idProduct_idCompoundUniqueInput
    AND?: user_productsWhereInput | user_productsWhereInput[]
    OR?: user_productsWhereInput[]
    NOT?: user_productsWhereInput | user_productsWhereInput[]
    user_id?: UuidFilter<"user_products"> | string
    product_id?: UuidFilter<"user_products"> | string
    quantity?: IntFilter<"user_products"> | number
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "user_id_product_id">

  export type user_productsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    _count?: user_productsCountOrderByAggregateInput
    _avg?: user_productsAvgOrderByAggregateInput
    _max?: user_productsMaxOrderByAggregateInput
    _min?: user_productsMinOrderByAggregateInput
    _sum?: user_productsSumOrderByAggregateInput
  }

  export type user_productsScalarWhereWithAggregatesInput = {
    AND?: user_productsScalarWhereWithAggregatesInput | user_productsScalarWhereWithAggregatesInput[]
    OR?: user_productsScalarWhereWithAggregatesInput[]
    NOT?: user_productsScalarWhereWithAggregatesInput | user_productsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"user_products"> | string
    user_id?: UuidWithAggregatesFilter<"user_products"> | string
    product_id?: UuidWithAggregatesFilter<"user_products"> | string
    quantity?: IntWithAggregatesFilter<"user_products"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    is_admin?: BoolNullableFilter<"users"> | boolean | null
    name?: StringFilter<"users"> | string
    email_address?: StringNullableFilter<"users"> | string | null
    mailing_address?: StringFilter<"users"> | string
    phone_number?: StringNullableFilter<"users"> | string | null
    billing_address?: StringNullableFilter<"users"> | string | null
    order_products?: Order_productsListRelationFilter
    orders?: OrdersListRelationFilter
    user_products?: User_productsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    is_admin?: SortOrderInput | SortOrder
    name?: SortOrder
    email_address?: SortOrderInput | SortOrder
    mailing_address?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    billing_address?: SortOrderInput | SortOrder
    order_products?: order_productsOrderByRelationAggregateInput
    orders?: ordersOrderByRelationAggregateInput
    user_products?: user_productsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    is_admin?: BoolNullableFilter<"users"> | boolean | null
    name?: StringFilter<"users"> | string
    email_address?: StringNullableFilter<"users"> | string | null
    mailing_address?: StringFilter<"users"> | string
    phone_number?: StringNullableFilter<"users"> | string | null
    billing_address?: StringNullableFilter<"users"> | string | null
    order_products?: Order_productsListRelationFilter
    orders?: OrdersListRelationFilter
    user_products?: User_productsListRelationFilter
  }, "id" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    is_admin?: SortOrderInput | SortOrder
    name?: SortOrder
    email_address?: SortOrderInput | SortOrder
    mailing_address?: SortOrder
    phone_number?: SortOrderInput | SortOrder
    billing_address?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    is_admin?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    name?: StringWithAggregatesFilter<"users"> | string
    email_address?: StringNullableWithAggregatesFilter<"users"> | string | null
    mailing_address?: StringWithAggregatesFilter<"users"> | string
    phone_number?: StringNullableWithAggregatesFilter<"users"> | string | null
    billing_address?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type order_productsCreateInput = {
    id: string
    quantity: number
    unit_price: number
    orders: ordersCreateNestedOneWithoutOrder_productsInput
    products: productsCreateNestedOneWithoutOrder_productsInput
    users: usersCreateNestedOneWithoutOrder_productsInput
  }

  export type order_productsUncheckedCreateInput = {
    id: string
    order_id: string
    user_id: string
    product_id: string
    quantity: number
    unit_price: number
  }

  export type order_productsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    orders?: ordersUpdateOneRequiredWithoutOrder_productsNestedInput
    products?: productsUpdateOneRequiredWithoutOrder_productsNestedInput
    users?: usersUpdateOneRequiredWithoutOrder_productsNestedInput
  }

  export type order_productsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type order_productsCreateManyInput = {
    id: string
    order_id: string
    user_id: string
    product_id: string
    quantity: number
    unit_price: number
  }

  export type order_productsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type order_productsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type ordersCreateInput = {
    id: string
    order_date: Date | string
    order_products?: order_productsCreateNestedManyWithoutOrdersInput
    users: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id: string
    user_id: string
    order_date: Date | string
    order_products?: order_productsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_products?: order_productsUpdateManyWithoutOrdersNestedInput
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_products?: order_productsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    id: string
    user_id: string
    order_date: Date | string
  }

  export type ordersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsCreateInput = {
    id: string
    name: string
    description: string
    img_url: string
    size: string
    includes: string
    category: string
    price: number
    stock: number
    order_products?: order_productsCreateNestedManyWithoutProductsInput
    user_products?: user_productsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id: string
    name: string
    description: string
    img_url: string
    size: string
    includes: string
    category: string
    price: number
    stock: number
    order_products?: order_productsUncheckedCreateNestedManyWithoutProductsInput
    user_products?: user_productsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    includes?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    order_products?: order_productsUpdateManyWithoutProductsNestedInput
    user_products?: user_productsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    includes?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    order_products?: order_productsUncheckedUpdateManyWithoutProductsNestedInput
    user_products?: user_productsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id: string
    name: string
    description: string
    img_url: string
    size: string
    includes: string
    category: string
    price: number
    stock: number
  }

  export type productsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    includes?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type productsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    includes?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
  }

  export type user_productsCreateInput = {
    id: string
    quantity: number
    products: productsCreateNestedOneWithoutUser_productsInput
    users: usersCreateNestedOneWithoutUser_productsInput
  }

  export type user_productsUncheckedCreateInput = {
    id: string
    user_id: string
    product_id: string
    quantity: number
  }

  export type user_productsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    products?: productsUpdateOneRequiredWithoutUser_productsNestedInput
    users?: usersUpdateOneRequiredWithoutUser_productsNestedInput
  }

  export type user_productsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type user_productsCreateManyInput = {
    id: string
    user_id: string
    product_id: string
    quantity: number
  }

  export type user_productsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type user_productsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    id: string
    username: string
    password: string
    is_admin?: boolean | null
    name: string
    email_address?: string | null
    mailing_address: string
    phone_number?: string | null
    billing_address?: string | null
    order_products?: order_productsCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    user_products?: user_productsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id: string
    username: string
    password: string
    is_admin?: boolean | null
    name: string
    email_address?: string | null
    mailing_address: string
    phone_number?: string | null
    billing_address?: string | null
    order_products?: order_productsUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    user_products?: user_productsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: StringFieldUpdateOperationsInput | string
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    mailing_address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null
    order_products?: order_productsUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
    user_products?: user_productsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: StringFieldUpdateOperationsInput | string
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    mailing_address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null
    order_products?: order_productsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    user_products?: user_productsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id: string
    username: string
    password: string
    is_admin?: boolean | null
    name: string
    email_address?: string | null
    mailing_address: string
    phone_number?: string | null
    billing_address?: string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: StringFieldUpdateOperationsInput | string
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    mailing_address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: StringFieldUpdateOperationsInput | string
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    mailing_address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OrdersScalarRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type order_productsOrder_idProduct_idCompoundUniqueInput = {
    order_id: string
    product_id: string
  }

  export type order_productsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type order_productsAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type order_productsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type order_productsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type order_productsSumOrderByAggregateInput = {
    quantity?: SortOrder
    unit_price?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Order_productsListRelationFilter = {
    every?: order_productsWhereInput
    some?: order_productsWhereInput
    none?: order_productsWhereInput
  }

  export type order_productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_date?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_date?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_date?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type User_productsListRelationFilter = {
    every?: user_productsWhereInput
    some?: user_productsWhereInput
    none?: user_productsWhereInput
  }

  export type user_productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    img_url?: SortOrder
    size?: SortOrder
    includes?: SortOrder
    category?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    img_url?: SortOrder
    size?: SortOrder
    includes?: SortOrder
    category?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    img_url?: SortOrder
    size?: SortOrder
    includes?: SortOrder
    category?: SortOrder
    price?: SortOrder
    stock?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    price?: SortOrder
    stock?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type user_productsUser_idProduct_idCompoundUniqueInput = {
    user_id: string
    product_id: string
  }

  export type user_productsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type user_productsAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type user_productsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type user_productsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type user_productsSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    is_admin?: SortOrder
    name?: SortOrder
    email_address?: SortOrder
    mailing_address?: SortOrder
    phone_number?: SortOrder
    billing_address?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    is_admin?: SortOrder
    name?: SortOrder
    email_address?: SortOrder
    mailing_address?: SortOrder
    phone_number?: SortOrder
    billing_address?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    is_admin?: SortOrder
    name?: SortOrder
    email_address?: SortOrder
    mailing_address?: SortOrder
    phone_number?: SortOrder
    billing_address?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ordersCreateNestedOneWithoutOrder_productsInput = {
    create?: XOR<ordersCreateWithoutOrder_productsInput, ordersUncheckedCreateWithoutOrder_productsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_productsInput
    connect?: ordersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutOrder_productsInput = {
    create?: XOR<productsCreateWithoutOrder_productsInput, productsUncheckedCreateWithoutOrder_productsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_productsInput
    connect?: productsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutOrder_productsInput = {
    create?: XOR<usersCreateWithoutOrder_productsInput, usersUncheckedCreateWithoutOrder_productsInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrder_productsInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ordersUpdateOneRequiredWithoutOrder_productsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_productsInput, ordersUncheckedCreateWithoutOrder_productsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_productsInput
    upsert?: ordersUpsertWithoutOrder_productsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_productsInput, ordersUpdateWithoutOrder_productsInput>, ordersUncheckedUpdateWithoutOrder_productsInput>
  }

  export type productsUpdateOneRequiredWithoutOrder_productsNestedInput = {
    create?: XOR<productsCreateWithoutOrder_productsInput, productsUncheckedCreateWithoutOrder_productsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_productsInput
    upsert?: productsUpsertWithoutOrder_productsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutOrder_productsInput, productsUpdateWithoutOrder_productsInput>, productsUncheckedUpdateWithoutOrder_productsInput>
  }

  export type usersUpdateOneRequiredWithoutOrder_productsNestedInput = {
    create?: XOR<usersCreateWithoutOrder_productsInput, usersUncheckedCreateWithoutOrder_productsInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrder_productsInput
    upsert?: usersUpsertWithoutOrder_productsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrder_productsInput, usersUpdateWithoutOrder_productsInput>, usersUncheckedUpdateWithoutOrder_productsInput>
  }

  export type order_productsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_productsCreateWithoutOrdersInput, order_productsUncheckedCreateWithoutOrdersInput> | order_productsCreateWithoutOrdersInput[] | order_productsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_productsCreateOrConnectWithoutOrdersInput | order_productsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_productsCreateManyOrdersInputEnvelope
    connect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    connect?: usersWhereUniqueInput
  }

  export type order_productsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_productsCreateWithoutOrdersInput, order_productsUncheckedCreateWithoutOrdersInput> | order_productsCreateWithoutOrdersInput[] | order_productsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_productsCreateOrConnectWithoutOrdersInput | order_productsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_productsCreateManyOrdersInputEnvelope
    connect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type order_productsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_productsCreateWithoutOrdersInput, order_productsUncheckedCreateWithoutOrdersInput> | order_productsCreateWithoutOrdersInput[] | order_productsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_productsCreateOrConnectWithoutOrdersInput | order_productsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_productsUpsertWithWhereUniqueWithoutOrdersInput | order_productsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_productsCreateManyOrdersInputEnvelope
    set?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    disconnect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    delete?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    connect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    update?: order_productsUpdateWithWhereUniqueWithoutOrdersInput | order_productsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_productsUpdateManyWithWhereWithoutOrdersInput | order_productsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_productsScalarWhereInput | order_productsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    upsert?: usersUpsertWithoutOrdersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrdersInput, usersUpdateWithoutOrdersInput>, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type order_productsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_productsCreateWithoutOrdersInput, order_productsUncheckedCreateWithoutOrdersInput> | order_productsCreateWithoutOrdersInput[] | order_productsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_productsCreateOrConnectWithoutOrdersInput | order_productsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_productsUpsertWithWhereUniqueWithoutOrdersInput | order_productsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_productsCreateManyOrdersInputEnvelope
    set?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    disconnect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    delete?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    connect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    update?: order_productsUpdateWithWhereUniqueWithoutOrdersInput | order_productsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_productsUpdateManyWithWhereWithoutOrdersInput | order_productsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_productsScalarWhereInput | order_productsScalarWhereInput[]
  }

  export type order_productsCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_productsCreateWithoutProductsInput, order_productsUncheckedCreateWithoutProductsInput> | order_productsCreateWithoutProductsInput[] | order_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_productsCreateOrConnectWithoutProductsInput | order_productsCreateOrConnectWithoutProductsInput[]
    createMany?: order_productsCreateManyProductsInputEnvelope
    connect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
  }

  export type user_productsCreateNestedManyWithoutProductsInput = {
    create?: XOR<user_productsCreateWithoutProductsInput, user_productsUncheckedCreateWithoutProductsInput> | user_productsCreateWithoutProductsInput[] | user_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: user_productsCreateOrConnectWithoutProductsInput | user_productsCreateOrConnectWithoutProductsInput[]
    createMany?: user_productsCreateManyProductsInputEnvelope
    connect?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
  }

  export type order_productsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_productsCreateWithoutProductsInput, order_productsUncheckedCreateWithoutProductsInput> | order_productsCreateWithoutProductsInput[] | order_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_productsCreateOrConnectWithoutProductsInput | order_productsCreateOrConnectWithoutProductsInput[]
    createMany?: order_productsCreateManyProductsInputEnvelope
    connect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
  }

  export type user_productsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<user_productsCreateWithoutProductsInput, user_productsUncheckedCreateWithoutProductsInput> | user_productsCreateWithoutProductsInput[] | user_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: user_productsCreateOrConnectWithoutProductsInput | user_productsCreateOrConnectWithoutProductsInput[]
    createMany?: user_productsCreateManyProductsInputEnvelope
    connect?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
  }

  export type order_productsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_productsCreateWithoutProductsInput, order_productsUncheckedCreateWithoutProductsInput> | order_productsCreateWithoutProductsInput[] | order_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_productsCreateOrConnectWithoutProductsInput | order_productsCreateOrConnectWithoutProductsInput[]
    upsert?: order_productsUpsertWithWhereUniqueWithoutProductsInput | order_productsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_productsCreateManyProductsInputEnvelope
    set?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    disconnect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    delete?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    connect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    update?: order_productsUpdateWithWhereUniqueWithoutProductsInput | order_productsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_productsUpdateManyWithWhereWithoutProductsInput | order_productsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_productsScalarWhereInput | order_productsScalarWhereInput[]
  }

  export type user_productsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<user_productsCreateWithoutProductsInput, user_productsUncheckedCreateWithoutProductsInput> | user_productsCreateWithoutProductsInput[] | user_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: user_productsCreateOrConnectWithoutProductsInput | user_productsCreateOrConnectWithoutProductsInput[]
    upsert?: user_productsUpsertWithWhereUniqueWithoutProductsInput | user_productsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: user_productsCreateManyProductsInputEnvelope
    set?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
    disconnect?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
    delete?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
    connect?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
    update?: user_productsUpdateWithWhereUniqueWithoutProductsInput | user_productsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: user_productsUpdateManyWithWhereWithoutProductsInput | user_productsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: user_productsScalarWhereInput | user_productsScalarWhereInput[]
  }

  export type order_productsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_productsCreateWithoutProductsInput, order_productsUncheckedCreateWithoutProductsInput> | order_productsCreateWithoutProductsInput[] | order_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_productsCreateOrConnectWithoutProductsInput | order_productsCreateOrConnectWithoutProductsInput[]
    upsert?: order_productsUpsertWithWhereUniqueWithoutProductsInput | order_productsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_productsCreateManyProductsInputEnvelope
    set?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    disconnect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    delete?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    connect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    update?: order_productsUpdateWithWhereUniqueWithoutProductsInput | order_productsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_productsUpdateManyWithWhereWithoutProductsInput | order_productsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_productsScalarWhereInput | order_productsScalarWhereInput[]
  }

  export type user_productsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<user_productsCreateWithoutProductsInput, user_productsUncheckedCreateWithoutProductsInput> | user_productsCreateWithoutProductsInput[] | user_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: user_productsCreateOrConnectWithoutProductsInput | user_productsCreateOrConnectWithoutProductsInput[]
    upsert?: user_productsUpsertWithWhereUniqueWithoutProductsInput | user_productsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: user_productsCreateManyProductsInputEnvelope
    set?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
    disconnect?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
    delete?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
    connect?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
    update?: user_productsUpdateWithWhereUniqueWithoutProductsInput | user_productsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: user_productsUpdateManyWithWhereWithoutProductsInput | user_productsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: user_productsScalarWhereInput | user_productsScalarWhereInput[]
  }

  export type productsCreateNestedOneWithoutUser_productsInput = {
    create?: XOR<productsCreateWithoutUser_productsInput, productsUncheckedCreateWithoutUser_productsInput>
    connectOrCreate?: productsCreateOrConnectWithoutUser_productsInput
    connect?: productsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutUser_productsInput = {
    create?: XOR<usersCreateWithoutUser_productsInput, usersUncheckedCreateWithoutUser_productsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_productsInput
    connect?: usersWhereUniqueInput
  }

  export type productsUpdateOneRequiredWithoutUser_productsNestedInput = {
    create?: XOR<productsCreateWithoutUser_productsInput, productsUncheckedCreateWithoutUser_productsInput>
    connectOrCreate?: productsCreateOrConnectWithoutUser_productsInput
    upsert?: productsUpsertWithoutUser_productsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutUser_productsInput, productsUpdateWithoutUser_productsInput>, productsUncheckedUpdateWithoutUser_productsInput>
  }

  export type usersUpdateOneRequiredWithoutUser_productsNestedInput = {
    create?: XOR<usersCreateWithoutUser_productsInput, usersUncheckedCreateWithoutUser_productsInput>
    connectOrCreate?: usersCreateOrConnectWithoutUser_productsInput
    upsert?: usersUpsertWithoutUser_productsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutUser_productsInput, usersUpdateWithoutUser_productsInput>, usersUncheckedUpdateWithoutUser_productsInput>
  }

  export type order_productsCreateNestedManyWithoutUsersInput = {
    create?: XOR<order_productsCreateWithoutUsersInput, order_productsUncheckedCreateWithoutUsersInput> | order_productsCreateWithoutUsersInput[] | order_productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: order_productsCreateOrConnectWithoutUsersInput | order_productsCreateOrConnectWithoutUsersInput[]
    createMany?: order_productsCreateManyUsersInputEnvelope
    connect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type user_productsCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_productsCreateWithoutUsersInput, user_productsUncheckedCreateWithoutUsersInput> | user_productsCreateWithoutUsersInput[] | user_productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_productsCreateOrConnectWithoutUsersInput | user_productsCreateOrConnectWithoutUsersInput[]
    createMany?: user_productsCreateManyUsersInputEnvelope
    connect?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
  }

  export type order_productsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<order_productsCreateWithoutUsersInput, order_productsUncheckedCreateWithoutUsersInput> | order_productsCreateWithoutUsersInput[] | order_productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: order_productsCreateOrConnectWithoutUsersInput | order_productsCreateOrConnectWithoutUsersInput[]
    createMany?: order_productsCreateManyUsersInputEnvelope
    connect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type user_productsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<user_productsCreateWithoutUsersInput, user_productsUncheckedCreateWithoutUsersInput> | user_productsCreateWithoutUsersInput[] | user_productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_productsCreateOrConnectWithoutUsersInput | user_productsCreateOrConnectWithoutUsersInput[]
    createMany?: user_productsCreateManyUsersInputEnvelope
    connect?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type order_productsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<order_productsCreateWithoutUsersInput, order_productsUncheckedCreateWithoutUsersInput> | order_productsCreateWithoutUsersInput[] | order_productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: order_productsCreateOrConnectWithoutUsersInput | order_productsCreateOrConnectWithoutUsersInput[]
    upsert?: order_productsUpsertWithWhereUniqueWithoutUsersInput | order_productsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: order_productsCreateManyUsersInputEnvelope
    set?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    disconnect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    delete?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    connect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    update?: order_productsUpdateWithWhereUniqueWithoutUsersInput | order_productsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: order_productsUpdateManyWithWhereWithoutUsersInput | order_productsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: order_productsScalarWhereInput | order_productsScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type user_productsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_productsCreateWithoutUsersInput, user_productsUncheckedCreateWithoutUsersInput> | user_productsCreateWithoutUsersInput[] | user_productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_productsCreateOrConnectWithoutUsersInput | user_productsCreateOrConnectWithoutUsersInput[]
    upsert?: user_productsUpsertWithWhereUniqueWithoutUsersInput | user_productsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_productsCreateManyUsersInputEnvelope
    set?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
    disconnect?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
    delete?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
    connect?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
    update?: user_productsUpdateWithWhereUniqueWithoutUsersInput | user_productsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_productsUpdateManyWithWhereWithoutUsersInput | user_productsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_productsScalarWhereInput | user_productsScalarWhereInput[]
  }

  export type order_productsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<order_productsCreateWithoutUsersInput, order_productsUncheckedCreateWithoutUsersInput> | order_productsCreateWithoutUsersInput[] | order_productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: order_productsCreateOrConnectWithoutUsersInput | order_productsCreateOrConnectWithoutUsersInput[]
    upsert?: order_productsUpsertWithWhereUniqueWithoutUsersInput | order_productsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: order_productsCreateManyUsersInputEnvelope
    set?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    disconnect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    delete?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    connect?: order_productsWhereUniqueInput | order_productsWhereUniqueInput[]
    update?: order_productsUpdateWithWhereUniqueWithoutUsersInput | order_productsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: order_productsUpdateManyWithWhereWithoutUsersInput | order_productsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: order_productsScalarWhereInput | order_productsScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type user_productsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<user_productsCreateWithoutUsersInput, user_productsUncheckedCreateWithoutUsersInput> | user_productsCreateWithoutUsersInput[] | user_productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: user_productsCreateOrConnectWithoutUsersInput | user_productsCreateOrConnectWithoutUsersInput[]
    upsert?: user_productsUpsertWithWhereUniqueWithoutUsersInput | user_productsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: user_productsCreateManyUsersInputEnvelope
    set?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
    disconnect?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
    delete?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
    connect?: user_productsWhereUniqueInput | user_productsWhereUniqueInput[]
    update?: user_productsUpdateWithWhereUniqueWithoutUsersInput | user_productsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: user_productsUpdateManyWithWhereWithoutUsersInput | user_productsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: user_productsScalarWhereInput | user_productsScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type ordersCreateWithoutOrder_productsInput = {
    id: string
    order_date: Date | string
    users: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutOrder_productsInput = {
    id: string
    user_id: string
    order_date: Date | string
  }

  export type ordersCreateOrConnectWithoutOrder_productsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_productsInput, ordersUncheckedCreateWithoutOrder_productsInput>
  }

  export type productsCreateWithoutOrder_productsInput = {
    id: string
    name: string
    description: string
    img_url: string
    size: string
    includes: string
    category: string
    price: number
    stock: number
    user_products?: user_productsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutOrder_productsInput = {
    id: string
    name: string
    description: string
    img_url: string
    size: string
    includes: string
    category: string
    price: number
    stock: number
    user_products?: user_productsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutOrder_productsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutOrder_productsInput, productsUncheckedCreateWithoutOrder_productsInput>
  }

  export type usersCreateWithoutOrder_productsInput = {
    id: string
    username: string
    password: string
    is_admin?: boolean | null
    name: string
    email_address?: string | null
    mailing_address: string
    phone_number?: string | null
    billing_address?: string | null
    orders?: ordersCreateNestedManyWithoutUsersInput
    user_products?: user_productsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOrder_productsInput = {
    id: string
    username: string
    password: string
    is_admin?: boolean | null
    name: string
    email_address?: string | null
    mailing_address: string
    phone_number?: string | null
    billing_address?: string | null
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    user_products?: user_productsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOrder_productsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrder_productsInput, usersUncheckedCreateWithoutOrder_productsInput>
  }

  export type ordersUpsertWithoutOrder_productsInput = {
    update: XOR<ordersUpdateWithoutOrder_productsInput, ordersUncheckedUpdateWithoutOrder_productsInput>
    create: XOR<ordersCreateWithoutOrder_productsInput, ordersUncheckedCreateWithoutOrder_productsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_productsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_productsInput, ordersUncheckedUpdateWithoutOrder_productsInput>
  }

  export type ordersUpdateWithoutOrder_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: usersUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type productsUpsertWithoutOrder_productsInput = {
    update: XOR<productsUpdateWithoutOrder_productsInput, productsUncheckedUpdateWithoutOrder_productsInput>
    create: XOR<productsCreateWithoutOrder_productsInput, productsUncheckedCreateWithoutOrder_productsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutOrder_productsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutOrder_productsInput, productsUncheckedUpdateWithoutOrder_productsInput>
  }

  export type productsUpdateWithoutOrder_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    includes?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    user_products?: user_productsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutOrder_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    includes?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    user_products?: user_productsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type usersUpsertWithoutOrder_productsInput = {
    update: XOR<usersUpdateWithoutOrder_productsInput, usersUncheckedUpdateWithoutOrder_productsInput>
    create: XOR<usersCreateWithoutOrder_productsInput, usersUncheckedCreateWithoutOrder_productsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrder_productsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrder_productsInput, usersUncheckedUpdateWithoutOrder_productsInput>
  }

  export type usersUpdateWithoutOrder_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: StringFieldUpdateOperationsInput | string
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    mailing_address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUpdateManyWithoutUsersNestedInput
    user_products?: user_productsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOrder_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: StringFieldUpdateOperationsInput | string
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    mailing_address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    user_products?: user_productsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type order_productsCreateWithoutOrdersInput = {
    id: string
    quantity: number
    unit_price: number
    products: productsCreateNestedOneWithoutOrder_productsInput
    users: usersCreateNestedOneWithoutOrder_productsInput
  }

  export type order_productsUncheckedCreateWithoutOrdersInput = {
    id: string
    user_id: string
    product_id: string
    quantity: number
    unit_price: number
  }

  export type order_productsCreateOrConnectWithoutOrdersInput = {
    where: order_productsWhereUniqueInput
    create: XOR<order_productsCreateWithoutOrdersInput, order_productsUncheckedCreateWithoutOrdersInput>
  }

  export type order_productsCreateManyOrdersInputEnvelope = {
    data: order_productsCreateManyOrdersInput | order_productsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutOrdersInput = {
    id: string
    username: string
    password: string
    is_admin?: boolean | null
    name: string
    email_address?: string | null
    mailing_address: string
    phone_number?: string | null
    billing_address?: string | null
    order_products?: order_productsCreateNestedManyWithoutUsersInput
    user_products?: user_productsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    id: string
    username: string
    password: string
    is_admin?: boolean | null
    name: string
    email_address?: string | null
    mailing_address: string
    phone_number?: string | null
    billing_address?: string | null
    order_products?: order_productsUncheckedCreateNestedManyWithoutUsersInput
    user_products?: user_productsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOrdersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type order_productsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: order_productsWhereUniqueInput
    update: XOR<order_productsUpdateWithoutOrdersInput, order_productsUncheckedUpdateWithoutOrdersInput>
    create: XOR<order_productsCreateWithoutOrdersInput, order_productsUncheckedCreateWithoutOrdersInput>
  }

  export type order_productsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: order_productsWhereUniqueInput
    data: XOR<order_productsUpdateWithoutOrdersInput, order_productsUncheckedUpdateWithoutOrdersInput>
  }

  export type order_productsUpdateManyWithWhereWithoutOrdersInput = {
    where: order_productsScalarWhereInput
    data: XOR<order_productsUpdateManyMutationInput, order_productsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type order_productsScalarWhereInput = {
    AND?: order_productsScalarWhereInput | order_productsScalarWhereInput[]
    OR?: order_productsScalarWhereInput[]
    NOT?: order_productsScalarWhereInput | order_productsScalarWhereInput[]
    id?: UuidFilter<"order_products"> | string
    order_id?: UuidFilter<"order_products"> | string
    user_id?: UuidFilter<"order_products"> | string
    product_id?: UuidFilter<"order_products"> | string
    quantity?: IntFilter<"order_products"> | number
    unit_price?: FloatFilter<"order_products"> | number
  }

  export type usersUpsertWithoutOrdersInput = {
    update: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: StringFieldUpdateOperationsInput | string
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    mailing_address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null
    order_products?: order_productsUpdateManyWithoutUsersNestedInput
    user_products?: user_productsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: StringFieldUpdateOperationsInput | string
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    mailing_address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null
    order_products?: order_productsUncheckedUpdateManyWithoutUsersNestedInput
    user_products?: user_productsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type order_productsCreateWithoutProductsInput = {
    id: string
    quantity: number
    unit_price: number
    orders: ordersCreateNestedOneWithoutOrder_productsInput
    users: usersCreateNestedOneWithoutOrder_productsInput
  }

  export type order_productsUncheckedCreateWithoutProductsInput = {
    id: string
    order_id: string
    user_id: string
    quantity: number
    unit_price: number
  }

  export type order_productsCreateOrConnectWithoutProductsInput = {
    where: order_productsWhereUniqueInput
    create: XOR<order_productsCreateWithoutProductsInput, order_productsUncheckedCreateWithoutProductsInput>
  }

  export type order_productsCreateManyProductsInputEnvelope = {
    data: order_productsCreateManyProductsInput | order_productsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type user_productsCreateWithoutProductsInput = {
    id: string
    quantity: number
    users: usersCreateNestedOneWithoutUser_productsInput
  }

  export type user_productsUncheckedCreateWithoutProductsInput = {
    id: string
    user_id: string
    quantity: number
  }

  export type user_productsCreateOrConnectWithoutProductsInput = {
    where: user_productsWhereUniqueInput
    create: XOR<user_productsCreateWithoutProductsInput, user_productsUncheckedCreateWithoutProductsInput>
  }

  export type user_productsCreateManyProductsInputEnvelope = {
    data: user_productsCreateManyProductsInput | user_productsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type order_productsUpsertWithWhereUniqueWithoutProductsInput = {
    where: order_productsWhereUniqueInput
    update: XOR<order_productsUpdateWithoutProductsInput, order_productsUncheckedUpdateWithoutProductsInput>
    create: XOR<order_productsCreateWithoutProductsInput, order_productsUncheckedCreateWithoutProductsInput>
  }

  export type order_productsUpdateWithWhereUniqueWithoutProductsInput = {
    where: order_productsWhereUniqueInput
    data: XOR<order_productsUpdateWithoutProductsInput, order_productsUncheckedUpdateWithoutProductsInput>
  }

  export type order_productsUpdateManyWithWhereWithoutProductsInput = {
    where: order_productsScalarWhereInput
    data: XOR<order_productsUpdateManyMutationInput, order_productsUncheckedUpdateManyWithoutProductsInput>
  }

  export type user_productsUpsertWithWhereUniqueWithoutProductsInput = {
    where: user_productsWhereUniqueInput
    update: XOR<user_productsUpdateWithoutProductsInput, user_productsUncheckedUpdateWithoutProductsInput>
    create: XOR<user_productsCreateWithoutProductsInput, user_productsUncheckedCreateWithoutProductsInput>
  }

  export type user_productsUpdateWithWhereUniqueWithoutProductsInput = {
    where: user_productsWhereUniqueInput
    data: XOR<user_productsUpdateWithoutProductsInput, user_productsUncheckedUpdateWithoutProductsInput>
  }

  export type user_productsUpdateManyWithWhereWithoutProductsInput = {
    where: user_productsScalarWhereInput
    data: XOR<user_productsUpdateManyMutationInput, user_productsUncheckedUpdateManyWithoutProductsInput>
  }

  export type user_productsScalarWhereInput = {
    AND?: user_productsScalarWhereInput | user_productsScalarWhereInput[]
    OR?: user_productsScalarWhereInput[]
    NOT?: user_productsScalarWhereInput | user_productsScalarWhereInput[]
    id?: UuidFilter<"user_products"> | string
    user_id?: UuidFilter<"user_products"> | string
    product_id?: UuidFilter<"user_products"> | string
    quantity?: IntFilter<"user_products"> | number
  }

  export type productsCreateWithoutUser_productsInput = {
    id: string
    name: string
    description: string
    img_url: string
    size: string
    includes: string
    category: string
    price: number
    stock: number
    order_products?: order_productsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutUser_productsInput = {
    id: string
    name: string
    description: string
    img_url: string
    size: string
    includes: string
    category: string
    price: number
    stock: number
    order_products?: order_productsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutUser_productsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutUser_productsInput, productsUncheckedCreateWithoutUser_productsInput>
  }

  export type usersCreateWithoutUser_productsInput = {
    id: string
    username: string
    password: string
    is_admin?: boolean | null
    name: string
    email_address?: string | null
    mailing_address: string
    phone_number?: string | null
    billing_address?: string | null
    order_products?: order_productsCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutUser_productsInput = {
    id: string
    username: string
    password: string
    is_admin?: boolean | null
    name: string
    email_address?: string | null
    mailing_address: string
    phone_number?: string | null
    billing_address?: string | null
    order_products?: order_productsUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutUser_productsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutUser_productsInput, usersUncheckedCreateWithoutUser_productsInput>
  }

  export type productsUpsertWithoutUser_productsInput = {
    update: XOR<productsUpdateWithoutUser_productsInput, productsUncheckedUpdateWithoutUser_productsInput>
    create: XOR<productsCreateWithoutUser_productsInput, productsUncheckedCreateWithoutUser_productsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutUser_productsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutUser_productsInput, productsUncheckedUpdateWithoutUser_productsInput>
  }

  export type productsUpdateWithoutUser_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    includes?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    order_products?: order_productsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutUser_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    img_url?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    includes?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    stock?: IntFieldUpdateOperationsInput | number
    order_products?: order_productsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type usersUpsertWithoutUser_productsInput = {
    update: XOR<usersUpdateWithoutUser_productsInput, usersUncheckedUpdateWithoutUser_productsInput>
    create: XOR<usersCreateWithoutUser_productsInput, usersUncheckedCreateWithoutUser_productsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutUser_productsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutUser_productsInput, usersUncheckedUpdateWithoutUser_productsInput>
  }

  export type usersUpdateWithoutUser_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: StringFieldUpdateOperationsInput | string
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    mailing_address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null
    order_products?: order_productsUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutUser_productsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    name?: StringFieldUpdateOperationsInput | string
    email_address?: NullableStringFieldUpdateOperationsInput | string | null
    mailing_address?: StringFieldUpdateOperationsInput | string
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    billing_address?: NullableStringFieldUpdateOperationsInput | string | null
    order_products?: order_productsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type order_productsCreateWithoutUsersInput = {
    id: string
    quantity: number
    unit_price: number
    orders: ordersCreateNestedOneWithoutOrder_productsInput
    products: productsCreateNestedOneWithoutOrder_productsInput
  }

  export type order_productsUncheckedCreateWithoutUsersInput = {
    id: string
    order_id: string
    product_id: string
    quantity: number
    unit_price: number
  }

  export type order_productsCreateOrConnectWithoutUsersInput = {
    where: order_productsWhereUniqueInput
    create: XOR<order_productsCreateWithoutUsersInput, order_productsUncheckedCreateWithoutUsersInput>
  }

  export type order_productsCreateManyUsersInputEnvelope = {
    data: order_productsCreateManyUsersInput | order_productsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutUsersInput = {
    id: string
    order_date: Date | string
    order_products?: order_productsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutUsersInput = {
    id: string
    order_date: Date | string
    order_products?: order_productsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutUsersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateManyUsersInputEnvelope = {
    data: ordersCreateManyUsersInput | ordersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type user_productsCreateWithoutUsersInput = {
    id: string
    quantity: number
    products: productsCreateNestedOneWithoutUser_productsInput
  }

  export type user_productsUncheckedCreateWithoutUsersInput = {
    id: string
    product_id: string
    quantity: number
  }

  export type user_productsCreateOrConnectWithoutUsersInput = {
    where: user_productsWhereUniqueInput
    create: XOR<user_productsCreateWithoutUsersInput, user_productsUncheckedCreateWithoutUsersInput>
  }

  export type user_productsCreateManyUsersInputEnvelope = {
    data: user_productsCreateManyUsersInput | user_productsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type order_productsUpsertWithWhereUniqueWithoutUsersInput = {
    where: order_productsWhereUniqueInput
    update: XOR<order_productsUpdateWithoutUsersInput, order_productsUncheckedUpdateWithoutUsersInput>
    create: XOR<order_productsCreateWithoutUsersInput, order_productsUncheckedCreateWithoutUsersInput>
  }

  export type order_productsUpdateWithWhereUniqueWithoutUsersInput = {
    where: order_productsWhereUniqueInput
    data: XOR<order_productsUpdateWithoutUsersInput, order_productsUncheckedUpdateWithoutUsersInput>
  }

  export type order_productsUpdateManyWithWhereWithoutUsersInput = {
    where: order_productsScalarWhereInput
    data: XOR<order_productsUpdateManyMutationInput, order_productsUncheckedUpdateManyWithoutUsersInput>
  }

  export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUsersInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: UuidFilter<"orders"> | string
    user_id?: UuidFilter<"orders"> | string
    order_date?: DateTimeFilter<"orders"> | Date | string
  }

  export type user_productsUpsertWithWhereUniqueWithoutUsersInput = {
    where: user_productsWhereUniqueInput
    update: XOR<user_productsUpdateWithoutUsersInput, user_productsUncheckedUpdateWithoutUsersInput>
    create: XOR<user_productsCreateWithoutUsersInput, user_productsUncheckedCreateWithoutUsersInput>
  }

  export type user_productsUpdateWithWhereUniqueWithoutUsersInput = {
    where: user_productsWhereUniqueInput
    data: XOR<user_productsUpdateWithoutUsersInput, user_productsUncheckedUpdateWithoutUsersInput>
  }

  export type user_productsUpdateManyWithWhereWithoutUsersInput = {
    where: user_productsScalarWhereInput
    data: XOR<user_productsUpdateManyMutationInput, user_productsUncheckedUpdateManyWithoutUsersInput>
  }

  export type order_productsCreateManyOrdersInput = {
    id: string
    user_id: string
    product_id: string
    quantity: number
    unit_price: number
  }

  export type order_productsUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    products?: productsUpdateOneRequiredWithoutOrder_productsNestedInput
    users?: usersUpdateOneRequiredWithoutOrder_productsNestedInput
  }

  export type order_productsUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type order_productsUncheckedUpdateManyWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type order_productsCreateManyProductsInput = {
    id: string
    order_id: string
    user_id: string
    quantity: number
    unit_price: number
  }

  export type user_productsCreateManyProductsInput = {
    id: string
    user_id: string
    quantity: number
  }

  export type order_productsUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    orders?: ordersUpdateOneRequiredWithoutOrder_productsNestedInput
    users?: usersUpdateOneRequiredWithoutOrder_productsNestedInput
  }

  export type order_productsUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type order_productsUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type user_productsUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    users?: usersUpdateOneRequiredWithoutUser_productsNestedInput
  }

  export type user_productsUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type user_productsUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type order_productsCreateManyUsersInput = {
    id: string
    order_id: string
    product_id: string
    quantity: number
    unit_price: number
  }

  export type ordersCreateManyUsersInput = {
    id: string
    order_date: Date | string
  }

  export type user_productsCreateManyUsersInput = {
    id: string
    product_id: string
    quantity: number
  }

  export type order_productsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
    orders?: ordersUpdateOneRequiredWithoutOrder_productsNestedInput
    products?: productsUpdateOneRequiredWithoutOrder_productsNestedInput
  }

  export type order_productsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type order_productsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit_price?: FloatFieldUpdateOperationsInput | number
  }

  export type ordersUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_products?: order_productsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    order_products?: order_productsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_productsUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    products?: productsUpdateOneRequiredWithoutUser_productsNestedInput
  }

  export type user_productsUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type user_productsUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
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