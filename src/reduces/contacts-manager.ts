import { ContactOnState, ContactOnDataBase } from '../@types';
import { sortContacts } from '../util';

export type ContactsState = {
  contacts: ContactOnState[];
  contactOnTrash: ContactOnState[];
  showCheckOptions: boolean;
  shouldContinueTask: boolean;
  isAllContactsChecked: boolean;
  isDoingATask: boolean;
  isLoading: boolean;
};

export const initialState: ContactsState = {
  contacts: [],
  contactOnTrash: [],
  showCheckOptions: false,
  shouldContinueTask: true,
  isAllContactsChecked: false,
  isDoingATask: false,
  isLoading: false,
};

type StateRepositories = 'contacts' | 'contactOnTrash';

export type ContactsAction =
  | {
      type: 'load-contacts';
      payload: ContactOnDataBase[];
    }
  | {
      type: 'toggle-check-contact';
      payload: {
        id: string;
        status: boolean;
        repository: StateRepositories;
      };
    }
  | {
      type: 'check-all-contacts';
      payload: StateRepositories;
    }
  | {
      type: 'uncheck-all-contacts';
      payload: StateRepositories;
    }
  | {
      type: 'set_is_loading_true';
    };

export const contactsReducer = (
  state: ContactsState,
  action: ContactsAction,
): ContactsState => {
  switch (action.type) {
    case 'load-contacts': {
      if (action.payload.length) {
        const contacts: ContactOnState[] = [];

        const contactOnTrash: ContactOnState[] = [];

        action.payload.forEach((contact) => {
          if (contact.isOnTrash) {
            contactOnTrash.push({
              ...contact,
              isChecked: false,
            });
          } else {
            contacts.push({
              ...contact,
              isChecked: false,
            });
          }
        });

        return {
          ...state,
          contacts: sortContacts(contacts),
          contactOnTrash: sortContacts(contactOnTrash),
          isLoading: false,
        };
      }

      return {
        ...state,
        isLoading: false,
      };
    }

    case 'set_is_loading_true': {
      return {
        ...state,
        isLoading: true,
      };
    }

    case 'toggle-check-contact': {
      const { repository, id, status } = action.payload;

      const newContacts = state[repository].map((contact) => {
        if (contact.id === id) {
          contact.isChecked = status;
        }
        return contact;
      });

      return {
        ...state,
        [repository]: newContacts,
      };
    }

    case 'check-all-contacts': {
      const { payload } = action;

      const contactsChecked = state[payload].map((contact) => ({
        ...contact,
        isChecked: true,
      }));

      return {
        ...state,
        isAllContactsChecked: true,
        [payload]: contactsChecked,
      };
    }

    case 'uncheck-all-contacts': {
      const { payload } = action;

      const contactsChecked = state[payload].map((contact) => ({
        ...contact,
        isChecked: false,
      }));

      return {
        ...state,
        isAllContactsChecked: false,
        [payload]: contactsChecked,
      };
    }

    default: {
      return state;
    }
  }
};
