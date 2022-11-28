import {
  ADDALLCARTS,
  CARTSERACHVALUE,
  SETCARTENDDATE,
  SETCARTSATUS,
  SETCARTSTARTDATE,
} from "../../Types/tableTypes";
import moment from "moment";

const initialState = {
  carts: [],
  cartsearchValue: "",
  cartstatus: "pending",
  endDate: moment().endOf("month"),
  startDate: moment().max("2021-05-01T20:00:00+0800"),
};

export const userCartsTableReducer = (state = initialState, actions) => {
  if (actions.type === ADDALLCARTS) {
    return { ...state, carts: actions.value };
  }

  if (actions.type === CARTSERACHVALUE) {
    return { ...state, cartsearchValue: actions.value };
  }

  if (actions.type === SETCARTSATUS) {
    return { ...state, cartstatus: actions.value };
  }

  if (actions.type === SETCARTENDDATE) {
    return { ...state, endDate: actions.value };
  }

  if (actions.type === SETCARTSTARTDATE) {
    return { ...state, startDate: actions.value };
  }

  return state;
};

export default userCartsTableReducer;
