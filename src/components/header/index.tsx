import { useLocation } from 'react-router';

import { MdMenu, MdExitToApp } from 'react-icons/md';

import {
  SearchInput,
  Avatar,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from '..';
import { useAuthContext, useMacroUserActionsContext } from '../../hooks';

import { Container, InnerContainer, Profile } from './styles';

export const Header = () => {
  const {
    state: { searchValue },
    dispatch,
  } = useMacroUserActionsContext();

  const { signOut, user } = useAuthContext();

  const { pathname } = useLocation();

  return (
    <Container>
      <InnerContainer>
        <IconButton
          onClick={() =>
            dispatch({
              type: 'toggle-mobile-sidebar-open',
            })
          }
        >
          <MdMenu />
        </IconButton>

        {['/trash', '/'].includes(pathname) ? (
          <SearchInput
            value={searchValue}
            onChange={(event) =>
              dispatch({
                type: 'set-search-value',
                payload: event.target.value,
              })
            }
          />
        ) : (
          <div />
        )}
        <Menu>
          <MenuButton>
            <Profile>
              <Avatar src={user?.photoURL} alt="user_avatar" size="2.5rem" />
            </Profile>
          </MenuButton>

          <MenuList menuPosition="left">
            <MenuItem.Button onClick={() => signOut()}>
              <MdExitToApp />
              Sign Out
            </MenuItem.Button>
          </MenuList>
        </Menu>
      </InnerContainer>
    </Container>
  );
};
