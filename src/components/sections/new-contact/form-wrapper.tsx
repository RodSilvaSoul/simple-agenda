import { useState, useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { useContactsManager, useInputArrayManager } from '../../../hooks';
import { Input } from '../..';
import { NewContactFormData } from './hook-form.config';
import { FromWrapperContainer } from './styles';
import { useUpdateEffect } from '../../../util';

interface FormWrapperProps {
  shouldPreventSubmit: (value: boolean) => void;
}

export const FormWrapper = ({ shouldPreventSubmit }: FormWrapperProps) => {
  const [isAExistingContact, setIsAExistingContact] = useState(false);

  const {
    register,
    formState: { errors, isSubmitting, isSubmitted },
    setFocus,
    control,
    setError,
    clearErrors,
  } = useFormContext<NewContactFormData>();

  const emailInputs = useInputArrayManager({
    name: 'input_email',
    inputType: 'email',
    label: 'Email',
  });

  const telInputs = useInputArrayManager({
    name: 'input_tel',
    inputType: 'tel',
    label: 'Phone',
  });

  const { firstName, lastName } = useWatch({
    control,
    defaultValue: {
      firstName: '',
      lastName: '',
    },
  });

  const { verifyIfExitsAContactByName } = useContactsManager();

  useEffect(() => {
    setFocus('firstName');
  }, [setFocus]);

  useEffect(() => {
    const fullName = firstName + ' ' + lastName;

    if (fullName !== ' ' && !isSubmitting && !isSubmitted) {
      if (verifyIfExitsAContactByName(fullName)) {
        setIsAExistingContact(true);
        shouldPreventSubmit(true);
      } else {
        setIsAExistingContact(false);
        shouldPreventSubmit(false);
      }
    }
  }, [
    firstName,
    lastName,
    isSubmitting,
    shouldPreventSubmit,
    verifyIfExitsAContactByName,
    isSubmitted,
  ]);

  useUpdateEffect(() => {
    if (isAExistingContact) {
      ['firstName', 'lastName'].forEach((name) => {
        setError(name as any, {
          message: 'Already exists a contact with this name',
          type: 'manual',
        });
      });
    } else {
      clearErrors(['firstName', 'lastName']);
    }
  }, [clearErrors, isAExistingContact, setError]);

  return (
    <FromWrapperContainer>
      <Input
        label="First name"
        {...register('firstName')}
        error={errors.firstName}
      />
      <Input
        label="Last name"
        {...register('lastName')}
        error={errors.lastName}
      />
      {emailInputs.formControlElement}
      {telInputs.formControlElement}
    </FromWrapperContainer>
  );
};
