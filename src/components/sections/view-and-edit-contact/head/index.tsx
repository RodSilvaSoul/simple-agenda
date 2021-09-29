import { Dispatch } from 'react';
import { FiUpload } from 'react-icons/fi';
import {
  MdClose,
  MdKeyboardBackspace,
  MdStar,
  MdStarBorder,
  MdMoreVert,
  MdDelete,
} from 'react-icons/md';
import { useHistory } from 'react-router';

import {
  AvatarUploadInput,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  SolidButton,
} from '../../..';
import { useContactsManager, useUserDecisionModal } from '../../../../hooks';
import { ViewContactActions } from '../../../../reduces';

import {
  Container,
  CancelButton,
  BackButton,
  ContactInfo,
  Options,
  MobileSaveButton,
} from './styles';

interface HeadProps {
  isOnEditMode: boolean;
  isFavorite: boolean;
  isSaveButtonDisabled: boolean;
  isSubmitting: boolean;
  contactName: string;
  avatarUrl: string | null;
  id: string;
  dispatch: Dispatch<ViewContactActions>;
}

export const Head = ({
  isOnEditMode,
  isFavorite,
  isSubmitting,
  isSaveButtonDisabled,
  avatarUrl,
  id,
  contactName,
  dispatch,
}: HeadProps) => {
  const { push } = useHistory();

  const { moveContactToTrash, toggleContactFavorite } = useContactsManager();

  const { modalElement, toggleModalOpen } = useUserDecisionModal({
    onYes: async () => {
      push('/');
      await moveContactToTrash(id);
    },
    textAlert: 'Do you really want to move this contact to trash?',
  });

  const onRequestExportContact = () => {
    dispatch({
      type: 'toggle-should-export-contact',
    });

    window.setTimeout(
      () =>
        dispatch({
          type: 'toggle-should-export-contact',
        }),
      500,
    );
  };

  return (
    <Container>
      {isOnEditMode ? (
        <CancelButton
          type="button"
          onClick={() =>
            dispatch({
              type: 'toggle-is-on-edit-mode',
            })
          }
        >
          <MdClose />
        </CancelButton>
      ) : (
        <BackButton type="button" to="/">
          <MdKeyboardBackspace />
        </BackButton>
      )}
      <AvatarUploadInput
        size="14rem"
        defaultPhotoUrl={isOnEditMode ? null : avatarUrl}
        onLoadFile={(file) =>
          dispatch({
            type: 'set-avatar-file',
            payload: file,
          })
        }
        isEditMode={isOnEditMode}
      />

      <ContactInfo>
        <h2>{contactName}</h2>
      </ContactInfo>

      <Options>
        <IconButton
          type="button"
          size="3rem"
          onClick={() => toggleContactFavorite(id)}
        >
          {isFavorite ? <MdStar /> : <MdStarBorder />}
        </IconButton>

        <Menu>
          <MenuButton>
            <IconButton type="button" size="3rem">
              <MdMoreVert />
            </IconButton>
          </MenuButton>

          <MenuList>
            <MenuItem.Button onClick={onRequestExportContact}>
              <FiUpload />
              Export
            </MenuItem.Button>

            <MenuItem.Button onClick={toggleModalOpen}>
              <MdDelete />
              Move to trash
            </MenuItem.Button>
          </MenuList>
        </Menu>

        {isOnEditMode ? (
          <SolidButton
            key={1}
            type="submit"
            disabled={isSaveButtonDisabled}
            isLoading={isSubmitting}
          >
            Save
          </SolidButton>
        ) : (
          <SolidButton
            key={2}
            type="button"
            onClick={() =>
              dispatch({
                type: 'toggle-is-on-edit-mode',
              })
            }
          >
            Edit
          </SolidButton>
        )}
      </Options>
      {isOnEditMode && (
        <MobileSaveButton
          disabled={isSaveButtonDisabled}
          type="submit"
          isLoading={isSubmitting}
        >
          Save
        </MobileSaveButton>
      )}
      {modalElement}
    </Container>
  );
};
