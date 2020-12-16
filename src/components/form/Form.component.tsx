import React, { FunctionComponent, useContext } from 'react';

import { FormikValues, useFormik } from 'formik';

import { FormField, Title, InputsWrapper, Input, FinishButton } from './styles';

import { AppContext } from '../../context/context';

import { useMutation } from 'urql';
import { createRecipeMutation } from '../../graphql/mutations/createRecipeMutation';
import { updateRecipeMutation } from '../../graphql/mutations/updateRecipeMutation';

interface FormProps {
  title: string;
  btnName: string;
  formType: 'update' | 'create';
}

const Form: FunctionComponent<FormProps> = ({ formType, title, btnName }) => {
  const [createRecipeResult, createRecipe] = useMutation(createRecipeMutation);
  const [updateRecipeResult, updateRecipe] = useMutation(updateRecipeMutation);
  const [appContext, setAppContext] = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      ingredients: '',
    },
    onSubmit: (formikValues) => handleForm(formikValues),
  });

  const update = async (formikValues: FormikValues) => {
    // Update Recipe Mutation
    await updateRecipe({
      id: appContext.recipeIdToUpdate,
      ...formikValues,
      ingredients: handleIngredientsField(formikValues.ingredients),
    });
  };

  const create = async (formikValues: FormikValues) => {
    // Create Recipe Mutation
    await createRecipe({
      ...formikValues,
      ingredients: handleIngredientsField(formikValues.ingredients),
    });
  };

  const handleForm = (formikValues: any) => {
    setAppContext({
      ...appContext,
      isUpdateRecipeFormOpen: false,
      isCreateRecipeFormOpen: false,
    });

    formType === 'update' ? update(formikValues) : create(formikValues);
  };

  const handleIngredientsField = (ingredients: string) => {
    let ingredientsArray = ingredients.split(',');
    return ingredientsArray;
  };

  return (
    <FormField onSubmit={formik.handleSubmit}>
      <Title>{title}</Title>

      <InputsWrapper>
        <Input
          name="name"
          id="name"
          type="text"
          placeholder="Nome da sua receita"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <Input
          name="description"
          id="description"
          type="text"
          placeholder="Descrição da sua receita"
          onChange={formik.handleChange}
          value={formik.values.description}
        />

        <Input
          name="ingredients"
          id="ingredients"
          type="text"
          placeholder="Ingredientes (separados por virgula)"
          onChange={formik.handleChange}
          value={formik.values.ingredients}
        />

        <FinishButton type="submit">{btnName}</FinishButton>
      </InputsWrapper>
    </FormField>
  );
};

export default Form;
