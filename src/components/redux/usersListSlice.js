import { createSlice } from "@reduxjs/toolkit";

const usersData=[
            { id: "1", role: "Admin", email: "admin@entnt.in", password: "admin123" },
            { id: "2", role: "Inspector", email: "inspector@entnt.in", password: "inspect123" },
            { id: "3", role: "Engineer", email: "engineer@entnt.in", password: "engine123" }
        ]

const initialState={
    userList:usersData
}

export const usersListSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserList:(state,action)=>{
            state.userList=action.payload
            localStorage.setItem('users',JSON.stringify(state.userList))
        },
        addUser:(state,action)=>{
            state.userList.push(action.payload)
            localStorage.setItem('users',JSON.stringify(state.userList))
        },
        removeUser:(state,action)=>{
            state.userList=state.userList.filter(user=>user.id!==action.payload)
            localStorage.setItem('users',JSON.stringify(state.userList))
        },
    }
})

export const { setUserList, addUser, removeUser}=usersListSlice.actions;
export default usersListSlice.reducer;