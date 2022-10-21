import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { getMessagesSuccess } from "../reducers/messageSlice";

function* getMessages() {
  try {
    const response = yield call(api.get, "messages");

    yield put(getMessagesSuccess(response.data));
  } catch (error) {}
}

export { getMessages };
