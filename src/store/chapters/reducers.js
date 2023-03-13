import chapterActions from './actions'
import { createReducer } from "@reduxjs/toolkit"


const{
 
  get_chapters

}=chapterActions


const initialState = {
  chapter: [],
  chapters: [],
  limit: 4,
  message: ""
}

const chapterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(get_chapters.fulfilled,(state,action)=>{
      let newState = {
        chapter: state.chapter,
        chapters: action.payload.response.chapters,
        limit:action.payload.limit,
        message: action.payload.message
    }
    return newState
    })
    .addCase(get_chapters.rejected, (state, action) => {
      let newState =  {
          message: "error"
      }
      return newState
    })
})

export default chapterReducer