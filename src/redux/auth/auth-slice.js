import { createSlice } from "@reduxjs/toolkit";
import { login, signup } from "./auth-operations";

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
            });
    }
});

export default authSlice.reducer;

