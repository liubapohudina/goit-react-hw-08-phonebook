import { createAsyncThunk } from "@reduxjs/toolkit";
import { signupRequest, loginRequest } from "../../services/auth-api";
import { toast } from "react-toastify";

export const signup = createAsyncThunk(
    'auth/signup',
    async (body, { rejectWithValue }) => {
        try {
            const  data  = await signupRequest(body)
            toast.success(`${data.user.name} is successfully registered!`)
            return data;
        } catch (error) {
            toast.error(`${error.response.data.message}`)
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const login = createAsyncThunk(
    'auth/login',
    async (body, { rejectWithValue }) => {
        try {
            const data = await loginRequest(body);
            return data;
        } catch (error) {
            toast.error(`${error.message}`);
            return rejectWithValue(error.message);
        }
    }
)


// export const login = createAsyncThunk(
//     'auth/login',
//     async (body, { rejectWithValue }) => {
//         console.log(body)
//         try {
//             const { data } = await loginRequest(body);
//             return data ;
//         } catch (error) {
//             console.log(error)
//             return rejectWithValue(error.message)
//         }
//     }
// )