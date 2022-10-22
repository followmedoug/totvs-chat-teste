import { all, takeLatest } from "redux-saga/effects";
import {
  createContactRequest,
  getContactsRequest,
} from "../reducers/contactSlice";
import { getMessagesRequest } from "../reducers/messageSlice";
import {
  createUserRequest,
  getActiveChatsRequest,
  getMessagesByUserRequest,
  sendMessageRequest,
} from "../reducers/userSlice";

import { createContact, getContacts } from "./contactSaga";
import { getMessages } from "./messageSaga";
import {
  createUser,
  getActiveChats,
  getMessagesByUser,
  sendMessage,
} from "./userSaga";

function* rootSaga() {
  yield all([
    takeLatest(getContactsRequest, getContacts),
    takeLatest(getActiveChatsRequest, getActiveChats),
    takeLatest(getMessagesByUserRequest, getMessagesByUser),
    takeLatest(sendMessageRequest, sendMessage),
    takeLatest(getMessagesRequest, getMessages),
    takeLatest(createUserRequest, createUser),
    takeLatest(createContactRequest, createContact),
  ]);
}

export default rootSaga;
