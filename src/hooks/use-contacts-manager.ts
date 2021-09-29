import { useContext } from 'react';

import { ContactsManagerContext } from '../context/contacts-manager';

export const useContactsManager = () => useContext(ContactsManagerContext);
