import React, { FunctionComponent } from "react";
import RecipeCard from "../recipeCard/RecipeCard.component";

import RecipesWrapper from "./styles";

const RecipesList: FunctionComponent = () => {
  return (
    <RecipesWrapper>
      <RecipeCard />
    </RecipesWrapper>
  );
};

export default RecipesList;
