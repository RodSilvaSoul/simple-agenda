export type MacroUserActionsState = {
  isMobileSidebarOpen: boolean;
  isExportModalOpen: boolean;
  searchValue: string;
};

export const macroUserActionsInitialState: MacroUserActionsState = {
  isExportModalOpen: false,
  isMobileSidebarOpen: false,
  searchValue: '',
};

export type MacroUserActionsActions =
  | {
      type: 'toggle-export-modal-open';
    }
  | {
      type: 'toggle-mobile-sidebar-open';
    }
  | {
      type: 'set-search-value';
      payload: string;
    };

export const macroUserActionsReducer = (
  state: MacroUserActionsState,
  actions: MacroUserActionsActions,
): MacroUserActionsState => {
  switch (actions.type) {
    case 'toggle-export-modal-open': {
      return {
        ...state,
        isExportModalOpen: !state.isExportModalOpen,
      };
    }

    case 'toggle-mobile-sidebar-open': {
      return {
        ...state,

        isMobileSidebarOpen: !state.isMobileSidebarOpen,
      };
    }

    case 'set-search-value': {
      return {
        ...state,
        searchValue: actions.payload,
      };
    }

    default: {
      return state;
    }
  }
};
