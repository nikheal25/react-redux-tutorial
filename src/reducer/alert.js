import { SET_ALERT, REMOVE_ALERT } from "../actions/type";
const initialState = [];

console.log("State started");
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      console.log("inside setalert");
      console.log(action);
      return [...state, action.payload];
    case REMOVE_ALERT:
      console.log("inside REMOVE_ALERT");
      return state.filter((alert) => alert.id !== payload);
    default:
      console.log(state);
      return state;
  }
}
