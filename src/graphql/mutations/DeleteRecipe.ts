export const DeleteRecipe = `
    mutation($id: String!) {
        deleteRecipe(id: $id)  {
        error{
            message
        }
        success
        }
    }
`;
