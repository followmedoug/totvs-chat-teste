import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import {
  getActiveChatsSuccess,
  getMessagesByUserSuccess,
} from "../reducers/userSlice";

function* getActiveChats(action) {
  const { id } = action;

  try {
    const response = yield call(api.get, `contacts/${id}`);

    yield put(getActiveChatsSuccess(response.data));
  } catch (error) {}
}

function* getMessagesByUser(action) {
  const { id, contactId } = action;

  try {
    const response = yield call(api.get, `messages/${id}/${contactId}`);

    yield put(getMessagesByUserSuccess(response.data));
  } catch (error) {}
}

function* sendMessage(action) {
  try {
    const {
      payload: { content, contactOrigin, contactDestination },
    } = action;

    yield call(api.post, `messages`, {
      content,
      contactOrigin,
      contactDestination,
    });
  } catch (error) {}
}

export { getActiveChats, getMessagesByUser, sendMessage };
