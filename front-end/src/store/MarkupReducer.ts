import { createSlice } from '@reduxjs/toolkit';

type Markup = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  tel: string;
  imageUrl: string;
};

const initialState: { value: Markup[] } = {
  value: [],
};

const markupSlice = createSlice({
  name: 'markup',
  initialState,
  reducers: {
    updateMarkups: (state, action) => {
      return { ...state, value: [...action.payload] };
    },
  },
});

export const { updateMarkups } = markupSlice.actions;

export default markupSlice.reducer;
