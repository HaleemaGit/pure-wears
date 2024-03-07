// import { createSlice } from '@reduxjs/toolkit';

// export const CATEGORIES_INITIAL_STATE = {
//   categories: [],
// };

// export const categoriesSlice = createSlice({
//   name: 'categories',
//   initialState: CATEGORIES_INITIAL_STATE,
//   reducers: {
//     setCategories(state, action) {
//       state.categories = action.payload;
//     },
//   },
// });

// export const { setCategories } = categoriesSlice.actions;

// export const categoriesReducer = categoriesSlice.reducer;

// src/store/categories/category.slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CATEGORIES_ACTION_TYPES, Category } from './category.types';

export interface CategoriesState {
  categories: Category[];
  isLoading: boolean;
  error: Error | null;
}

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    fetchCategoriesStart: (state) => {
      state.isLoading = true;
    },
    fetchCategoriesSuccess: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
      state.isLoading = false;
    },
    fetchCategoriesFailed: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const { fetchCategoriesStart, fetchCategoriesSuccess, fetchCategoriesFailed } = categorySlice.actions;

export default categorySlice.reducer;
