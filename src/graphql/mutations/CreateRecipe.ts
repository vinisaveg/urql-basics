import { gql } from 'urql';

export const CreateRecipe = gql`
  mutation($name: String!, $description: String!, $ingredients: [String!]!) {
    createRecipe(
      data: {
        name: $name
        description: $description
        ingredients: $ingredients
      }
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
