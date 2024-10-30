import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from './interface';

const initialState = {
  isConnectWallet: false,
} as AuthState;

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsConnectWallet(init, action) {
      const state = init;
      state.isConnectWallet = action.payload;
    },
  },
});

export const { setIsConnectWallet } = AuthSlice.actions;
export default AuthSlice.reducer;
