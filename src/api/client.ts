import { createClient, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';

import { GetRecipes } from '../graphql/queries/GetRecipes';

export const client = createClient({
  url: 'http://localhost:4000',
  requestPolicy: 'cache-and-network',
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          deleteRecipe: (result, args, cache, info) => {
            cache.updateQuery(
              {
                query: GetRecipes,
              },
              (data: any) => {
                data.recipes.push(result.deleteRecipe);
                return data;
              }
            );
          },
          createRecipe: (result, args, cache, info) => {
            cache.updateQuery(
              {
                query: GetRecipes,
              },
              (data: any) => {
                data.recipes.push(result.createRecipe);
                return data;
              }
            );
          },
        },
      },
    }),
    fetchExchange,
  ],
});
