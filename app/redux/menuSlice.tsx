import { createSlice } from '@reduxjs/toolkit';
import { ClapperboardIcon, HomeIcon, TvMinimal, UserIcon, } from 'lucide-react';

// Define the initial state
const initialState = {
  options: [
    // Add your menu options here
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { name: 'Movies', path: '/movie', icon: <ClapperboardIcon /> },
    { name: 'TV Shows', path: '/tv', icon: <TvMinimal /> },
    { name: 'People', path: '/people', icon: <UserIcon /> },
  ],
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
});

export default menuSlice.reducer;
