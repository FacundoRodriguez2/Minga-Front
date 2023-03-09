import React, { useEffect } from "react"

import Cards from "../../components/Author/Cards/cards"
import Header from "../../components/Author/Header/header"
import Main from "../../components/Author/Main/AuthorMain"
import Navbar from "../../components/Navbar/Navbar"
// import { useNavigate } from "react-router"

const Author = () => {
    // const navigate = useNavigate()
    // useEffect(() => {
    //     let token = localStorage.getItem("token")
    //     if (!token || token === undefined) {
    //         navigate("/")
    //     }
    // })

    return (
        <>
            <Navbar />
            <Header />
            <Main>
                <Cards />
            </Main>
        </>
    )
}

export default Author
