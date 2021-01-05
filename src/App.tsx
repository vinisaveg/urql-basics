import { FunctionComponent, useState } from 'react';

import { useMutation } from 'urql';

import { CreateRecipe } from './graphql/mutations/CreateRecipe';

import './app.css';
import { RecipeInput } from './types/RecipeInput';
import RecipesList from './components/RecipesList';

const App: FunctionComponent = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [ingredients, setIngredients] = useState<Array<string>>([]);

  const [{ fetching }, createRecipe] = useMutation(CreateRecipe);

  const handleIngredients = (value: string) => {
    let ingredientsArray = value.split(',');

    setIngredients(ingredientsArray);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let newRecipe: RecipeInput = {
      name,
      description,
      ingredients,
    };

    createRecipe(newRecipe);
  };

  return (
    <div className="app">
      <form onSubmit={(event) => handleSubmit(event)}>
        <label htmlFor="name">Nome</label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          id="name"
          type="text"
        />
        <label htmlFor="description">Descrição</label>
        <input
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          id="description"
          type="text"
        />
        <label htmlFor="ingredients">Ingredientes</label>
        <input
          value={ingredients}
          onChange={(event) => handleIngredients(event.target.value)}
          id="ingredients"
          type="text"
        />

        <button>{fetching ? 'Salvando...' : 'Salvar'}</button>
      </form>

      <RecipesList />
    </div>
  );
};

export default App;
