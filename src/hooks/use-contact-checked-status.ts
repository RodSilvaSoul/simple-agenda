import { useState } from 'react';

import { ContactOnState } from '../@types';
import { useUpdateEffect } from '../util';

export const useContactCheckedStatus = (contacts: ContactOnState[]) => {
  const [isOneChecked, setIsOneChecked] = useState(false);
  const [isAllChecked, setIsAllChecked] = useState(false);

  useUpdateEffect(() => {
    if (contacts.every((contact) => contact.isChecked)) {
      setIsAllChecked(true);
    } else if (contacts.some((contact) => contact.isChecked)) {
      setIsAllChecked(false);
      setIsOneChecked(true);
    } else {
      setIsAllChecked(false)
      setIsOneChecked(false)
    }
  }, [contacts]);

  return {
    isOneChecked,
    isAllChecked,
  };
};
