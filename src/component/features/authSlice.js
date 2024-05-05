import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const LoginUser = createAsyncThunk(
    "user/LoginUser",
    async (user, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:5000/login", {
                email: user.email,
                password: user.password,
            });
            return response.data;
        } catch (error) {
            if (error.message) {
                const message = error.response.data.msg;
                return thunkAPI.rejectWithValue(message);
            }
        }
    }
);

export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
    try {
        const response = await axios.get("http://localhost:5000/me");
        return response.data;
    } catch (error) {
        if (error.response) {
            const message = error.response.data.msg;
        return thunkAPI.rejectWithValue(message); 
        }               
    }
});

export const LogOut = createAsyncThunk("user/LogOut", async (_, thunkAPI) => {
    const response = await axios.get("http://localhost:5000/LogOut");
    return response.data;
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder.addCase(LoginUser.pending, (state) => {
            // mengubah isLoading menjadi true ketika login
            state.isLoading = true;
        });
        builder.addCase(LoginUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;         
        });
        builder.addCase(LoginUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.user = action.payload;         
        });
    }
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
