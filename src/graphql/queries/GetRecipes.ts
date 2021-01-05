import { gql } from 'urql';

export const GetRecipes = gql`
  query {
    __typename
    recipes {
      __typename
      id
      name
      description
    }
  }
`;
