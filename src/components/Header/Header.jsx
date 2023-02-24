import React from "react";
import Navbar from "../Navbar/Navbar";
import Logo from "../../images/Logo.png"
import "./Header.css"
export default function Header(){
    return(
        <header>
            <Navbar/>
            <img id="logo" src={Logo} alt="Logo"/>
        </header>
        
    )
}