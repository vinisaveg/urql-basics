import { FunctionComponent } from 'react';

import { useQuery, useMutation } from 'urql';

import { GetRecipes } from '../graphql/queries/GetRecipes';
import { DeleteRecipe } from '../graphql/mutations/DeleteRecipe';

import { RecipesData } from '../types/RecipeData';

const RecipesList: FunctionComponent = () => {
  const [{ fetching, data, error }] = useQuery<RecipesData>({
    query: GetRecipes,
  });

  const [{}, deleteRecipe] = useMutation(DeleteRecipe);

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
        <li key={recipe.name}>
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
