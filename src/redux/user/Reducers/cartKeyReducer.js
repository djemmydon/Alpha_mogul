import { ADDCARTKEYS } from "../Types/generaltypes";

const initialState = {
  cartKey: "",
};

export const cartkeyReducer = (state = initialState, actions) => {
  if (actions.type === ADDCARTKEYS) {
    return { ...state, cartKey: actions.value };
  }

  return state;
};

export default cartkeyReducer;
