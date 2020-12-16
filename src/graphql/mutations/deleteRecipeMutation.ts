export const deleteRecipeMutation = `
    mutation(
        $id: String!
    ) {
        deleteRecipe(id: $id) {
            recipe {
                id
            }
            error {
                message
            }
            success
        }
    }
`;
