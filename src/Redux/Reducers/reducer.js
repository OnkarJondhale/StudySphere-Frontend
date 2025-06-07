import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "../Slices/authSlice";
import { profileReducer } from "../Slices/profileSlice";
import { cartReducer } from "../Slices/cartSlice";
import { notificationReducer } from "../Slices/notification";
import { courseReducer } from "../Slices/courseSlice";

const rootReducer = combineReducers({
    auth : authReducer,
    profile : profileReducer,
    cart : cartReducer,
    notification : notificationReducer,
    course : courseReducer
})

export default rootReducer;