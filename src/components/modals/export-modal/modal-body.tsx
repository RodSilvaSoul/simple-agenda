import { useCallback, useMemo, useState } from 'react';
import { useTheme } from 'styled-components';

import { RadioInput, SolidButton } from '../..';
import { useAuthContext, useContactsManager } from '../../../hooks';
import { makeCsvLinkData } from '../../../util';
import { ContactListEmpty } from './empty-contact-list';

import {
  ButtonsWrapper,
  ModalBodyContainer,
  CsvDownloadButtonLink,
  ContactsSelectedAvailable,
} from './styles';

interface ModalBodyProps {
  onRequestClose: () => void;
}

export const ModalBody = ({ onRequestClose }: ModalBodyProps) => {
  const [isExportAllContacts, setIsExportAllContacts] = useState(true);

  const {
    state: { contacts },
  } = useContactsManager();

  const { user } = useAuthContext();

  const {
    colors: { error },
  } = useTheme();

  const contactsSelected = useMemo(() => {
    return contacts.filter((contact) => contact.isChecked);
  }, [contacts]);

  const allContactsCsvLinkData = useMemo(() => {
    return makeCsvLinkData(contacts);
  }, [contacts]);

  const contactsSelectedCsvLinkData = useMemo(() => {
    return makeCsvLinkData(contactsSelected);
  }, [contactsSelected]);

  const getCsvLinkProps = useCallback(() => {
    if (isExportAllContacts) {
      return allContactsCsvLinkData;
    }
    return contactsSelectedCsvLinkData;
  }, [
    allContactsCsvLinkData,
    contactsSelectedCsvLinkData,
    isExportAllContacts,
  ]);

  return (
    <ModalBodyContainer>
      {contacts.length === 0 ? (
        <ContactListEmpty />
      ) : (
        <>
          <ContactsSelectedAvailable
            isAvailable={contactsSelected.length !== 0}
          >
            <RadioInput
              label={`Contacts  selected (${contactsSelected.length})`}
              name="contacts-checked-source"
              id="contacts-selected"
              checked={!isExportAllContacts}
              onChange={() => setIsExportAllContacts(false)}
            />
          </ContactsSelectedAvailable>

          <RadioInput
            checked={isExportAllContacts}
            onChange={() => setIsExportAllContacts(true)}
            label={`All contacts (${contacts.length})`}
            name="contacts-checked-source"
            id="all-contacts"
          />

          <ButtonsWrapper>
            <SolidButton
              buttonBackgroundColor={error.normal}
              onClick={onRequestClose}
            >
              Cancel
            </SolidButton>

            <CsvDownloadButtonLink
              filename={`simple-agenda-${user?.displayName}-contacts`}
              tabIndex={0}
              onClick={onRequestClose}
              {...getCsvLinkProps()}
            >
              Export
            </CsvDownloadButtonLink>
          </ButtonsWrapper>
        </>
      )}
    </ModalBodyContainer>
  );
};
