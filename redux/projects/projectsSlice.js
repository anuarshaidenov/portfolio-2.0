import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const { setProjects } = projectSlice.actions;

export default projectsSlice.reducer;
