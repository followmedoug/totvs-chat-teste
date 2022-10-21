import { all, takeLatest } from "redux-saga/effects";
import { getContactsRequest } from "../reducers/contactSlice";
import { getContacts } from "./contactSaga";

function* rootSaga() {
  yield all([takeLatest(getContactsRequest, getContacts)]);
}

export default rootSaga;
