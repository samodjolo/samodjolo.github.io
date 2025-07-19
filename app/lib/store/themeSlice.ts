import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  darkMode: boolean;
  primaryColor: string;
  activeSection: string;
}

const initialState: ThemeState = {
  darkMode: false,
  primaryColor: 'blue',
  activeSection: 'hero'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setPrimaryColor: (state, action: PayloadAction<string>) => {
      state.primaryColor = action.payload;
    },
    setActiveSection: (state, action: PayloadAction<string>) => {
      state.activeSection = action.payload;
    }
  }
});

export const { toggleDarkMode, setPrimaryColor, setActiveSection } = themeSlice.actions;
export default themeSlice.reducer;