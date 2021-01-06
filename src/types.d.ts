export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  hello: Scalars['String'];
  recipes: Array<Recipe>;
  getRecipe: ResponseType;
};


export type QueryGetRecipeArgs = {
  id: Scalars['String'];
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
  ingredients: Array<Scalars['String']>;
};

export type ResponseType = {
  __typename?: 'ResponseType';
  recipe?: Maybe<Recipe>;
  error?: Maybe<ErrorType>;
  success?: Maybe<Scalars['Boolean']>;
};

export type ErrorType = {
  __typename?: 'ErrorType';
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createRecipe: ResponseType;
  deleteRecipe: ResponseType;
  updateRecipe: ResponseType;
};


export type MutationCreateRecipeArgs = {
  data: RecipeDataType;
};


export type MutationDeleteRecipeArgs = {
  id: Scalars['String'];
};


export type MutationUpdateRecipeArgs = {
  data: RecipeDataType;
  id: Scalars['String'];
};

export type RecipeDataType = {
  name: Scalars['String'];
  description: Scalars['String'];
  ingredients: Array<Scalars['String']>;
};
