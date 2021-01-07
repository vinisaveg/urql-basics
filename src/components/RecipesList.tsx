import { FunctionComponent } from 'react';

import {
  useDeleteRecipeMutation,
  useRecipesQuery,
} from '../generated/graphql-types';

const RecipesList: FunctionComponent = () => {
  const [{ fetching, data, error }] = useRecipesQuery();

  const [{ ...options }, deleteRecipe] = useDeleteRecipeMutation();

  const handleDelete = async (id: string) => {
    await deleteRecipe({
      id,
    });
  };

  if (fetching) return <span>Buscando...</span>;

  if (error) return <span>{error.message}</span>;

  return (
    <ul>
      {data?.recipes.map((recipe) => (
        <li key={recipe.id.toString()}>
          <span>{recipe.name}</span>

          <span
            onClick={() => handleDelete(recipe.id)}
            style={{
              fontWeight: 600,
              color: 'red',
              marginLeft: '10px',
              cursor: 'pointer',
            }}
          >
            Deletar
          </span>
        </li>
      ))}
    </ul>
  );
};

export default RecipesList;
