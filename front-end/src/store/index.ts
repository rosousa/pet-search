import { configureStore } from '@reduxjs/toolkit';
import markupReducer from './MarkupReducer';
import userReducer from './UserReducer';

const store = configureStore({
  reducer: {
    markup: markupReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
