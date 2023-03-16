import React, { useEffect } from "react"
import { useNavigate } from "react-router"
import MangaHeader from '../../components/Manga/MangaHeader/mangaHeader'
import Main from '../../components/Manga/Main/main'
import MangaMain from '../../components/Manga/MangaMain/mangaMain'
import MangaContent from "../../components/Manga/MangaContent/mangaContent"

const Manga = () => {
  const navigate = useNavigate()
  useEffect(() => {
      let token = localStorage.getItem("token")
      if (!token || token === undefined) {
          navigate("/")
      }
  })

  return(
    <>
        <Main>
          <MangaHeader/>
          <MangaMain/> 
          <MangaContent/>
        </Main>
    </>
  )
}


export default Manga