import { RiAddLine, RiContactsBook2Fill } from 'react-icons/ri';
import { FiUpload, FiTrash2 } from 'react-icons/fi';

import { useLocation } from 'react-router-dom';

import {
  Brand,
  Header,
  Container,
  NewContactButton,
  Body,
  InnerContainer,
  NavIntens,
  NavButton,
  NavLink,
} from './styles';
import { useMacroUserActionsContext } from '../../hooks';

export const Sidebar = () => {
  const { pathname } = useLocation();
  const { dispatch } = useMacroUserActionsContext();

  return (
    <Container>
      <InnerContainer>
        <Header>
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
        </Body>
      </InnerContainer>
    </Container>
  );
};
