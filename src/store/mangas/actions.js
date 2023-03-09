import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = process.env.REACT_APP_API_URL

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
                `${API_URL}/mangas/authors/:author_id?${author_id}`,
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

const mangaActions = {
    get_mangas_from_author
}

export default mangaActions
