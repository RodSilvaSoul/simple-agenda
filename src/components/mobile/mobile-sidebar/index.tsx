import { AnimatePresence } from 'framer-motion';

import { useMacroUserActionsContext } from '../../../hooks';
import { MobileSidebarContent } from './mobile-sidebar-content';

export const MobileSidebar = () => {
  const {
    state: { isMobileSidebarOpen },
  } = useMacroUserActionsContext();

  return (
    <AnimatePresence>
      {isMobileSidebarOpen && <MobileSidebarContent />}
    </AnimatePresence>
  );
};
