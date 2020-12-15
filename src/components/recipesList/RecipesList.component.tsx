import React, { FunctionComponent } from 'react';
import RecipeCard from '../recipeCard/RecipeCard.component';

import RecipesWrapper from './styles';

interface RecipesListProps {}

const RecipesList: FunctionComponent<RecipesListProps> = () => {
  return (
    <RecipesWrapper>
      <RecipeCard
        name="Bolo de Cenoura"
        description="Um bolo delicioso de cenoura"
        ingredients={['Cenoura', 'Chocolate']}
      />

      <RecipeCard
        name="Bolo de Cereja"
        description="Um bolo incrível de cereja"
        ingredients={['Cerejas', 'Chocolate']}
      />
    </RecipesWrapper>
  );
};

export default RecipesList;
