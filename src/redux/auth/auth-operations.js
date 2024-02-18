import { createAsyncThunk } from "@reduxjs/toolkit";
import { signupRequest, loginRequest, currentRequest } from "../../services/auth-api";
import { toast } from "react-toastify";

export const signup = createAsyncThunk(
    'auth/signup',
    async (body, { rejectWithValue }) => {
        try {
            const data  = await signupRequest(body)
            toast.success(`${data.user.name} is successfully registered!`)
            return data;
        } catch (error) {
            toast.error(`${error.response.data.message}`)
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async (body, { rejectWithValue }) => {
        try {
            const data = await loginRequest(body);
            return data;
        }
        catch(error) {
            toast.error(`${error.response.data.message}`)
            return rejectWithValue(error.response.data.message);
        }
    }
)

export const current = createAsyncThunk(
    'auth/current',
    async (_, { rejectWithValue,getState }) => {
        try {
            const { auth } = getState();
            const data = await currentRequest(auth.token)
            return data;
        } catch (error) {
            toast.error(`${error.response.data.message}`);
            return rejectWithValue(error.response.data.message)
        }
    },
    {
        condition: (_, { getState }) => {
            const { auth } = getState();
            if (!auth.token) {
                return false;
            }
        }
    }
)

