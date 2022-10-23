import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { getMessagesRequest } from "../reducers/messageSlice";
import {
  createuserSuccess,
  getActiveChatsSuccess,
  getMessagesByUserSuccess,
} from "../reducers/userSlice";

function* getActiveChats(action) {
  const {
    payload: { id },
  } = action;

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

    const response = yield call(api.post, `messages`, {
      content,
      contactOrigin,
      contactDestination,
    });

    if (response) {
      yield put(getMessagesRequest());
    }
  } catch (error) {}
}

function* createUser(action) {
  try {
    const {
      payload: { name, email },
    } = action;

    const response = yield call(api.post, "contacts", { name, email });

    yield put(createuserSuccess(response.data));
  } catch (error) {}
}

export { getActiveChats, getMessagesByUser, sendMessage, createUser };
