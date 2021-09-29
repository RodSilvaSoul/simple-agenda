import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { DoubleLoadingSpinner, fadeInVariants } from '../..';

import {
  useContactCheckedStatus,
  useContactsManager,
  useMacroUserActionsContext,
  useSearchForAContact,
} from '../../../hooks';

import { CardContact } from '../../card';

import {
  Container,
  Counter,
  Header,
  Column,
  ContactsWrapper,
  Columns,
  CheckedOptions,
  EmptyContactList,
} from './styles';

import { MoreOptionsMenu } from './more-options-menu';
import { CheckedStatusMenu } from './checked-status-menu';

export const Contacts = () => {
  const {
    state: { contacts, isLoading },
  } = useContactsManager();

  const {
    dispatch,
    state: { searchValue },
  } = useMacroUserActionsContext();

  const { isAllChecked, isOneChecked } = useContactCheckedStatus(contacts);

  const { filteredContacts } = useSearchForAContact({
    contacts,
    searchValue,
  });

  useEffect(() => {
    dispatch({
      type: 'set-search-value',
      payload: '',
    });
  }, [dispatch]);

  return (
    <Container
      variants={fadeInVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Header>
        <AnimatePresence>
          {isOneChecked || (isAllChecked && contacts.length !== 0) ? (
            <CheckedOptions
              initial="initial"
              animate="animate"
              exit="exit"
              variants={fadeInVariants}
              transition={{
                opacity: {
                  duration: 0.6,
                },
              }}
            >
              <CheckedStatusMenu isAllChecked={isAllChecked} />

              <MoreOptionsMenu />
            </CheckedOptions>
          ) : (
            <Columns
              initial="initial"
              animate="animate"
              exit="exit"
              variants={fadeInVariants}
              transition={{
                opacity: {
                  duration: 0.6,
                },
              }}
            >
              <div>
                <Column>Name:</Column>

                <Column>Phone:</Column>

                <Column>Email:</Column>

                <Column />
              </div>
            </Columns>
          )}
        </AnimatePresence>
      </Header>

      <Counter>CONTACTS ({filteredContacts.length})</Counter>
      <ContactsWrapper role="table">
        {isLoading ? (
          <DoubleLoadingSpinner />
        ) : (
          <AnimatePresence>
            {filteredContacts.length === 0 && searchValue === '' ? (
              <EmptyContactList
                variants={fadeInVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <img src="/empty-contact-list.svg" alt="empty contact list" />
                <h2>Your contact list is empty</h2>
              </EmptyContactList>
            ) : (
              <>
                {filteredContacts.map((contact) => (
                  <CardContact key={contact.id} {...contact} />
                ))}
              </>
            )}
          </AnimatePresence>
        )}
      </ContactsWrapper>
    </Container>
  );
};
