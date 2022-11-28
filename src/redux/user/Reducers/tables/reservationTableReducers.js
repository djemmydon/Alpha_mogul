import {
  ADDALLRESERVATIONS,
  RESERVATIONSERACHVALUE,
  SETRESERVATIONSTATUS
} from "../../Types/tableTypes";

const initialState = {
  reservations: [],
  searchValue: "",
  status: "pending",
};

export const userReservationsTableReducer = (state = initialState, actions) => {
  if (actions.type === ADDALLRESERVATIONS) {
    return { ...state, reservations: actions.value };
  }

  if (actions.type ===RESERVATIONSERACHVALUE) {
    return { ...state, searchValue: actions.value };
  }

  if (actions.type === SETRESERVATIONSTATUS) {
    return { ...state, status: actions.value };
  }

  return state;
};

export default userReservationsTableReducer;
