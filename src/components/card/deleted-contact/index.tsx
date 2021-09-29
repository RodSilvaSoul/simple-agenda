import { memo } from 'react';
import dayjs from 'dayjs';
import customParserFormat from 'dayjs/plugin/customParseFormat';

import { Avatar, CheckBox } from '../..';
import { ContactOnState } from '../../../@types';
import { useContactsManager } from '../../../hooks';
import { Container, AvatarWrapper, DeletedAt } from './styles';

dayjs.extend(customParserFormat);

interface CardContactProps extends ContactOnState {}

export const Base = ({
  firstName,
  lastName,
  avatarUrl,
  deletedAt,
  isChecked,
  id,
}: CardContactProps) => {
  const { dispatch } = useContactsManager();

  const fullName = firstName + ' ' + lastName;

  return (
    <Container role="presentation" tabIndex={0} checked={isChecked}>
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
                  repository: 'contactOnTrash',
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

      <DeletedAt>{dayjs(deletedAt).format('YY-MM-DD, HH:MM')}</DeletedAt>

      <div></div>
    </Container>
  );
};

export const DeletedCardContact = memo(Base);
