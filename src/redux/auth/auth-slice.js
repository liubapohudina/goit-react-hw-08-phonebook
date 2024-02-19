import { createSlice } from "@reduxjs/toolkit";
import { login, signup, current, logout } from "./auth-operations";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(signup.pending, (state) => { state.loading = true })
            .addCase(signup.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.isLogin = true;
                state.loading = false;
                state.error = null;
            })
            .addCase(signup.rejected, (state, { payload }) => {
                state.loading = false;
                state.error = payload;
                state.isLogin = false;
            })
            .addCase(login.pending, (state) => { state.loading = true })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLogin = true;
                state.error = null;
                state.user = payload.user;
                state.token = payload.token;
            })
            .addCase(login.rejected, (state, { error }) => {
                return {
                    ...state,
                    error: error.message,
                    isLogin: false,
                    loading: false,
                };
            })
            .addCase(current.pending, (state) => { state.loading = true })
            .addCase(current.fulfilled, (state, { payload }) => {
                state.loading = false;
                state.isLogin = true;
                state.error = null;
                state.user = payload;
            })
            .addCase(current.rejected, (state) => {
                state.loading = false;
                state.token = '';
            })
            .addCase(logout.pending, (state) => { state.loading = true })
            .addCase(logout.fulfilled, (state) => {
                state.loading = false;
                state.isLogin = false;
                state.error = null;
                state.user = {};
                state.token = '';
            })
            .addCase(logout.rejected, (state, {payload}) => {
                state.loading = false;
                state.error = payload;
                state.isLogin = false;
            })
    }
});

export default authSlice.reducer;

