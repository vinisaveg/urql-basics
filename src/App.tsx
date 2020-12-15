import React, { FunctionComponent, useState } from "react";

import RecipesList from "./components/recipesList/RecipesList.component";
import Title from "./styles/Title";
import Wrapper from "./styles/Wrapper";
import CreateRecipeButton from "./components/createRecipeButton/CreateRecipeButton.component";
import Recipeform from "./components/recipeForm/Recipeform.component";

const App: FunctionComponent = () => {
  // Get from context
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);

  return (
    <Wrapper>
      <Title>myRecipes</Title>

      <RecipesList />

      {isCreateFormOpen ? <Recipeform /> : null}

      {isUpdateFormOpen ? <Recipeform /> : null}

      <CreateRecipeButton />
    </Wrapper>
  );
};

export default App;
