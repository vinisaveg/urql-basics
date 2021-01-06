import { gql } from 'urql';

export const DeleteRecipe = gql`
  mutation($id: String!) {
    deleteRecipe(id: $id) {
      __typename
      error {
        message
      }
      success
    }
  }
`;
