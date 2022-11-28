import {
  ADDALLBOOKINGS,
  BOOKINGSERACHVALUE,
  SETBOOKINGSTATUS,
  SETENDDATE,
  SETSTARTDATE,
} from "../../Types/tableTypes";
import moment from "moment";

const initialState = {
  bookings: [],
  searchValue: "",
  status: "pending",
  endDate: moment().endOf("month"),
  startDate: moment().max("2021-05-01T20:00:00+0800"),
};

export const userBookingsTableReducer = (state = initialState, actions) => {
  if (actions.type === ADDALLBOOKINGS) {
    return { ...state, bookings: actions.value };
  }

  if (actions.type ===BOOKINGSERACHVALUE) {
    return { ...state, searchValue: actions.value };
  }

  if (actions.type === SETBOOKINGSTATUS) {
    return { ...state, status: actions.value };
  }

  if (actions.type === SETENDDATE) {
    return { ...state, endDate: actions.value };
  }

  if (actions.type === SETSTARTDATE) {
    return { ...state, startDate: actions.value };
  }

  return state;
};

export default userBookingsTableReducer;
