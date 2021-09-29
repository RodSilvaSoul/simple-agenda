import { useMenuContext } from '..';
import { MenuListControl } from './menu-list-control';
import { MenuListProps } from '../menu.types';

export const MenuList = (props: MenuListProps) => {
  const { isMenuOpen } = useMenuContext();

  return isMenuOpen ? <MenuListControl {...props} /> : null;
};
