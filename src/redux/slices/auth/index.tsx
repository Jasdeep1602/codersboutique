import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from './interface';

const initialState = {
  modal: false,
  modaldata: null,
} as AuthState;

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setModal(init, action) {
      const state = init;
      state.modal = action.payload;
    },
    setModalData(init, action) {
      const state = init;
      state.modaldata = action.payload;
    },
  },
});

export const { setModal, setModalData } = AuthSlice.actions;
export default AuthSlice.reducer;
