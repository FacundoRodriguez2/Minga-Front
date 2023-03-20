import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import apiUrl from "../../url"
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
  async({manga_id,page}) =>{
    try{
      const response =await axios.get(`${apiUrl}chapters?manga_id=${manga_id}&page=${page}`,
        handleToken()
      )

      console.log("get_chapters response: ",response)
      return{
          chapter: response.data.response,
          message: "Chapter/s Found",
          page:page
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