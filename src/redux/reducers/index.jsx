import { combineReducers } from "redux";
import activeUserId from "./activeUserId";
import contacts from "./contacts";
import messages from "./messages";
import users from "./users";
import message from "./message";

export default combineReducers({
  contacts,
  users,
  activeUserId,
  messages,
  message,
});
