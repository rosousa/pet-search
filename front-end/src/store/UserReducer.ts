import { createSlice } from '@reduxjs/toolkit';
import { User } from '../types';

const initialState: User = {
  userId: 0,
  username: '',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const { userId, username, email } = action.payload;
      return { ...state, userId, username, email };
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
