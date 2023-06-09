import { createSlice } from '@reduxjs/toolkit';

type Markup = {
  id: number;
  userId: number;
  lat: number;
  lng: number;
  tel: string;
  description: string;
  imageUrl: string;
};

type MarkupWithUserName = Markup & {
  name: string;
};

type InitialState = {
  value: Markup[];
  selectedPet: MarkupWithUserName;
  selectedLocation: {
    selected: boolean;
    lat: number;
    lng: number;
  };
};

const initialState: InitialState = {
  value: [],
  selectedPet: {
    id: 0,
    name: '',
    userId: 0,
    lat: 0,
    lng: 0,
    tel: '',
    description: '',
    imageUrl: '',
  },
  selectedLocation: {
    selected: false,
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
    updateSelectedPet: (state, action) => {
      return { ...state, selectedPet: { ...action.payload } };
    },
    updateSelectedLocation: (state, action) => {
      return { ...state, selectedLocation: { ...action.payload } };
    },
  },
});

export const { updateMarkups, updateSelectedPet, updateSelectedLocation } =
  markupSlice.actions;

export default markupSlice.reducer;
