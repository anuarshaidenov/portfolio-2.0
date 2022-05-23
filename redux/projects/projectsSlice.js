import { createSlice, current } from '@reduxjs/toolkit';

const initialState = {
  projects: [],
};

export const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      console.log(current(state));
      return action.payload;
    },
  },
});

export const { setProjects } = projectsSlice.actions;

export default projectsSlice.reducer;
