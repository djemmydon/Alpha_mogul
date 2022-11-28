import { ADDALLITEMS } from "../Types/generaltypes";

const initialState = {
  items: [],
};

export const itemsReducer = (state = initialState, actions) => {
  if (actions.type === ADDALLITEMS) {
    return { ...state, items: actions.value };
  }

  return state;
};

export default itemsReducer;
