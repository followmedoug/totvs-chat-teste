import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { getContactsSuccess } from "../reducers/contactSlice";

function* getContacts() {
  try {
    const response = yield call(api.get, "contacts");

    yield put(getContactsSuccess(response.data));
  } catch (error) {}
}

export { getContacts };
