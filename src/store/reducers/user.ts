import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

interface UserState {
  logged: boolean;
}
export const initialState: UserState = {
  logged: false,
};

export const login = createAsyncThunk('user/login', async () => {
  const { data } = await axios.post(
    'https://orecipes-api.onrender.com/api/login',
    {
      email: 'bob@mail.io',
      password: '123456',
    }
  );

  console.log(data);

  return data;
});

const userReducer = createReducer(initialState, () => {
  // TODO: Add actions
});

export default userReducer;
