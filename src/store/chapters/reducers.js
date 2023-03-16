import chapterActions from './actions'
import { createReducer } from "@reduxjs/toolkit"


const{
 
  get_chapters

}=chapterActions


const initialState = {
  chapter: [],
  message: ""
}

const chapterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(get_chapters.fulfilled,(state,action)=>{
      let newState = {
        ...state,
        chapter: action.payload.chapter,
        message: action.payload.message
    }
    return newState
    })
    // .addCase(get_chapters.rejected, (state, action) => {
    //   let newState =  {
    //       message: "error"
    //   }
    //   return newState
    })


export default chapterReducer