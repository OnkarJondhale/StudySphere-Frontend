import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    close : true
}

const notificationSlice = createSlice({
    name : "notification",
    initialState : initialState,
    reducers :
    {
        setClose(state)
        {
            state.close = false
        }
    }
})

export const {setClose} = notificationSlice.actions;
export const notificationReducer = notificationSlice.reducer;