import React from "react";
import Userimg from "../../images/profilepicture.svg"
import Goback from "../../images/goback.svg"
import { Link as Anchor, useParams } from 'react-router-dom'
import "./open.css"


export default function Open({onClick}){
    const { favourites } = useParams()
    return(
        <nav id="navopen">
            <div id="user">
                <div id="userinfo">
                    <img src={Userimg} alt="profile"/>
                    <div>
                       <span>Lucas Ezequiel Silva</span>
                        <p>lucasezequielsilva@gmail.com</p> 
                    </div>
                    

                </div>
                
                <div id="goback" onClick={onClick}>

                    <img src={Goback} alt="X" />
                </div>
            </div>
            <div id="pages">
            <Anchor id="current" to='/' className='active'>Home</Anchor>
            <Anchor className="page" to='/manga-form'>Mangas</Anchor>
            <Anchor className="page" to='/'>My mangas</Anchor>
            <Anchor className="page" to='/'>Favourites</Anchor>
            <Anchor className="page" to='/'>Logout</Anchor>
            </div>

        </nav>
    )
}