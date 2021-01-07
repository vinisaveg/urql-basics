import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export type CreateRecipeMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  ingredients: Array<Scalars['String']> | Scalars['String'];
}>;


export type CreateRecipeMutation = (
  { __typename?: 'Mutation' }
  & { createRecipe: (
    { __typename: 'ResponseType' }
    & { recipe?: Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Recipe, 'id' | 'name' | 'description' | 'ingredients'>
    )>, error?: Maybe<(
      { __typename?: 'ErrorType' }
      & Pick<ErrorType, 'message'>
    )> }
  ) }
);

export type DeleteRecipeMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteRecipeMutation = (
  { __typename?: 'Mutation' }
  & { deleteRecipe: (
    { __typename: 'ResponseType' }
    & Pick<ResponseType, 'success'>
    & { error?: Maybe<(
      { __typename?: 'ErrorType' }
      & Pick<ErrorType, 'message'>
    )> }
  ) }
);

export type RecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type RecipesQuery = (
  { __typename?: 'Query' }
  & { recipes: Array<(
    { __typename: 'Recipe' }
    & Pick<Recipe, 'id' | 'name' | 'description'>
  )> }
);


export const CreateRecipeDocument = gql`
    mutation CreateRecipe($name: String!, $description: String!, $ingredients: [String!]!) {
  createRecipe(
    data: {name: $name, description: $description, ingredients: $ingredients}
  ) {
    __typename
    recipe {
      id
      name
      description
      ingredients
    }
    error {
      message
    }
  }
}
    `;

export function useCreateRecipeMutation() {
  return Urql.useMutation<CreateRecipeMutation, CreateRecipeMutationVariables>(CreateRecipeDocument);
};
export const DeleteRecipeDocument = gql`
    mutation DeleteRecipe($id: String!) {
  deleteRecipe(id: $id) {
    __typename
    error {
      message
    }
    success
  }
}
    `;

export function useDeleteRecipeMutation() {
  return Urql.useMutation<DeleteRecipeMutation, DeleteRecipeMutationVariables>(DeleteRecipeDocument);
};
export const RecipesDocument = gql`
    query Recipes {
  recipes {
    __typename
    id
    name
    description
  }
}
    `;

export function useRecipesQuery(options: Omit<Urql.UseQueryArgs<RecipesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<RecipesQuery>({ query: RecipesDocument, ...options });
};