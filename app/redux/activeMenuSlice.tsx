import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activePath: '', // Stores the active path
};

const activeMenuSlice = createSlice({
  name: 'activeMenu',
  initialState,
  reducers: {
    setActiveMenu: (state, action) => {
      state.activePath = action.payload; // Set the active path when a menu item is clicked
    },
  },
});

export const { setActiveMenu } = activeMenuSlice.actions;
export default activeMenuSlice.reducer;
