import { createReducer } from "@reduxjs/toolkit";
import authorActions from "./actions";

const { get_author, get_me } = authorActions;

const initialState = { 
    authors: [], 
    author: [],
    message: "" 
};

const authorReducer = createReducer(initialState, (builder) =>  {
    builder
    .addCase(get_author.fulfilled, (state, action) => {
        let newState = {
            ...state,
            authors: action.payload.response.author.response,
            message: action.payload.message
        }
        return newState
    })
    .addCase(get_author.rejected, (state, action) => {
        let newState =  {
            ...state,
            message: "error"
        }
        return newState
    })
    .addCase(get_me.fulfilled, (state, action) => {
        let newState = {
            ...state,
            author: action.payload.response.author,
            message: action.payload.message
        }
        return newState
    })
    .addCase(get_me.rejected, (state, action) => {
        let newState =  {
            ...state,
            message: "error"
        }
        return newState
    })
    
})

export default authorReducer