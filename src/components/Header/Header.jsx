import React from "react"
<<<<<<< HEAD
import Navbar from "../Navbar/Navbar"
=======
import Navbar from '../Navbar/Navbar'
>>>>>>> 1060844fa2a8d092d6d05ea115c85d92ec11971d
import Logo from "../../images/Logo.png"
import Open from "../open/Open"
import "./Header.css"
import { useState } from "react"

export default function Header(){
    const[render,setRender]=useState(false)
    
    function handleRender(){
        setRender(!render)
    }

    return(
        <header>
            <Navbar onClick={handleRender}/>
            {render ? <Open handleRender={handleRender} /> : ""}
            <img id="logo" src={Logo} alt="Logo"/>
        </header>
        
    )
}
