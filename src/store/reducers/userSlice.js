import { createSlice } from "@reduxjs/toolkit";

export const contacts = createSlice({
  name: "user",
  initialState: {
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
    createUserRequest: (state) => {
      return { ...state, loading: true };
    },
    createuserSuccess: (state, { payload }) => {
      localStorage.setItem("user_id", payload.id);
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
  createUserRequest,
  createuserSuccess,
} = contacts.actions;
export default contacts.reducer;
