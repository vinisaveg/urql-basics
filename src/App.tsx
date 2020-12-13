import React, { FunctionComponent } from "react";

import RecipesList from "./components/recipesList/RecipesList.component";
import Wrapper from "./styles/Wrapper";

const App: FunctionComponent = () => {
  return (
    <Wrapper>
      <RecipesList />
    </Wrapper>
  );
};

export default App;
