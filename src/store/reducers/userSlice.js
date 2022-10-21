import { createSlice } from "@reduxjs/toolkit";

export const contacts = createSlice({
  name: "user",
  initialState: {
    id: "e73ade23-d2f1-4665-8cf6-93964b3b294d",
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
