import React, { FunctionComponent } from 'react';
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
  name,
  description,
  ingredients,
}) => {
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
          <UpdateButton>Atualizar</UpdateButton>
          <DeleteButton>Deletar</DeleteButton>
        </ActionsWrapper>
      </TextWrapper>
    </Card>
  );
};

export default RecipeCard;
