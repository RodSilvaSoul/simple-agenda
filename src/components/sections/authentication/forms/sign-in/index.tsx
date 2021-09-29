import { MdEmail, MdLock } from 'react-icons/md';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FirebaseSocialAuthentication, RoundedInput } from '../../../..';
import { useAuthContext } from '../../../../../hooks';
import { formVariants } from '../../framer-motion.config';
import { DefaultFormProps } from '../default-form-props';
import { Form, FormButton, LinkStyles, ToggleMode } from '../default-style';
import { SignInFormData, SignInSchema } from './react-hook-form.config';

interface SignInFormProps extends DefaultFormProps {}

export const SignInForm = ({ onRequestToggle }: SignInFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    resolver: yupResolver(SignInSchema),
  });

  const { signInWithEmailAndPassword } = useAuthContext();

  const onSubmit: SubmitHandler<SignInFormData> = async ({
    email,
    password,
  }) => {
    await signInWithEmailAndPassword(email, password);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      variants={formVariants}
      initial="enter"
      animate="center"
      exit="exit"
    >
      <RoundedInput
        {...register('email')}
        error={errors.email}
        placeholder="Enter your email"
        type="email"
        autoComplete="off"
        label="Email"
        icon={<MdEmail />}
      />

      <RoundedInput
        {...register('password')}
        error={errors.password}
        placeholder="Enter your password"
        type="password"
        label="password"
        autoComplete="off"
        icon={<MdLock />}
      />

      <LinkStyles to="/forgot-your-password">Forgot your password ?</LinkStyles>

      <FormButton isLoading={isSubmitting} type="submit">
        Sign in
      </FormButton>
      <ToggleMode onClick={onRequestToggle}>
        you don't have an account yet? Sign up
      </ToggleMode>

      <FirebaseSocialAuthentication />
    </Form>
  );
};
