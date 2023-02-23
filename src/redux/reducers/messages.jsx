import { SEND_NEW_MESSAGE } from "../actions";
import state from "../StaticData";

const initialState = state.messages;

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_NEW_MESSAGE:
      const { message, user_id } = action.payload;
      if (user_id in state) {
        const userMsgs = state[user_id];
        const number = Object.keys(userMsgs).length;
        return {
          ...state,
          [user_id]: {
            ...userMsgs,
            [number]: {
              is_User_Msg: true,
              number,
              text: message,
            },
          },
        };
      }
      return {
        ...state,
        [user_id]: {
          0: {
            is_User_Msg: true,
            number: 0,
            text: message,
          },
        },
      };

    default:
      return state;
  }
};
