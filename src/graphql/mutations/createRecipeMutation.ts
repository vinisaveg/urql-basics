export const createRecipeMutation = `
    mutation(
        $name: String!,
        $description: String!,
        $ingredients: [String!]!
    ) {
        createRecipe(data: {
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
        }
    }
`;
