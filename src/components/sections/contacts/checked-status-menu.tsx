import { MdCheckBox, MdIndeterminateCheckBox } from 'react-icons/md';

import { Menu, MenuButton, IconButton, MenuList, MenuItem } from '../..';
import { useContactsManager } from '../../../hooks';

interface CheckedStatusMenuProps {
  isAllChecked: boolean;
}

export const CheckedStatusMenu = ({ isAllChecked }: CheckedStatusMenuProps) => {
  const { dispatch } = useContactsManager();

  return (
    <Menu>
      <MenuButton>
        <IconButton aria-label="toggle all contacts checked status" size="3rem">
          {isAllChecked ? <MdCheckBox /> : <MdIndeterminateCheckBox />}
        </IconButton>
      </MenuButton>

      <MenuList>
        <MenuItem.Button
          onClick={() =>
            dispatch({
              type: 'check-all-contacts',
              payload: 'contacts',
            })
          }
        >
          all
        </MenuItem.Button>
        <MenuItem.Button
          onClick={() =>
            dispatch({
              type: 'uncheck-all-contacts',
              payload: 'contacts',
            })
          }
        >
          none
        </MenuItem.Button>
      </MenuList>
    </Menu>
  );
};
