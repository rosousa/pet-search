import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  userId: number;
  email: string;
  username: string;
};

const initialState: InitialState = {
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
