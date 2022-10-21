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
  },
});

export const { getContactsRequest, getContactsSuccess } = contacts.actions;
export default contacts.reducer;
