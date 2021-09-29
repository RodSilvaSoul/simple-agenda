import { memo } from 'react';
import { MdRemoveRedEye } from 'react-icons/md';

import { Avatar, CheckBox } from '../..';
import { ContactOnState } from '../../../@types';
import { useContactsManager } from '../../../hooks';

import {
  Container,
  ViewContactLinkButton,
  AvatarWrapper,
  ButtonsWrapper,
} from './styles';

interface CardContactProps extends ContactOnState {}

const Base = ({
  emails,
  firstName,
  lastName,
  phones,
  isChecked,
  avatarUrl,
  id,
}: CardContactProps) => {
  const { dispatch } = useContactsManager();

  const fullName = firstName + ' ' + lastName;

  return (
    <Container role="presentation" checked={isChecked} tabIndex={0}>
      <div>
        <AvatarWrapper isChecked={isChecked}>
          <CheckBox
            checked={isChecked}
            onChange={(event) =>
              dispatch({
                type: 'toggle-check-contact',
                payload: {
                  id,
                  status: event.target.checked,
                  repository: 'contacts',
                },
              })
            }
          />

          <Avatar
            className="avatar"
            size="3rem"
            src={avatarUrl}
            alt={fullName}
          />

          <span>{fullName}</span>
        </AvatarWrapper>
      </div>

      <div>{phones[0].value}</div>

      <div>{emails[0].value}</div>

      <ButtonsWrapper>
        <ViewContactLinkButton to={`/view-contact-and-edit/${id}`}>
          <MdRemoveRedEye />
        </ViewContactLinkButton>
      </ButtonsWrapper>
    </Container>
  );
};

export const CardContact = memo(Base);
