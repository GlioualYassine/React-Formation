import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import postReducer from "../features/post/PostSlice";

const store = configureStore({
    reducer : {
        utilisateurs : userReducer,
        post : postReducer
    }
})

export default store