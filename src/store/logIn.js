import {createSlice } from "@reduxjs/toolkit";

const initialState={isLoggedIn:false,token:''};

const tokenSlice=createSlice({
    name:'token',
    initialState,
    reducers:{
        logIn(state,action){
state.token=action.payload;
        },
        logOut(state){
            state.token='';
        }
    }
})

export const tokenAction=tokenSlice.actions;

export default tokenSlice;