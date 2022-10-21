import { all, takeLatest } from "redux-saga/effects";
import { getContactsRequest } from "../reducers/contactSlice";
import { getMessagesRequest } from "../reducers/messageSlice";
import {
  getActiveChatsRequest,
  getMessagesByUserRequest,
  sendMessageRequest,
} from "../reducers/userSlice";

import { getContacts } from "./contactSaga";
import { getMessages } from "./messageSaga";
import { getActiveChats, getMessagesByUser, sendMessage } from "./userSaga";

function* rootSaga() {
  yield all([
    takeLatest(getContactsRequest, getContacts),
    takeLatest(getActiveChatsRequest, getActiveChats),
    takeLatest(getMessagesByUserRequest, getMessagesByUser),
    takeLatest(sendMessageRequest, sendMessage),
    takeLatest(getMessagesRequest, getMessages),
  ]);
}

export default rootSaga;
