import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
// import axios from 'axios';
import axiosInstance from '../../utils/axios';

interface UserState {
  // logged: boolean;
  pseudo: string | null;
  // token: string | null;
}
export const initialState: UserState = {
  // la propriété d'état `logged` est redondante avec `pseudo` :
  // quand on est connecté : pseudo est non nul
  // sinon, il est nul
  // logged: false,
  pseudo: null,
  // token: null,
};

export const logout = createAction('user/logout');

export const login = createAsyncThunk(
  'user/login',
  async (formData: FormData) => {
    const objData = Object.fromEntries(formData);

    // const { data } = await axios.post(
    //   'https://orecipes-api.onrender.com/api/login',
    //   objData
    // );

    const { data } = await axiosInstance.post('/login', objData);

    axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.token}`;

    delete data.token;

    return data as {
      logged: boolean;
      pseudo: string;
      // token: string;
    };
  }
);

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.fulfilled, (state, action) => {
      // state.logged = true;
      state.pseudo = action.payload.pseudo;
      // state.token = action.payload.token;
    })
    .addCase(logout, (state) => {
      state.pseudo = null;
      delete axiosInstance.defaults.headers.common.Authorization;
      // state.token = null;
    });
});

export default userReducer;
