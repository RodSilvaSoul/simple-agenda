import { MdCheckBox, MdIndeterminateCheckBox } from 'react-icons/md';
import { Menu, MenuButton, IconButton, MenuList, MenuItem } from '../..';
import { useContactsManager } from '../../../hooks';

interface CheckedStatusMenuTrashProps {
  isAllChecked: boolean;
}

export const CheckedStatusMenuTrash = ({
  isAllChecked,
}: CheckedStatusMenuTrashProps) => {
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
              payload: 'contactOnTrash',
            })
          }
        >
          all
        </MenuItem.Button>

        <MenuItem.Button
          onClick={() =>
            dispatch({
              type: 'uncheck-all-contacts',
              payload: 'contactOnTrash',
            })
          }
        >
          none
        </MenuItem.Button>
      </MenuList>
    </Menu>
  );
};
