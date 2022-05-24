import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projects/projectsSlice';

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});
