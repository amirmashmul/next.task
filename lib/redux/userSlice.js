import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedUser: null,
  isModalOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
  },
});

export const { setSelectedUser, toggleModal } = userSlice.actions;
export default userSlice.reducer;