import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import {
  Contacts,
  Header,
  MobileSidebar,
  NewContact,
  Sidebar,
  Trash,
  ExportModal,
  ViewContactAndEdit
} from '../..';

import { ContactsManagerProvider } from '../../../context';

import { InnerContainer, Main, Container } from './styles';
import { useMacroUserActionsContext } from '../../../hooks';

export const DashBoard = () => {
  const { path } = useRouteMatch();

  const location = useLocation();

  const {
    dispatch,
    state: { isExportModalOpen },
  } = useMacroUserActionsContext();

  return (
    <Container>
      <ContactsManagerProvider>
        <Sidebar />

        <MobileSidebar />

        <InnerContainer>
          <Header />

          <Main>
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route exact path={path}>
                  <Contacts />
                </Route>

                <Route path="/view-contact-and-edit/:id">
                  <ViewContactAndEdit />
                </Route>

                <Route path="/new-contact">
                  <NewContact />
                </Route>

                <Route path="/trash">
                  <Trash />
                </Route>
              </Switch>
            </AnimatePresence>
          </Main>

          <ExportModal
            isOpen={isExportModalOpen}
            onRequestClose={() =>
              dispatch({ type: 'toggle-export-modal-open' })
            }
          />
        </InnerContainer>
      </ContactsManagerProvider>
    </Container>
  );
};
