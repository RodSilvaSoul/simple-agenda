import { yupResolver } from '@hookform/resolvers/yup';
import { AnimatePresence } from 'framer-motion';
import { useReducer } from 'react';
import { CSVDownload } from 'react-csv';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { MdEdit } from 'react-icons/md';

import { fadeInVariants } from '../../..';
import { useContactsManager } from '../../../../hooks';
import {
  viewContactReducer,
  initialViewContactState,
} from '../../../../reduces';
import { makeCsvLinkData } from '../../../../util';
import { Body } from '../body';
import {
  EditContactFormData,
  editContactSchema,
} from '../edit-contact/form-hook.config';
import { Head } from '../head';
import { ViewContactData } from '../view-contact.types';
import { MobileEditButtonVariants } from './framer-motion.config';
import { Container, MobileEditButton } from './styles';

export const RenderContentPage = (props: ViewContactData) => {
  const [state, dispatch] = useReducer(
    viewContactReducer,
    initialViewContactState,
  );

  const {
    avatarFile,
    isOnEditMode,
    isSaveButtonDisabled,
    isSubmitting,
    shouldExportContact,
  } = state;

  const { isFavorite, avatarUrl, id, firstName, lastName, emails, phones } =
    props;

  const { updateContact } = useContactsManager();

  const methods = useForm<EditContactFormData>({
    defaultValues: {
      firstName,
      lastName,
      input_email: emails,
      input_tel: phones,
    },
    resolver: yupResolver(editContactSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<EditContactFormData> = async ({
    firstName,
    input_email,
    input_tel,
    lastName,
  }) => {
    await updateContact(id, {
      firstName,
      lastName,
      emails: input_email,
      phones: input_tel,
      avatarFile,
    });
  };

  const contactName = firstName + ' ' + lastName;

  return (
    <Container
      variants={fadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Head
        {...{
          id,
          avatarUrl,
          dispatch,
          isFavorite,
          isOnEditMode,
          isSaveButtonDisabled,
          isSubmitting,
          contactName,
        }}
      />

      <FormProvider {...methods}>
        <Body contact={props} dispatch={dispatch} isOnEditMode={isOnEditMode} />
      </FormProvider>

      <AnimatePresence>
        {!isOnEditMode && (
          <MobileEditButton
            variants={MobileEditButtonVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            type="button"
            onClick={() =>
              dispatch({
                type: 'toggle-is-on-edit-mode',
              })
            }
          >
            <MdEdit />
          </MobileEditButton>
        )}
      </AnimatePresence>

      {shouldExportContact && (
        <CSVDownload {...makeCsvLinkData([props])} target="_self" />
      )}
    </Container>
  );
};
