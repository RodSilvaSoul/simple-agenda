import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { MdKeyboardBackspace } from 'react-icons/md';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router';

import { AvatarUploadInput, SolidButton } from '../..';
import { NewContactFormData, newContactSchema } from './hook-form.config';
import { FormWrapper } from './form-wrapper';

import { Container, Head, BackButton } from './styles';
import { useContactsManager, useUserDecisionModal } from '../../../hooks';

export const NewContact = () => {
  const [contactAvatar, setContactAvatar] = useState<File | null>(null);
  const [isAErrorOnForm, setIsAErrorOnForm] = useState(false);

  const { push } = useHistory();

  const methods = useForm<NewContactFormData>({
    resolver: yupResolver(newContactSchema),
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = methods;

  const { addContact } = useContactsManager();

  const { modalElement, toggleModalOpen } = useUserDecisionModal({
    onNo: () => push('/'),
    onYes: () => {
      reset();
    },
    textAlert: 'Do you want to add another contact?',
  });

  const onSubmit: SubmitHandler<NewContactFormData> = async ({
    firstName,
    lastName,
    input_email,
    input_tel,
  }) => {
    await addContact({
      emails: input_email,
      phones: input_tel,
      firstName,
      lastName,
      contactAvatar,
    });

    toggleModalOpen();
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Head>
        <BackButton to="/">
          <MdKeyboardBackspace />
        </BackButton>

        <AvatarUploadInput
          size="14rem"
          onLoadFile={(file) => setContactAvatar(file)}
        />

        <SolidButton
          type="submit"
          isLoading={isSubmitting}
          disabled={isAErrorOnForm}
        >
          Save
        </SolidButton>
      </Head>

      <FormProvider {...methods}>
        <FormWrapper
          shouldPreventSubmit={(value) => setIsAErrorOnForm(value)}
        />
      </FormProvider>
      {modalElement}
    </Container>
  );
};
