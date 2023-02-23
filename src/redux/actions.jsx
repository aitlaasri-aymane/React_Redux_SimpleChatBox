export const SET_ACTIVE_USER_ID = "SET_ACTIVE_USER_ID";
export const setActiveUserId = (id) => ({
  type: SET_ACTIVE_USER_ID,
  payload: id,
});

export const TYPING_NEW_MESSAGE = "TYPING_NEW_MESSAGE";
export const typingNewMessage = (message) => ({
  type: TYPING_NEW_MESSAGE,
  payload: message,
});

export const SEND_NEW_MESSAGE = "SEND_NEW_MESSAGE";
export const sendNewMessage = (message, user_id) => ({
  type: SEND_NEW_MESSAGE,
  payload: {
    message,
    user_id,
  },
});
