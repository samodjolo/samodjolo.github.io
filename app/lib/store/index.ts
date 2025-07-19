import { configureStore } from '@reduxjs/toolkit';
import portfolioSlice from './portfolioSlice';
import themeSlice from './themeSlice';

export const store = configureStore({
  reducer: {
    portfolio: portfolioSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;