import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
    additionalDetails : null,
    loading: false,
};

const profileSlice = createSlice({
    name: "profile",
    initialState: initialState,
    reducers: {
        setProfile: (state, action) => {
            state.additionalDetails = action.payload;
        },
    },
});

export const { setProfile } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
