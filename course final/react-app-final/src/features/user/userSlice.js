import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users : [
        {id:1,name:"zehra"},
        {id:2,name:"zehra"},
        {id:3,name:"zehra"},
    ]
}

const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {
        deleteUser : (state,{payload})=>{
            return  {
                ...state,
                users : state.users.filter(user=>user.id !==payload)
            }
        }
    },
    
})

export const  {deleteUser} = userSlice.actions
export default userSlice.reducer
