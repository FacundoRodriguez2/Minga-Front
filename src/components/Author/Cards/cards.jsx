import "./cards.css"

import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { Link } from "react-router-dom"
import mangaActions from "../../../store/mangas/actions.js"
import { useParams } from "react-router"

const { get_mangas_from_author } = mangaActions

const AuthorCards = () => {
    const [isToggled, setIsToggled] = useState(false)
    const store = useSelector((store) => store.mangas)
    const mangas = store.mangas
    const dispatch = useDispatch()
    const params = useParams()

    const handleClick = () => {
        setIsToggled(!isToggled)
    }

    useEffect(() => {
        if (mangas.length === 0) {
            dispatch(get_mangas_from_author(params.id))
        }
    })

    const mangasF = mangas?.filter((manga) => manga.author_id === params.id)

    let mangasFiltrados = mangasF

    console.log(mangasFiltrados)

    switch (isToggled) {
        case false:
            mangasFiltrados = [...mangasF].sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            )
            break
        case true:
            mangasFiltrados = [...mangasF].sort(
                (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
            )
            break
        default:
            mangasFiltrados = mangasF
    }

    return (
        <>
            <div className="containerSwitch">
                <p>New</p>
                <div className="toggle-container">
                    <button
                        className={`toggle-button ${isToggled ? "active" : ""}`}
                        onClick={handleClick}
                    >
                        <span className="toggle-button__slider"></span>
                    </button>
                </div>
                <p>Old</p>
            </div>
            <div className="containerCards">
                {mangasFiltrados.length < 4
                    ? mangasFiltrados.map((manga) => (
                          <div className="card" key={manga._id}>
                              <Link to={`/manga/${manga._id}`} key={manga._id}>
                                  <img
                                      className="imgCard"
                                      src={manga.photo}
                                      alt="manga"
                                  />
                              </Link>
                              <p className="titleManga">{manga.title}</p>
                          </div>
                      ))
                    : mangasFiltrados
                          .slice(0, mangasFiltrados.length / 2)
                          .map((manga) => (
                              <div className="card" key={manga._id}>
                                  <Link
                                      to={`/manga/${manga._id}`}
                                      key={manga._id}
                                  >
                                      <img
                                          className="imgCard"
                                          src={manga.photo}
                                          alt="manga"
                                      />
                                  </Link>
                                  <p className="titleManga">{manga.title}</p>
                              </div>
                          ))}
            </div>
        </>
    )
}

export default AuthorCards
