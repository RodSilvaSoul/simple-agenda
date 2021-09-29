import * as yup from 'yup';

export type SignUpFormData = {
  name: string
  email: string;
  password: string;
}

export const SignUpSchema = yup.object().shape({
  name: yup.string().required('Your must enter a name'), 
  email: yup
    .string()
    .email('Invalid email')
    .required('Your must enter a email'),
  password: yup
    .string()
    .min(6, 'Your password must be at least 6 characters long')
    .required('Your must enter password'),
});
