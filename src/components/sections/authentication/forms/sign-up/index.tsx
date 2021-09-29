import { useCallback, useState } from 'react';
import { MdPerson, MdEmail, MdLock } from 'react-icons/md';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { RoundedInput, VerifyYourEmailModal } from '../../../..';
import { formVariants } from '../../framer-motion.config';
import { Form, FormButton, ToggleMode } from '../default-style';
import { DefaultFormProps } from '../default-form-props';
import { SignUpFormData, SignUpSchema } from './react-hook-form.config';
import { useAuthContext } from '../../../../../hooks';

interface SignUpFormProps extends DefaultFormProps {}

export const SignUpForm = ({ onRequestToggle }: SignUpFormProps) => {
  const [isVerifyYourEmailModalOpen, setIsVerifyYourEmailModalOpen] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(SignUpSchema),
  });

  const { createUserWithEmailAndPassword } = useAuthContext();

  const toggleVerifyEmailModal = useCallback(() => {
    setIsVerifyYourEmailModalOpen((prev) => !prev);
  }, []);

  const onSubmit: SubmitHandler<SignUpFormData> = async ({
    email,
    name,
    password,
  }) => {
    await createUserWithEmailAndPassword(email, password, name);
    toggleVerifyEmailModal();
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        variants={formVariants}
        initial="enter"
        animate="center"
        exit="exit"
      >
        <RoundedInput
          {...register('name')}
          error={errors.name}
          placeholder="Enter your name"
          type="text"
          label="Name"
          icon={<MdPerson />}
          autoComplete="off"
        />

        <RoundedInput
          {...register('email')}
          error={errors.email}
          placeholder="Enter your email"
          type="email"
          label="Email"
          icon={<MdEmail />}
          autoComplete="off"
        />

        <RoundedInput
          {...register('password')}
          error={errors.password}
          placeholder="Enter your password"
          type="password"
          label="password"
          icon={<MdLock />}
          autoComplete="off"
        />

        <FormButton isLoading={isSubmitting} type="submit">
          Sign Up
        </FormButton>

        <ToggleMode onClick={onRequestToggle}>
          You already have an account ?
        </ToggleMode>
      </Form>

      <VerifyYourEmailModal
        isOpen={isVerifyYourEmailModalOpen}
        onRequestClose={toggleVerifyEmailModal}
      />
    </>
  );
};
