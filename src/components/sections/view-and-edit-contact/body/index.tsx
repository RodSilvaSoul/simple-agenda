import { Dispatch } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MdEmail, MdPhone } from 'react-icons/md';

import { fadeInVariants } from '../../..';
import { ViewContactActions } from '../../../../reduces';
import { EditContact } from '../edit-contact';
import { ContactData, DataWrapper, IconWrapper } from './styles';
import { ViewContactData } from '../view-contact.types';

interface BodyProps {
  isOnEditMode: boolean;
  dispatch: Dispatch<ViewContactActions>;
  contact: ViewContactData;
}

export const Body = ({ dispatch, isOnEditMode, contact }: BodyProps) => {
  const { emails, phones } = contact;

  return (
    <AnimatePresence>
      {isOnEditMode ? (
        <EditContact dispatch={dispatch} />
      ) : (
        <ContactData
          variants={fadeInVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h2>Contact info</h2>

          <DataWrapper>
            <IconWrapper>
              <MdPhone />
            </IconWrapper>

            <div>
              {phones.map(({ value }, index) => (
                <div key={index}>{value}</div>
              ))}
            </div>
          </DataWrapper>

          <DataWrapper>
            <IconWrapper>
              <MdEmail />
            </IconWrapper>

            <div>
              {emails.map(({ value }, index) => (
                <div key={index}>{value}</div>
              ))}
            </div>
          </DataWrapper>
        </ContactData>
      )}
    </AnimatePresence>
  );
};
