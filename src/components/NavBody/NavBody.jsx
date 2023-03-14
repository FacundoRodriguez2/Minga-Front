import React from 'react'
import './navBody.css'
import { Link as Anchor } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function NavBody({handleRender}) {
    let token = localStorage.getItem('token')
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
    let url = 'http://localhost:8080/api/auth/signout'

    async function handleLogout(){
        try{
            await axios.post(url,"",headers)
            Swal.fire("Logout Successful")
            localStorage.setItem('token', "")
            localStorage.setItem('user', "")
            handleRender()
          }catch(error){
            Swal.fire(error)
        } 
    }

    return (
        <div className='navBody'>
            <Anchor to='/'>Home</Anchor>
            { token ? <Anchor to='/author-form'>New Author</Anchor> : "" }
            { token ? <Anchor to='/company-form'>New Company</Anchor> : "" }
            { token ? <Anchor to='/mangas/1'>Mangas</Anchor> : "" }
            { token ? <Anchor to='/manga-form'>My Mangas</Anchor> : "" }
            { token ? <Anchor onClick={handleLogout}>Logout</Anchor>: "" }
            { token ? "" : <Anchor to='/register' onClick={handleRender}>Register</Anchor> }
            { token ? "" : <Anchor to='/signin' onClick={handleRender}>Login</Anchor> }
        </div>
    )
}
