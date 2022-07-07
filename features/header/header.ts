import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface HeaderState {
  isActive: boolean
}

// Define the initial state using that type
const initialState: HeaderState = {
  isActive: false,
}

export const headerSlice = createSlice({
  name: 'header',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    active: (state) => {
      state.isActive = true;
    },
    inactive: (state) => {
      state.isActive = false;
    },
  },
})

export const { active, inactive } = headerSlice.actions

export default headerSlice.reducer