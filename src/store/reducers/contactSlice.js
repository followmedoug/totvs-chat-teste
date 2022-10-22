import { createSlice } from "@reduxjs/toolkit";

export const contacts = createSlice({
  name: "contact",
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {
    getContactsRequest: (state) => {
      return { ...state, loading: true };
    },
    getContactsSuccess: (state, { payload }) => {
      return { ...state, loading: false, data: payload };
    },
    createContactRequest: (state) => {
      return { ...state, loading: true };
    },
    createContactSuccess: (state) => {
      return { ...state, loading: false };
    },
  },
});

export const {
  getContactsRequest,
  getContactsSuccess,
  createContactRequest,
  createContactSuccess,
} = contacts.actions;
export default contacts.reducer;
