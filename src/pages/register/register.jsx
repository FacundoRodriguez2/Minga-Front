import React from 'react'
import './register.css'
import Welcome from '../../components/welcome/welcome'
import RegisterForm from '../../components/registerform/registerform'
import Vilage from '../../images/vilage.svg'

export default function Register() {
    

    return (
        <div className='register'>
            <div>
                <Welcome />
                <RegisterForm />
            </div>
            <div className='register-img'>
                <img src={Vilage} alt="tokyo-village" />
            </div>
        </div>
    )
}
