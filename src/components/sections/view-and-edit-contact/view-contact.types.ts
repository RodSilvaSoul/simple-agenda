import { ContactOnState } from '../../../@types';

export interface ViewContactData
  extends Pick<
    ContactOnState,
    | 'firstName'
    | 'lastName'
    | 'emails'
    | 'phones'
    | 'isFavorite'
    | 'id'
    | 'avatarUrl'
  > {}
