import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

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

const get_chapters= createAsyncThunk(
  "get_chapters",
  async({manga_id,limit}) =>{
    if(limit===undefined){
      limit=4;
    }
    try{
      const response =await axios.get(

        `http://localhost:8080/api/chapters?manga_id=${manga_id}&limit=${limit}}`,
        handleToken()
      )
      console.log("get_chapters response: ",response)
      return{
          response:{ chapters: response.data},
          message: "Chapter/s Found",
          limit:limit
      }
    }
    catch (error) {
      console.log(error)
            return {
                response: { chapters: error.response.data},
                message: "Chapter not found",
            }

    }
  }
)

const chapterActions={
  get_chapters
}

export default chapterActions