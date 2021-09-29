import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { AiOutlineClear } from 'react-icons/ai';

import { DoubleLoadingSpinner, fadeInVariants } from '../..';

import {
  useContactCheckedStatus,
  useContactsManager,
  useMacroUserActionsContext,
  useSearchForAContact,
  useUserDecisionModal,
} from '../../../hooks';

import { DeletedCardContact } from '../../card';

import {
  Container,
  ContactsWrapper,
  Header,
  Counter,
  CheckedOptions,
  HeaderColumns,
  ClearButton,
  EmptyTrash,
  MobileClearTrashButton,
} from './styles';
import { CheckedStatusMenuTrash } from './checked-status-menu-trash';
import { MoreOptionsMenuTrash } from './more-options-menu-trash';

export const Trash = () => {
  const {
    state: { contactOnTrash, isLoading },
  } = useContactsManager();

  const { clearTrash } = useContactsManager();

  const { isAllChecked, isOneChecked } =
    useContactCheckedStatus(contactOnTrash);

  const {
    state: { searchValue },
    dispatch,
  } = useMacroUserActionsContext();

  const { filteredContacts } = useSearchForAContact({
    contacts: contactOnTrash,
    searchValue,
  });

  const { modalElement, toggleModalOpen } = useUserDecisionModal({
    onYes: () => clearTrash(),
    textAlert: 'Empty all items from  Trash?',
    subAlert: 'All items in the trash will be permanently deleted',
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
        <AnimatePresence exitBeforeEnter initial={false}>
          {isOneChecked || (isAllChecked && contactOnTrash.length !== 0) ? (
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
              <CheckedStatusMenuTrash isAllChecked={isAllChecked} />

              <MoreOptionsMenuTrash />
            </CheckedOptions>
          ) : (
            <HeaderColumns
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
              <div>Name:</div>

              <div>Deleted at:</div>

              <div>
                {contactOnTrash.length !== 0 && (
                  <ClearButton onClick={toggleModalOpen}>
                    Empty trash
                  </ClearButton>
                )}
              </div>
            </HeaderColumns>
          )}
        </AnimatePresence>
      </Header>

      <Counter>
        <span>TRASH ({contactOnTrash.length})</span>
      </Counter>

      <ContactsWrapper>
        {isLoading ? (
          <DoubleLoadingSpinner />
        ) : (
          <AnimatePresence>
            {contactOnTrash.length === 0 ? (
              <EmptyTrash
                variants={fadeInVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <img src="/empty-trash.svg" alt="Your trash is empty" />
                <h2>Your trash is empty</h2>
              </EmptyTrash>
            ) : (
              <>
                {filteredContacts.map((contact) => (
                  <DeletedCardContact key={contact.id} {...contact} />
                ))}
              </>
            )}
          </AnimatePresence>
        )}
      </ContactsWrapper>

      {modalElement}

      {contactOnTrash.length !== 0 && (
        <MobileClearTrashButton onClick={toggleModalOpen}>
          <AiOutlineClear />
        </MobileClearTrashButton>
      )}
    </Container>
  );
};
