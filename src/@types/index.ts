export type FieldValue = {
  value: string;
};

export type ContactOnDataBase = {
  id: string;
  firstName: string;
  lastName: string;
  emails: FieldValue[];
  phones: FieldValue[];
  avatarUrl: string | null;

  isFavorite: boolean;
  isOnTrash: boolean;

  deletedAt: Date | null;
  createdAt: Date;
};

export type ContactOnState = {
  isChecked: boolean;
} & ContactOnDataBase;

export type User = {
  id: string;
  displayName: string;
  photoURL: string | null;
  email: string;
  isEmailVerified: boolean;
};