import React, { FunctionComponent } from 'react';

import { CreateButton } from './styles';

interface CreateRecipeButtonprops {}

const CreateRecipeButton: FunctionComponent<CreateRecipeButtonprops> = () => {
  return (
    <CreateButton onClick={() => console.log('Create recipe button clicked')}>
      +
    </CreateButton>
  );
};

export default CreateRecipeButton;
