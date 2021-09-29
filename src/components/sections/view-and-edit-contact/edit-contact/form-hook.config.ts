import * as yup from 'yup';
import { FieldValue } from '../../../../@types';

export type EditContactFormData = {
  firstName: string;
  lastName: string;
  input_email: FieldValue[];
  input_tel: FieldValue[];
};

export const editContactSchema = yup.object().shape({
  firstName: yup.string().required('Your must enter a first name'),
  lastName: yup.string().required('Your must enter a last name'),
  input_email: yup.array().of(
    yup.object().shape({
      value: yup
        .string()
        .email('Invalid email address')
        .required('Your must enter a email address'),
    }),
  ),
  input_tel: yup.array().of(
    yup.object().shape({
      value: yup.string().required('Your must enter a phone number'),
    }),
  ),
});
