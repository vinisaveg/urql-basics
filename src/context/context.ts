import { createContext } from 'react';
import Recipe from '../interfaces/Recipe';

interface AppContextType {
  recipes: Array<Recipe>;
  isCreateRecipeFormOpen: boolean;
  isUpdateRecipeFormOpen: boolean;
  recipeIdToUpdate: string;
}

export const initialAppContext: AppContextType = {
  recipes: [],
  isCreateRecipeFormOpen: false,
  isUpdateRecipeFormOpen: false,
  recipeIdToUpdate: '',
};

export const AppContext = createContext<
  [AppContextType, React.Dispatch<React.SetStateAction<AppContextType>>]
>([initialAppContext, () => {}]);
