import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAuth, register, registerUser } from "../services/authService";
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null
const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    // login user
    [loginAuth.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [loginAuth.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.token
    },
    [loginAuth.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // register user reducer...
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success =true // registration successful
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },

})
export default authSlice.reducer