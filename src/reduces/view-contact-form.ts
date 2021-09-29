export type ViewContactState = {
  isOnEditMode: boolean;
  isSaveButtonDisabled: boolean;
  isSubmitting: boolean;
  shouldExportContact: boolean;
  avatarFile: File | null;
};

export type ViewContactActions =
  | {
      type: 'toggle-is-on-edit-mode';
    }
  | {
      type: 'set-is-save-button-disabled';
      payload: boolean;
    }
  | {
      type: 'set-is-submitting';
      payload: boolean;
    }
  | {
      type: 'set-avatar-file';
      payload: File | null;
    }
  | {
      type: 'toggle-should-export-contact';
    };

export const initialViewContactState: ViewContactState = {
  avatarFile: null,
  isOnEditMode: false,
  shouldExportContact: false,
  isSaveButtonDisabled: true,
  isSubmitting: false,
};

export const viewContactReducer = (
  state: ViewContactState,
  action: ViewContactActions,
): ViewContactState => {
  switch (action.type) {
    case 'toggle-is-on-edit-mode': {
      return {
        ...state,
        isOnEditMode: !state.isOnEditMode,
      };
    }

    case 'set-is-save-button-disabled': {
      return {
        ...state,
        isSaveButtonDisabled: action.payload,
      };
    }

    case 'set-is-submitting': {
      return {
        ...state,
        isSubmitting: action.payload,
      };
    }

    case 'set-avatar-file': {
      return {
        ...state,
        avatarFile: action.payload,
      };
    }

    case 'toggle-should-export-contact': {
      return {
        ...state,
        shouldExportContact: !state.shouldExportContact,
      };
    }

    default: {
      return state;
    }
  }
};
