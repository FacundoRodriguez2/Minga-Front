import React from 'react'
import './navHeader.css'
import Goback from "../../images/goback.svg"
import axios from 'axios'
import { useEffect } from 'react'

export default function NavHeader({handleRender}) {
    let token = localStorage.getItem('token')
    
    if(!token){
        localStorage.setItem('user',JSON.stringify({
            name: "",
            mail: "",
            photo: ""
        }))
    }

    let user = JSON.parse(localStorage.getItem('user'))
    let name = user.name
    let mail = user.mail
    let photo = user.photo

    useEffect(() => {
        let url = `http://localhost:8080/api/auth/token`
        if (token) {
            let headers = {headers:{'Authorization':`Bearer ${token}`}}
            axios.post(url,null,headers)
        }
    })
    return (
        <div className='navHeader'>
            {
                token ? <div className='picAndText'>
                        <img className='profilePic' src={photo} alt='profile-picture' />
                        <div className='nameAndMail'>
                            <h2>{name} </h2>
                            <p> {mail} </p>
                        </div>
                        </div>
                        : ""
            }
            <div onClick={handleRender} className='closeBtn'>
                <img src={Goback} />
            </div>
        </div>
    )
}
