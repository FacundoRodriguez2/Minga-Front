import authorReducer from "./authors/reducers"
import mangaReducer from "./mangas/reducers"
import chapterReducer from './chapters/reducers'
import textReducer from "./SearchBar/reducer"
import categoriesReducer from "./Categories/reducer"
import alertReducer from "./Alerts/reducer"
import sortReducer from './Sort/reducer'
import myMangasReducer from "./MyMangas/reducer"
import modalReducer from './RenderEditModal/reducer'
import modalDeleteReducer from './RenderDeleteModal/reducer'
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        author: authorReducer,
        mangas: mangaReducer,
        chapters:chapterReducer,
        text: textReducer,
        categories: categoriesReducer,
        alert: alertReducer,
        order: sortReducer,
        myMangas: myMangasReducer,
        modalState: modalReducer,
        modalDeleteState: modalDeleteReducer
    },
})

export default store
