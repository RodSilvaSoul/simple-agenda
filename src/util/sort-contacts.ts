import { ContactOnState } from '../@types';

export const sortContacts = (contacts: ContactOnState[]) => {
  const orderedContacts = contacts.sort((a, b) => {
    if (a.firstName > b.firstName) {
      return 1;
    } else if (a.firstName < b.firstName) {
      return -1;
    } else {
      return 0;
    }
  });

  return orderedContacts;
};
