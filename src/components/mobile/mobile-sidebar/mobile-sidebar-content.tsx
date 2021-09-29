import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { FiUpload, FiTrash2 } from 'react-icons/fi';
import { MdMenu, MdExitToApp } from 'react-icons/md';
import { RiAddLine, RiContactsBook2Fill } from 'react-icons/ri';

import { IconButton } from '../..';
import {
  Container,
  InnerContainer,
  Brand,
  Header,
  Body,
  NewContactButton,
  NavIntens,
  NavButton,
  NavLink,
  ExitButton,
} from './styles';
import {
  useAuthContext,
  useMacroUserActionsContext,
  useOutsideClick,
} from '../../../hooks';

import { sidebarVariants } from './framer-motion.config';

export const MobileSidebarContent = () => {
  const { dispatch } = useMacroUserActionsContext();
  const { pathname } = useLocation();

  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  const { signOut } = useAuthContext();

  useOutsideClick({
    ref: menuRef,
    handler: () =>
      dispatch({
        type: 'toggle-mobile-sidebar-open',
      }),
  });

  useEffect(() => {
    toggleButtonRef.current?.focus();
  }, []);

  return (
    <Container
      ref={menuRef}
      variants={sidebarVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <InnerContainer>
        <Header>
          <IconButton
            ref={toggleButtonRef}
            aria-label="toggle button"
            tabIndex={-1}
            onClick={() =>
              dispatch({
                type: 'toggle-mobile-sidebar-open',
              })
            }
          >
            <MdMenu />
          </IconButton>

          <Brand>
            <img src="/logo.png" alt="agenda" />

            <span>Agenda</span>
          </Brand>
        </Header>
        <Body>
          <NewContactButton to="/new-contact">
            add a new contact <RiAddLine />
          </NewContactButton>

          <NavIntens>
            <NavLink to="/" isActiveLink={pathname === '/'}>
              <RiContactsBook2Fill /> Contacts
            </NavLink>

            <NavButton
              tabIndex={0}
              role="button"
              onClick={() =>
                dispatch({
                  type: 'toggle-export-modal-open',
                })
              }
            >
              <FiUpload /> Export
            </NavButton>

            <NavLink to="/trash" isActiveLink={pathname === '/trash'}>
              <FiTrash2 />
              Trash
            </NavLink>
          </NavIntens>

          <ExitButton onClick={() => signOut}>
            <MdExitToApp /> Exit
          </ExitButton>
        </Body>
      </InnerContainer>
    </Container>
  );
};
