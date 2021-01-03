export const deleteRecipeMutation = `
    mutation(
        $id: String!
    ) {
        deleteRecipe(id: $id) {
            error {
                message
            }
            success
        }
    }
`;
