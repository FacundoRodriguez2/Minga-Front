import authorReducer from "./authors/reducers"
import mangaReducer from "./mangas/reducers"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        author: authorReducer,
        mangas: mangaReducer
    },
})

export default store
