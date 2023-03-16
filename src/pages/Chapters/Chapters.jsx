import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import "./chapters.css"




export default function Chapters() {
    let url = "http://localhost:8080/api/chapters/"
    let {id, page} = useParams()
    let [chapter, setChapter] = useState({})
    let [next, setNext] = useState("")
    let [prev, setPrev] = useState("")
    let [index, setIndex] = useState(parseInt(page))
    let navigate = useNavigate()


    useEffect(
        () => {
            axios.get(url + id)
            .then(res => {
                setChapter(res.data.chapter)
                setNext(res.data.next)
                setPrev(res.data.prev)
                console.log(res.data)
            })
                 .catch(e => console.log(e))
        }, 
        []
    )
//   console.log(chapter)
    //  console.log(next)
    let handlePrev = () => {
        setIndex(index - 1)
          navigate(`/chapters/${id}/${index - 1}`)
        if ( index <= 0 && chapter.order == 1) {
            navigate(`/manga/${chapter.manga_id}/${1}`)
        }

        else if (index <= 0) {
            navigate(`/chapters/${prev}/${0}`)
            window.location.reload(true)
        }
    }


    let handleNext = () => {
        setIndex(index + 1)
        navigate(`/chapters/${id}/${index + 1}`)
        if (index >= chapter.pages.length - 1) {
            navigate(`/chapters/${next}/${0}`)
            window.location.reload(true)
     
    }
}

// console.log(next)

    return (
    <div className='chapters'>
        <div className='header'>
            <h5>n°{chapter?.order } - { chapter?.title} </h5>
        </div>
        <div className='pages'>
        <div className='prev' onClick={handlePrev}>
            <img src="../../images/left-arrow.png" alt="prev" />
        </div>
        <img className='comic-page' src={chapter.pages?.[index]} />
        <div className='next' onClick={handleNext}>
            <img src="../../images/right-arrow.png" alt="next" />
        </div>
        </div>
    </div>
  )
}
