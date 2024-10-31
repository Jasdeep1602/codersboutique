import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from './interface';
import { jobAPI } from '@/data/data';

const initialState = {
  modal: false,
  modaldata: null,
  jobdata: jobAPI,
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
    setJobData(init, action) {
      const state = init;
      state.jobdata = action.payload;
    },
  },
});

export const { setModal, setModalData, setJobData } = AuthSlice.actions;
export default AuthSlice.reducer;
