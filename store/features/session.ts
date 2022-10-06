import { createSlice } from '@reduxjs/toolkit';

export const SessionSlice = createSlice({
  name: 'session',
  initialState: {
    name: '',
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload.name;
    }
  }
})

export const {
  setName,
} = SessionSlice.actions;

export default SessionSlice.reducer;
