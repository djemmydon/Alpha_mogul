import {
  ADDALLORDERITEMS,
} from "../../Types/tableTypes";
import moment from "moment";

const initialState = {
  items: [],
  cartsearchValue: "",
  cartstatus: "pending",
  endDate: moment().endOf("month"),
  startDate: moment().max("2021-05-01T20:00:00+0800"),
};

export const userItemsTableReducer = (state = initialState, actions) => {
  if (actions.type === ADDALLORDERITEMS) {
    return { ...state, items: actions.value };
  }

  return state;
};

export default userItemsTableReducer;
