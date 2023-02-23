import { SET_ACTIVE_USER_ID } from "../actions";
import state from "../StaticData";

const initialState = state.activeUserId;

export default function activeUserId(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_USER_ID:
      return action.payload;
    default:
      return state;
  }
}
