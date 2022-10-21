import { createSlice } from "@reduxjs/toolkit";

export const messages = createSlice({
  name: "message",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    getMessagesRequest: (state) => {
      return { ...state, loading: true };
    },
    getMessagesSuccess: (state, { payload }) => {
      return { ...state, loading: false, data: payload };
    },
  },
});

export const { getMessagesRequest, getMessagesSuccess } = messages.actions;
export default messages.reducer;
