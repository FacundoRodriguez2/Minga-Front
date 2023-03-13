import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { async } from "q"

const handleToken = () => {
    const BEARER_TOKEN = localStorage.getItem("token")

    let config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${BEARER_TOKEN}`,
        },
    }
    return config
}

const get_mangas_from_author = createAsyncThunk(
    "get_mangas_from_author",
    async ({ author_id }) => {
        try {
            let response = await axios.get(
                `http://localhost:8080/api/mangas/authors/${author_id}?new=${true}`,
                handleToken()
            )
            return {
                response: { mangas: response.data.response },
                message: "Manga/s Found",
            }
        } catch (error) {
            console.log(error)
            return {
                response: { mangas: error.response.data },
                message: "Manga not found",
            }
        }
    }
)

const get_manga = createAsyncThunk("get_manga", async ({_id}) => {
    try {
        let response = await axios.get(
            `http://localhost:8080/api/mangas/${_id}`,
            handleToken()
        )
        return {
            response: { mangas: response.data },
            message: "manga obtained",
        } 
    } catch (error) {
        return {
            response: { mangas: error.response.data },
            message: "error obtained manga",
        }
    }
})




const mangaActions = {
    get_mangas_from_author,
    get_manga
}

export default mangaActions
