import gql from 'graphql-tag';

export const createRecipeMutation = gql`
  mutation($name: String!, $description: String!, $ingredients: [String!]!) {
    createRecipe(
      data: {
        name: $name
        description: $description
        ingredients: $ingredients
      }
    ) {
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
