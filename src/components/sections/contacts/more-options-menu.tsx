import { FiUpload } from 'react-icons/fi';
import { MdMoreVert, MdDelete } from 'react-icons/md';

import { Menu, MenuButton, IconButton, MenuList, MenuItem } from '../..';
import {
  useContactsManager,
  useMacroUserActionsContext,
  useUserDecisionModal,
} from '../../../hooks';

export const MoreOptionsMenu = () => {
  const { dispatch } = useMacroUserActionsContext();

  const { moveAllContactCheckedToTrash } = useContactsManager();

  const { modalElement, toggleModalOpen } = useUserDecisionModal({
    onYes: () => moveAllContactCheckedToTrash(),
    textAlert: 'Move all selected contacts to the trash ?',
  });

  return (
    <Menu>
      <MenuButton>
        <IconButton aria-label="more options" size="3rem">
          <MdMoreVert />
        </IconButton>
      </MenuButton>

      <MenuList>
        <MenuItem.Button
          onClick={() =>
            dispatch({
              type: 'toggle-export-modal-open',
            })
          }
        >
          <FiUpload />
          Export
        </MenuItem.Button>

        <MenuItem.Button onClick={toggleModalOpen}>
          <MdDelete />
          Move to trash
        </MenuItem.Button>
      </MenuList>

      {modalElement}
    </Menu>
  );
};
