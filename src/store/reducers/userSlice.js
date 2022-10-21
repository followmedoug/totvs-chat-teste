import { createSlice } from "@reduxjs/toolkit";

export const contacts = createSlice({
  name: "user",
  initialState: {
    id: "ac96db6d-9a6a-4bb6-9f1f-0eba129acece",
    name: "Douglas",
    loading: false,
    activeChats: [],
    messages: [],
  },
  reducers: {
    getActiveChatsRequest: (state) => {
      return { ...state, loading: true };
    },
    getActiveChatsSuccess: (state, { payload }) => {
      return { ...state, loading: false, activeChats: payload };
    },
    getMessagesByUserRequest: (state) => {
      return { ...state, loading: true };
    },
    getMessagesByUserSuccess: (state, { payload }) => {
      return { ...state, loading: false, messages: payload };
    },
    sendMessageRequest: (state) => {
      return { ...state, loading: true };
    },
    sendMessageSuccess: (state) => {
      return { ...state, loading: false };
    },
  },
});

export const {
  getActiveChatsRequest,
  getActiveChatsSuccess,
  getMessagesByUserRequest,
  getMessagesByUserSuccess,
  sendMessageRequest,
  sendMessageSuccess,
} = contacts.actions;
export default contacts.reducer;
