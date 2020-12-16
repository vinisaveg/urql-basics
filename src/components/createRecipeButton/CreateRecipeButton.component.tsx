import React, { FunctionComponent, useContext } from 'react';

import { CreateButton } from './styles';

import { AppContext } from '../../context/context';

interface CreateRecipeButtonprops {}

const CreateRecipeButton: FunctionComponent<CreateRecipeButtonprops> = () => {
  const [appContext, setAppContext] = useContext(AppContext);

  const openCreateForm = () => {
    setAppContext({
      ...appContext,
      isUpdateRecipeFormOpen: false,
      isCreateRecipeFormOpen: true,
    });
  };

  return <CreateButton onClick={openCreateForm}>+</CreateButton>;
};

export default CreateRecipeButton;
