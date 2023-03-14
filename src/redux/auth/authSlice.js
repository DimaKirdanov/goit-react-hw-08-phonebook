import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
} from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isLoadingUser: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(registerUser.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.isLoggedIn = true;
        store.token = payload.token;
        store.user = payload.user;
      })
      .addCase(registerUser.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(loginUser.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(loginUser.fulfilled, (store, { payload }) => {
        store.isLoading = false;
        store.isLoggedIn = true;
        store.token = payload.token;
        store.user = payload.user;
      })
      .addCase(loginUser.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(logoutUser.pending, store => {
        store.isLoading = true;
        store.error = null;
      })
      .addCase(logoutUser.fulfilled, store => {
        store.isLoading = false;
        store.isLoggedIn = false;
        store.user = { name: null, email: null };
        store.token = null;
      })
      .addCase(logoutUser.rejected, (store, { payload }) => {
        store.isLoading = false;
        store.error = payload;
      })
      .addCase(fetchCurrentUser.pending, store => {
        store.isLoadingUser = true;
        store.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (store, { payload }) => {
        store.isLoadingUser = false;
        store.isLoggedIn = true;
        store.user = payload;
      })
      .addCase(fetchCurrentUser.rejected, (store, { payload }) => {
        store.isLoadingUser = false;
        store.error = payload;
      });
  },
});

export const getAuth = state => state.auth;
