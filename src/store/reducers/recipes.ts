import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
// import data from '../../data';
import { Recipe } from '../../@types/recipe';

interface RecipesState {
  loading: boolean;
  list: Recipe[] | null;
}
export const initialState: RecipesState = {
  loading: true,
  list: null,
};

export const getRecipes = createAsyncThunk('recipes/getRecipes', async () => {
  const { data } = await axios.get(
    'https://orecipes-api.onrender.com/api/recipes'
  );
  return data as Recipe[];
});

const recipesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getRecipes.pending, (state) => {
      state.loading = true;
    })
    .addCase(getRecipes.fulfilled, (state, action) => {
      state.list = action.payload;
      state.loading = false;
    })
    .addCase(getRecipes.rejected, (state, action) => {
      console.error(action.error);
      state.loading = false;
    });
});

export default recipesReducer;
