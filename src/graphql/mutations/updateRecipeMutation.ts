export const updateRecipeMutation = `
    mutation(
        $id: String!,
        $name: String!,
        $description: String!,
        $ingredients: [String!]!
    ) {
        updateRecipe(
            id: $id,
            data: {
                name: $name,
                description: $description,
                ingredients: $ingredients
        }) {
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
