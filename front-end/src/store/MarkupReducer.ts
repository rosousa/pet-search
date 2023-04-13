import { createSlice } from '@reduxjs/toolkit';

type Markup = {
  id: number;
  name: string;
  lat: number;
  lng: number;
  tel: string;
  description: string;
  imageUrl: string;
};

type Location = {
  lat: number;
  lng: number;
};

const initialState: { value: Markup[]; targetLocation: Location } = {
  value: [],
  targetLocation: {
    lat: 0,
    lng: 0,
  },
};

const markupSlice = createSlice({
  name: 'markup',
  initialState,
  reducers: {
    updateMarkups: (state, action) => {
      return { ...state, value: [...action.payload] };
    },
    updateLocation: (state, action) => {
      return { ...state, targetLocation: { ...action.payload } };
    },
  },
});

export const { updateMarkups, updateLocation } = markupSlice.actions;

export default markupSlice.reducer;
