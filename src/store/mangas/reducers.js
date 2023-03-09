import mangaActions from "./actions"
import { createReducer } from "@reduxjs/toolkit"

const {

    get_mangas_from_author

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
})

export default mangaReducer
