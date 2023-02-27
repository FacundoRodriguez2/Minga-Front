import React from "react";
import Userimg from "../../images/profilepicture.svg"
import Goback from "../../images/goback.svg"

import "./open.css"


export default function Open({onClick}){
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
                <div id="current">
                    <a class="page" href="#">home</a>
                </div>
                <div class="page">
                    <a href="#">Mangas</a>
                </div>
                <div class="page">
                    <a href="#">MyMangas</a>
                </div>
                <div class="page">
                    <a href="#">Favourites</a>
                </div>
                <div class="page">
                    <a href="#">Logout</a>
                </div>
            </div>

        </nav>
    )
}