import React, { FunctionComponent } from 'react';
import { Form, Title, InputsWrapper, Input, FinishButton } from './styles';

const Recipeform: FunctionComponent = () => {
  return (
    <Form>
      <Title>Registrar receita</Title>

      <InputsWrapper>
        <Input type="text" placeholder="Nome da sua receita" />

        <Input type="text" placeholder="Descrição da sua receita" />

        <Input type="text" placeholder="Ingredientes (separados por virgula)" />

        <FinishButton type="button">Criar</FinishButton>
      </InputsWrapper>
    </Form>
  );
};

export default Recipeform;
