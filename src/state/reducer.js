import { ACTIONS } from './actions';

export const reducer = (state, action) => {
   switch (action.type) {
      case ACTIONS.REFRESH_DATA:
         return { ...state, refreshCount: state.refreshCount + 1, }
      case ACTIONS.SET:
         return { ...state, [action.entity]: action.payload, }
      case ACTIONS.OPEN_DIALOG:
         return { ...state, dialogs: { ...state.dialogs, [action.entity]: { ...action.payload, isOpen: true } } }
      case ACTIONS.CLOSE_DIALOG:
         return { ...state, dialogs: { ...state.dialogs, [action.entity]: { isOpen: false } } }
      case ACTIONS.PUSH:
         return { ...state, [action.entity]: [...state[action.entity], ...action.payload] }
      case ACTIONS.POP:
         return { ...state, [action.entity]: state[action.entity]?.filter((id) => !action.payload.includes(id)) }
      default:
         return state
   }
};

