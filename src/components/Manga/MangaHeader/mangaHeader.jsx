import "./mangaHeader.css"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import mangaActions from "../../../store/mangas/actions.js"
import { useParams } from "react-router"


const { get_manga } = mangaActions


const MangaHeader = () => {
  const store = useSelector((store) => store.mangas)
  console.log(store)
  const mangas = store.mangas
  console.log(mangas)
  const dispatch = useDispatch()
  const params = useParams()

  useEffect(() => {
      if (mangas.length === 0) {
          dispatch(get_manga({_id: params.id}))
      }
  })
  return(
    <>
    
    </>
  )

}


export default MangaHeader