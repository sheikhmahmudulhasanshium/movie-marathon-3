
import { configureStore } from '@reduxjs/toolkit';
import activeMenuReducer from './activeMenuSlice'; // Assuming these exist
import sidebarMenuReducer from './sidebarMenuSlice';
import navbarMenuReducer from './navbarMenuSlice';
import themeReducer from './themeSlice';
import menuReducer from './menuSlice';
import movieReducer from './movieSlice'; // Assuming this exists

const store = configureStore({
  reducer: {
    activeMenu: activeMenuReducer,
    sidebarMenu: sidebarMenuReducer,
    navbarMenu: navbarMenuReducer,
    theme: themeReducer,
    menu: menuReducer,
    movie: movieReducer, 
      //tv: tvReducer,
      //person: personReducer,
  },
});
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;