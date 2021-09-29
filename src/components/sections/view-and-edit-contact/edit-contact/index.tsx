import { Dispatch, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { fadeInVariants, Input } from '../../..';
import { ArrayInputs } from './array-inputs';
import { Container } from './styles';
import { ViewContactActions } from '../../../../reduces';
import { useUpdateEffect } from '../../../../util';

interface EditContactFormProps {
  dispatch: Dispatch<ViewContactActions>;
}

export const EditContact = ({ dispatch }: EditContactFormProps) => {
  const {
    register,
    setFocus,
    formState: { isDirty, isSubmitting },
  } = useFormContext();

  useEffect(() => {
    setFocus('firstName');
  }, [setFocus]);

  useUpdateEffect(() => {
    if (isDirty) {
      dispatch({
        type: 'set-is-save-button-disabled',
        payload: false,
      });
    }

    return () =>
      dispatch({
        type: 'set-is-save-button-disabled',
        payload: true,
      });
  }, [isDirty, dispatch]);

  useUpdateEffect(() => {
    if (isSubmitting) {
      dispatch({
        type: 'set-is-submitting',
        payload: true,
      });
    }

    return () =>
      dispatch({
        type: 'set-is-submitting',
        payload: false,
      });
  }, [dispatch, isSubmitting]);

  return (
    <Container
      variants={fadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Input label="First name" {...register('firstName')} />

      <Input label="Last name" {...register('lastName')} />

      <ArrayInputs />
    </Container>
  );
};
