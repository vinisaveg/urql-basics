import React, { FunctionComponent } from 'react';
import RecipeCard from '../recipeCard/RecipeCard.component';

import RecipesWrapper from './styles';

import { useQuery } from 'urql';
import { recipesQuery } from '../../graphql/queries/recipesQuery';

interface RecipesListProps {}

const RecipesList: FunctionComponent<RecipesListProps> = () => {
  const [recipesResult, reexecuteQuery] = useQuery({
    query: recipesQuery,
  });

  const { data, fetching, error } = recipesResult;

  if (fetching) return <p>Carregando...</p>;

  if (error) return <p>Algo deu errado... {error.message}</p>;

  return (
    <RecipesWrapper>
      {data.recipes.map((recipe: any) => (
        <RecipeCard
          id={recipe.id}
          key={recipe.id}
          name={recipe.name}
          description={recipe.description}
          ingredients={[...recipe.ingredients]}
          refreshCallback={reexecuteQuery}
        />
      ))}
    </RecipesWrapper>
  );
};

export default RecipesList;
