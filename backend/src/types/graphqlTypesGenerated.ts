import { GraphQLResolveInfo } from 'graphql';
import { CustomContext } from './types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type AuthInfo = {
  __typename?: 'AuthInfo';
  token: Scalars['String']['output'];
  user: AuthUser;
};

export type AuthUser = {
  __typename?: 'AuthUser';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  profileImageUrl?: Maybe<Scalars['String']['output']>;
  userName: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addQuack: Quack;
  deleteQuack: Scalars['String']['output'];
  signIn: AuthInfo;
  signUp: AuthInfo;
};

export type MutationAddQuackArgs = {
  text: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type MutationDeleteQuackArgs = {
  quackId: Scalars['Int']['input'];
};

export type MutationSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MutationSignUpArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  profileImageUrl?: InputMaybe<Scalars['String']['input']>;
  userName: Scalars['String']['input'];
};

export type Quack = {
  __typename?: 'Quack';
  createdAt: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  text: Scalars['String']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  quacks: Array<Quack>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type QueryUserArgs = {
  userName: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  profileImageUrl?: Maybe<Scalars['String']['output']>;
  quacks: Array<Quack>;
  userName: Scalars['String']['output'];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthInfo: ResolverTypeWrapper<AuthInfo>;
  AuthUser: ResolverTypeWrapper<AuthUser>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Quack: ResolverTypeWrapper<Quack>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthInfo: AuthInfo;
  AuthUser: AuthUser;
  Boolean: Scalars['Boolean']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Quack: Quack;
  Query: {};
  String: Scalars['String']['output'];
  User: User;
};

export type AuthInfoResolvers<
  ContextType = CustomContext,
  ParentType extends
    ResolversParentTypes['AuthInfo'] = ResolversParentTypes['AuthInfo'],
> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['AuthUser'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthUserResolvers<
  ContextType = CustomContext,
  ParentType extends
    ResolversParentTypes['AuthUser'] = ResolversParentTypes['AuthUser'],
> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImageUrl?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = CustomContext,
  ParentType extends
    ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  addQuack?: Resolver<
    ResolversTypes['Quack'],
    ParentType,
    ContextType,
    RequireFields<MutationAddQuackArgs, 'text' | 'userId'>
  >;
  deleteQuack?: Resolver<
    ResolversTypes['String'],
    ParentType,
    ContextType,
    RequireFields<MutationDeleteQuackArgs, 'quackId'>
  >;
  signIn?: Resolver<
    ResolversTypes['AuthInfo'],
    ParentType,
    ContextType,
    RequireFields<MutationSignInArgs, 'email' | 'password'>
  >;
  signUp?: Resolver<
    ResolversTypes['AuthInfo'],
    ParentType,
    ContextType,
    RequireFields<
      MutationSignUpArgs,
      'email' | 'name' | 'password' | 'userName'
    >
  >;
};

export type QuackResolvers<
  ContextType = CustomContext,
  ParentType extends
    ResolversParentTypes['Quack'] = ResolversParentTypes['Quack'],
> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = CustomContext,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  quacks?: Resolver<Array<ResolversTypes['Quack']>, ParentType, ContextType>;
  user?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    RequireFields<QueryUserArgs, 'userName'>
  >;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = CustomContext,
  ParentType extends
    ResolversParentTypes['User'] = ResolversParentTypes['User'],
> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileImageUrl?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  quacks?: Resolver<Array<ResolversTypes['Quack']>, ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = CustomContext> = {
  AuthInfo?: AuthInfoResolvers<ContextType>;
  AuthUser?: AuthUserResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Quack?: QuackResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};
