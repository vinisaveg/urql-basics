import React, { FunctionComponent, useState } from 'react';

import RecipesList from './components/recipesList/RecipesList.component';
import Title from './styles/Title';
import Wrapper from './styles/Wrapper';
import CreateRecipeButton from './components/createRecipeButton/CreateRecipeButton.component';
import Recipeform from './components/recipeForm/Recipeform.component';

import { AppContext, initialAppContext } from './context/context';

import { Provider } from 'urql';
import { urqlClient } from './api/urql';

const App: FunctionComponent = () => {
  // Get from context
  const appContext = useState(initialAppContext);

  return (
    <AppContext.Provider value={appContext}>
      <Provider value={urqlClient}>
        <Wrapper>
          <Title>myRecipes</Title>

          <RecipesList />

          <Recipeform />

          <CreateRecipeButton />
        </Wrapper>
      </Provider>
    </AppContext.Provider>
  );
};

export default App;
