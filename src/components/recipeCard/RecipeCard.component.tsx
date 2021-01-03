import React, { FunctionComponent, useContext } from 'react';

import { OperationContext, useMutation } from 'urql';
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
  refreshCallback: (opts?: Partial<OperationContext> | undefined) => void;
}

const RecipeCard: FunctionComponent<RecipeCardProps> = ({
  id,
  name,
  description,
  ingredients,
  refreshCallback,
}) => {
  const [appContext, setAppContext] = useContext(AppContext);
  const [, deleteRecipe] = useMutation(deleteRecipeMutation);

  const openUpdateForm = () => {
    setAppContext({
      ...appContext,
      isCreateRecipeFormOpen: false,
      isUpdateRecipeFormOpen: true,
      recipeIdToUpdate: id ? id : '',
    });
  };

  const refresh = () => {
    refreshCallback({ requestPolicy: 'network-only' });
  };

  const handleDeleteRecipe = async () => {
    //Delete Recipe Mutation
    await deleteRecipe({ id });
    refresh();
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
          <Ingredient key={index}>{ingredient}</Ingredient>
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
