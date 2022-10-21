import { combineReducers } from "redux";
import contact from "./contactSlice";
import user from "./userSlice";
import message from "./messageSlice";

const appReducer = combineReducers({
  contact,
  user,
  message,
});

export default appReducer;
