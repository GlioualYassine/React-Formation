import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export  const getPosts = createAsyncThunk("post/getPosts", async ()=>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return data
})

const postSlice = createSlice({
    name : 'post',
    initialState : {
        posts : [],
        loading : false
    },
    reducers : {},
    extraReducers : {
        [getPosts.pending] : (state)=>{
            state.loading = true
            console.log("pending",state.loading)
        },
        [getPosts.fulfilled] : (state,{payload})=>{
            console.log("data filled" , payload)
            return {
                ...state,
                posts : payload,
                loading : false
            }
        },
        [getPosts.rejected]:()=>{
            console.log("error occured")
        }
    }
})

export default postSlice.reducer