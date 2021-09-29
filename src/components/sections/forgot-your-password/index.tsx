import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { RoundedInput, SolidButton } from '../..';
import {
  ForgotPasswordFormData,
  ForgotPasswordSchema,
} from './react-hook-form.config';
import { Container, Form, FormSection, ImageSection, Message } from './styles';
import { useAuthContext } from '../../../hooks';

export const ForgotYourPassword = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ForgotPasswordFormData>({
    resolver: yupResolver(ForgotPasswordSchema),
  });

  const { sendResetPasswordEmail } = useAuthContext();

  const onSubmit: SubmitHandler<ForgotPasswordFormData> = async ({ email }) => {
    await sendResetPasswordEmail(email);
  };

  return (
    <Container>
      <ImageSection>
        <img src="/forgot-your-password-form.svg" alt="forgot your password" />
      </ImageSection>
      <FormSection>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Message>
            <h1>Forgot</h1>
            <h1>Yor password ?</h1>
          </Message>
          <RoundedInput
            placeholder="Enter your email address"
            error={errors.email}
            {...register('email')}
          />
          <SolidButton isLoading={isSubmitting} type="submit">
            Send password reset email
          </SolidButton>
        </Form>
      </FormSection>
    </Container>
  );
};
