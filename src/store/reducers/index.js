import { combineReducers } from "redux";
import contact from "./contactSlice";

const appReducer = combineReducers({
  contact,
});

export default appReducer;
