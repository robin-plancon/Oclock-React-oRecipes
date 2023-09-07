import { createReducer } from '@reduxjs/toolkit';

interface UserState {
  logged: boolean;
}
export const initialState: UserState = {
  logged: false,
};

const userReducer = createReducer(initialState, () => {
  // TODO: Add actions
});

export default userReducer;
