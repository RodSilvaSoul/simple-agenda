import { useParams } from 'react-router';

import { useContactsManager } from '../../../hooks';

import { ContactSkeleton, ContactSkeletonWrapper } from './styles';

import { RenderContentPage } from './render-content-page';

type Params = {
  id: string;
};

export const ViewContactAndEdit = () => {
  const { id } = useParams<Params>();

  const { findAContactOnState } = useContactsManager();

  const contact = findAContactOnState(id);

  if (contact) {
    const { firstName, lastName, avatarUrl, isFavorite, emails, phones, id } =
      contact;

    return (
      <RenderContentPage
        {...{
          id,
          firstName,
          lastName,
          avatarUrl,
          isFavorite,
          emails,
          phones,
        }}
      />
    );
  }

  return (
    <ContactSkeletonWrapper>
      <ContactSkeleton />
      <ContactSkeleton />
    </ContactSkeletonWrapper>
  );
};
