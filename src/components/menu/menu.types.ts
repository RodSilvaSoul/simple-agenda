import { ReactNode } from 'react';

export type MenuPosition = 'left' | 'right' | 'top' | 'bottom';

export interface MenuListProps {
  children: ReactNode[] | ReactNode;
  menuPosition?: MenuPosition;
}

export type MenuItemType=  'link' | 'button'