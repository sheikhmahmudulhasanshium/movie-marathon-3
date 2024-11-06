import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const navbarMenuSlice = createSlice({
  name: 'navbarMenu',
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeNavbar: (state) => {
      state.isOpen = false;
    },
    openNavbar: (state) => {
      state.isOpen = true;
    },
  },
});

export const { toggleNavbar, closeNavbar, openNavbar } = navbarMenuSlice.actions;
export default navbarMenuSlice.reducer;
