import React from 'react'
import './mangas.css'
import H2 from '../../components/H2/H2'
import MangasTitle from '../../components/MangasTitle/MangasTitle'
import MangasCategories from '../../components/MangasCategories/MangasCategories'
import MangasType from '../../components/MangasType/MangasType'
import MangasCards from '../../components/MangasCards/MangasCards'
import MangasBtn from '../../components/MangasBtn/MangasBtn'

export default function Comics() {
  return (
    <div className='mangas'>

      <MangasTitle />

      <section className='mangas-displayed'>
        <H2 text='Explore' />
        <MangasCategories />
        <MangasType />
        <MangasCards />
        <MangasBtn />
      </section>

    </div>
  )
}