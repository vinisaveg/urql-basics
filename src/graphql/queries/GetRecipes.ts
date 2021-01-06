import { gql } from 'urql';

export const GetRecipes = gql`
  query {
    recipes {
      __typename
      id
      name
      description
    }
  }
`;
