import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import {
  getContactsRequest,
  getContactsSuccess,
} from "../reducers/contactSlice";

function* getContacts() {
  try {
    const response = yield call(api.get, "contacts");

    yield put(getContactsSuccess(response.data));
  } catch (error) {}
}

function* createContact({ payload }) {
  try {
    const { name, email } = payload;

    yield call(api.post, "contacts", { name, email });

    yield put(getContactsRequest());
  } catch (error) {}
}

export { getContacts, createContact };
