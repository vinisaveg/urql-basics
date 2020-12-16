import React, { FunctionComponent, useContext } from 'react';

import { AppContext } from '../../context/context';

import Form from '../form/Form.component';

const Recipeform: FunctionComponent = () => {
  const [appContext] = useContext(AppContext);

  if (appContext.isCreateRecipeFormOpen) {
    return <Form btnName="Criar" formType="create" title="Criar receita" />;
  }

  if (appContext.isUpdateRecipeFormOpen) {
    return (
      <Form btnName="Atualizar" formType="update" title="Atualizar receita" />
    );
  }

  return null;
};

export default Recipeform;
