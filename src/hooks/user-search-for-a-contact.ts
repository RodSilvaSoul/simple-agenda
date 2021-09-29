import { useMemo } from 'react';
import { ContactOnState } from '../@types';

type UseSearchForAContactProps = {
  contacts: ContactOnState[];
  searchValue: string;
};

export const useSearchForAContact = ({
  contacts,
  searchValue = '',
}: UseSearchForAContactProps) => {
  const filteredContacts = useMemo(() => {
    return contacts.filter(({ firstName, lastName }) => {
      if (searchValue !== '') {
        const fullName = firstName + ' ' + lastName;

        return fullName.toLowerCase().includes(searchValue.toLowerCase());
      }

      return true;
    });
  }, [contacts, searchValue]);

  return {
    filteredContacts,
  };
};
