import { FaTrashRestoreAlt } from 'react-icons/fa';
import { MdMoreVert, MdClear } from 'react-icons/md';

import { Menu, MenuButton, IconButton, MenuList, MenuItem } from '../..';
import { useContactsManager, useUserDecisionModal } from '../../../hooks';

export const MoreOptionsMenuTrash = () => {
  const { restoreContacts, deletePermanently } = useContactsManager();

  const { modalElement, toggleModalOpen } = useUserDecisionModal({
    onYes: () => deletePermanently(),
    textAlert: 'Delete this contact(s) permanently ?',
    subAlert: 'This action is not reversible.',
  });

  return (
    <>
      <Menu>
        <MenuButton>
          <IconButton size="3rem">
            <MdMoreVert />
          </IconButton>
        </MenuButton>

        <MenuList>
          <MenuItem.Button onClick={() => restoreContacts()}>
            <FaTrashRestoreAlt />
            Restore
          </MenuItem.Button>

          <MenuItem.Button onClick={toggleModalOpen}>
            <MdClear />
            Delete permanently
          </MenuItem.Button>
        </MenuList>
      </Menu>
      {modalElement}
    </>
  );
};
