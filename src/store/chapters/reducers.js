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
<<<<<<< HEAD
        chapter: state.chapter,
        chapters: action.payload.response.chapters,
        limit:action.payload.limit,
=======
        ...state,
        chapter: action.payload.chapter,
>>>>>>> c61531298cef76c88af9ff361c75f5d1ac368e2f
        message: action.payload.message
    }
    return newState
    })
<<<<<<< HEAD
    .addCase(get_chapters.rejected, (state, action) => {
      let newState =  {
          message: "error"
      }
      return newState
    })
})
=======
    // .addCase(get_chapters.rejected, (state, action) => {
    //   let newState =  {
    //       message: "error"
    //   }
    //   return newState
    })

>>>>>>> c61531298cef76c88af9ff361c75f5d1ac368e2f

export default chapterReducer