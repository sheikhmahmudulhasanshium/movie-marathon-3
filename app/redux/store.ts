import { configureStore } from '@reduxjs/toolkit';
import activeMenuReducer from './activeMenuSlice';
import sidebarMenuReducer from './sidebarMenuSlice';
import navbarMenuReducer from './navbarMenuSlice';
import themeReducer from './themeSlice';
//import movieReducer from './movieSlice';
//import tvReducer from './tvSlice';
//import personReducer from './personSlice';
import menuReducer from './menuSlice'; // Import the menu reducer

const store = configureStore({
  reducer: {
    activeMenu: activeMenuReducer,
    sidebarMenu: sidebarMenuReducer,
    navbarMenu: navbarMenuReducer,
    theme: themeReducer,
    //movie: movieReducer,
    //tv: tvReducer,
    //person: personReducer,
    menu: menuReducer, // Add the menu reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
