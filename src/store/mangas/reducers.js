import mangaActions from "./actions"
import { createReducer } from "@reduxjs/toolkit"

const {

    get_mangas_from_author,
    get_manga
} = mangaActions

const initialState = {
    manga: [],
    mangas: [],
    mangaById: [],
    storedMangas: "",
    message: "",
    limit: 10,
    order: "desc",
    search: "",
}

const mangaReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(get_mangas_from_author.fulfilled, (state, action) => {
            let newState = {
                manga: state.manga,
                mangas: action.payload.response.mangas,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(get_mangas_from_author.rejected, (state, action) => {
            let newState =  {
                message: "error"
            }
            return newState
        })
        .addCase(get_manga.fulfilled, (state, action) => {
            let newState = {
                manga: state.manga,
                mangas: action.payload.response.mangas,
                message: action.payload.message,
            }
            return newState
        })
        .addCase(get_manga.rejected, (state, action) => {
            let newState =  {
                message: "error"
            }
            return newState
        })



})





export default mangaReducer
