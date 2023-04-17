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

type InitialState = {
  value: Markup[],
  selectedPet: Markup
}

const initialState: InitialState = {
  value: [],
  selectedPet: {
    id: 0,
    name: '',
    lat: 0,
    lng: 0,
    tel: '',
    description: '',
    imageUrl: '',
  },
};

const markupSlice = createSlice({
  name: 'markup',
  initialState,
  reducers: {
    updateMarkups: (state, action) => {
      return { ...state, value: [...action.payload] };
    },
    updateSelectedPet: (state, action) => {
      return { ...state, selectedPet: { ...action.payload } };
    },
  },
});

export const { updateMarkups, updateSelectedPet } = markupSlice.actions;

export default markupSlice.reducer;
