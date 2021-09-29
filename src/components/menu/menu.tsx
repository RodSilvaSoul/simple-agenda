import {
  createContext,
  ReactElement,
  useCallback,
  useContext,
  useState,
} from 'react';
import { AnimatePresence } from 'framer-motion';

import { MenuWrapper } from './styles';

interface MenuContextData {
  isMenuOpen: boolean;
  toggleMenuOpen: () => void;
}

const MenuContext = createContext<MenuContextData>({} as any);

interface MenuProps {
  children: ReactElement[];
}

export const Menu = ({ children }: MenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenuOpen = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <MenuContext.Provider
      value={{
        isMenuOpen,
        toggleMenuOpen,
      }}
    >
      <AnimatePresence>
        <MenuWrapper>{children}</MenuWrapper>
      </AnimatePresence>
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => useContext(MenuContext);
