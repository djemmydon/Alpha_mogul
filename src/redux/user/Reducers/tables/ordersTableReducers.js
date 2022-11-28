import {
  ADDALLORDERS,
  ORDERSERACHVALUE,
  SETORDERENDDATE,
  SETORDERSTARTDATE,
  SETORDERSTATUS,
} from "../../Types/tableTypes";
import moment from "moment";

const initialState = {
  orders: [],
  searchValue: "",
  status: "pending",
  endDate: moment().endOf("month"),
  startDate: moment().max("2021-05-01T20:00:00+0800"),
};

export const userOrdersTableReducer = (state = initialState, actions) => {
  if (actions.type === ADDALLORDERS) {
    return { ...state, orders: actions.value };
  }

  if (actions.type === ORDERSERACHVALUE) {
    return { ...state, searchValue: actions.value };
  }

  if (actions.type === SETORDERSTATUS) {
    return { ...state, status: actions.value };
  }

  if (actions.type === SETORDERENDDATE) {
    return { ...state, endDate: actions.value };
  }

  if (actions.type === SETORDERSTARTDATE) {
    return { ...state, startDate: actions.value };
  }

  return state;
};

export default userOrdersTableReducer;
