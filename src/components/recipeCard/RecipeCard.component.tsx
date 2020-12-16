import React, { FunctionComponent, useContext } from 'react';

import { useMutation } from 'urql';
import { deleteRecipeMutation } from '../../graphql/mutations/deleteRecipeMutation';

import { AppContext } from '../../context/context';
import {
  Card,
  TextWrapper,
  TextLabel,
  Description,
  Title,
  Ingredient,
  ActionsWrapper,
  UpdateButton,
  DeleteButton,
} from './styles';

interface RecipeCardProps {
  id?: string;
  name: string;
  description: string;
  ingredients: Array<string>;
}

const RecipeCard: FunctionComponent<RecipeCardProps> = ({
  id,
  name,
  description,
  ingredients,
}) => {
  const [appContext, setAppContext] = useContext(AppContext);
  const [deleteRecipeResult, deleteRecipe] = useMutation(deleteRecipeMutation);

  const openUpdateForm = () => {
    setAppContext({
      ...appContext,
      isCreateRecipeFormOpen: false,
      isUpdateRecipeFormOpen: true,
      recipeIdToUpdate: id ? id : '',
    });
  };

  const handleDeleteRecipe = async () => {
    //Delete Recipe Mutation
    await deleteRecipe({ id });
  };

  return (
    <Card>
      <TextWrapper>
        <TextLabel>Receita</TextLabel>
        <Title>{name}</Title>
      </TextWrapper>

      <TextWrapper>
        <TextLabel>Descrição</TextLabel>
        <Description>{description}</Description>
      </TextWrapper>

      <TextWrapper>
        <TextLabel>Ingredientes</TextLabel>

        {ingredients.map((ingredient, index) => (
          <Ingredient key={ingredient[index]}>{ingredient}</Ingredient>
        ))}
      </TextWrapper>

      <TextWrapper>
        <TextLabel>Opções</TextLabel>
        <ActionsWrapper>
          <UpdateButton onClick={openUpdateForm}>Atualizar</UpdateButton>
          <DeleteButton onClick={handleDeleteRecipe}>Deletar</DeleteButton>
        </ActionsWrapper>
      </TextWrapper>
    </Card>
  );
};

export default RecipeCard;
