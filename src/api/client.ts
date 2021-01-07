import { createClient, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange, Cache, QueryInput } from '@urql/exchange-graphcache';

import {
  CreateRecipeMutation,
  DeleteRecipeMutation,
  RecipesDocument,
  RecipesQuery,
} from '../generated/graphql-types';

function betterUpdateQuery<Result, Query>(
  cache: Cache,
  queryInput: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(
    queryInput,
    (data) => fn(result, data as any) as any
  );
}

export const client = createClient({
  url: 'http://localhost:4000',
  requestPolicy: 'cache-and-network',
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          deleteRecipe: (_result, args, cache, info) => {
            betterUpdateQuery<DeleteRecipeMutation, RecipesQuery>(
              cache,
              { query: RecipesDocument },
              _result,
              (result, query) => {
                return query;
              }
            );
          },
          createRecipe: (_result, args, cache, info) => {
            betterUpdateQuery<CreateRecipeMutation, RecipesQuery>(
              cache,
              { query: RecipesDocument },
              _result,
              (result, query) => {
                if (result.createRecipe.error) {
                  return query;
                } else {
                  return {
                    recipes: [],
                  };
                }
              }
            );
          },
        },
      },
    }),
    fetchExchange,
  ],
});
