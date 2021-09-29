import * as yup from 'yup';

export type ForgotPasswordFormData = {
  email: string
}

export const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Your must enter a valid email address'),
});
