import { ContactOnState } from '../@types';

type csvData = {
  firstName: string;
  lastName: string;
  avatarUrl: string;
  emails: string[];
  phones: string[];
};

type Contacts = Pick<
  ContactOnState,
  | 'firstName'
  | 'lastName'
  | 'emails'
  | 'phones'
  | 'isFavorite'
  | 'id'
  | 'avatarUrl'
>;

export const makeCsvLinkData = (contacts: Contacts[]) => {
  const headers = [
    {
      label: 'First Name',
      key: 'firstName',
    },
    {
      label: 'Last Name',
      key: 'lastName',
    },
    {
      label: 'Emails',
      key: 'emails',
    },
    {
      label: 'Phones',
      key: 'phones',
    },
    {
      label: 'Contact Avatar',
      key: 'avatarUrl',
    },
  ];

  const data = contacts.reduce<csvData[]>((acc, current) => {
    const { firstName, lastName, emails, phones, avatarUrl } = current;

    const contact = {
      firstName,
      lastName,
      emails: emails.map((email) => email.value),
      phones: phones.map((phone) => phone.value),
      avatarUrl: avatarUrl ?? '',
    };

    acc.push(contact);

    return acc;
  }, []);

  return {
    data,
    headers,
  };
};
