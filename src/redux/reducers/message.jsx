import { TYPING_NEW_MESSAGE } from "../actions";

const initialState = "";

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPING_NEW_MESSAGE:
      return action.payload;

    default:
      return state;
  }
};
