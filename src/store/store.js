import authorReducer from "./authors/reducers"
import mangaReducer from "./mangas/reducers"
import chapterReducer from './chapters/reducers'
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        author: authorReducer,
        mangas: mangaReducer,
        chapters:chapterReducer
    },
})

export default store
