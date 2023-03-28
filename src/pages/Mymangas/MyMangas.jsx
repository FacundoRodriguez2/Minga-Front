import React from 'react'
import "./mymangas.css"
import H2 from '../../components/H2/H2'
import MangasCategories from '../../components/MangasCategories/MangasCategories'
import MangasType from '../../components/MangasType/MangasType'
import MyMangasCards from '../../components/MyMangasCards/MyMangasCards'
import MyMangasBtns from '../../components/MyMangasBtns/MyMangasBtns'
import { useSelector } from 'react-redux'
import { useDispatch} from "react-redux"
import { Link as Anchor } from 'react-router-dom'



export default function MyMangas() {
  const dispatch = useDispatch() 
  const authorStore = useSelector((store) => store.author)
  const author = authorStore.author

  let mangas = useSelector(store => store.myMangas.myMangas)
  let name = ""
  if(mangas[0]?.author_id.name || mangas[0]?.author_id.last_name){
      name = mangas[0]?.author_id.name
      if(mangas[0]?.author_id.last_name){
        name += " "+mangas[0]?.author_id?.last_name
      }
  }


  return (
    <>
    {
      author?.active ? <div className='mangas'>
      <div className='myMangas-title'>
          { name ? <h2>{name}</h2> : "" }
      </div>

        <section className='mangas-displayed'>
         <H2 text='Explore' />
         <MangasCategories />
         <MangasType />
         <MyMangasCards />
         <MyMangasBtns />
        </section>

   </div> : <div className='noLogged'>
          <Anchor to='/auth'>Please Register/Login</Anchor>
          <p>Or</p>
          <Anchor to='/author-form'>Become an Author</Anchor>
        </div>
    }
    </>
  )
}
