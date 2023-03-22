import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const read_myMangas = createAsyncThunk(
    'read_myMangas', 
    async ({headers}) => {
        try{
            let response = await axios.get("http://localhost:8080/api/mangas/me", headers)
            return { myMangas: response.data.mangas }

        }catch (error) {
            return { myMangas: ' ' }
            
        }

    } 

)

const actions = { read_myMangas }
export default actions