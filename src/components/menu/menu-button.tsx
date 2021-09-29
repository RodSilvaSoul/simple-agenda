import { cloneElement, ReactElement } from 'react';

import { useMenuContext } from './menu';

interface MenuButtonProps {
  children: ReactElement;
}

export const MenuButton = ({ children }: MenuButtonProps) => {
  const { toggleMenuOpen } = useMenuContext();

  const _children = cloneElement(children, {
    onClick: () => toggleMenuOpen(),
    role: 'button',
  });

  return _children;
};
