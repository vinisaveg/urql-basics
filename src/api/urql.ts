import { createClient, dedupExchange, fetchExchange } from 'urql';

import { cacheExchange } from '@urql/exchange-graphcache';

import { recipesQuery } from '../graphql/queries/recipesQuery';

export const urqlClient = createClient({
  url: 'http://localhost:4000/',
  exchanges: [
    dedupExchange,
    cacheExchange({
      optimistic: {
        createRecipe: (variables, _cache, _info) => {
          //console.log(variables);
          return {
            __typename: 'Recipe',
            name: variables.name,
            description: variables.description,
            ingredients: variables.ingredients,
          };
        },
      },
      updates: {
        Mutation: {
          createRecipe: (result, variables, _cache, _info) => {
            _cache.updateQuery(
              {
                query: recipesQuery,
              },
              (cacheData) => {
                console.log(result);
                console.log(cacheData);
                //cacheData?.recipes.unshift(result.createRecipe)

                return cacheData;
              }
            );
          },
        },
      },
    }),
    fetchExchange,
  ],
});
