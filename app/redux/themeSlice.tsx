import { createSlice } from '@reduxjs/toolkit';

// Define the type for the theme state
type ThemeState = {
  currentTheme: 'light' | 'dark' | 'system';
};

// Initial state with 'system' as default theme
const initialState: ThemeState = {
  currentTheme: 'light', // default is system
};

// Create the theme slice
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // Action to set the theme to light
    setLight: (state) => {
      state.currentTheme = 'light';
    },
    // Action to set the theme to dark
    setDark: (state) => {
      state.currentTheme = 'dark';
    },
    // Action to set the theme to system
    setSystem: (state) => {
      state.currentTheme = 'system';
    },
  },
});

// Export actions for updating theme
export const { setLight, setDark, setSystem } = themeSlice.actions;

// Export the reducer to add to the store
export default themeSlice.reducer;
