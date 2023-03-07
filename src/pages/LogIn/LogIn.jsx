import React from 'react'
import './LogIn.css'
import LoginForm from '../../components/LoginForm/LoginForm'
import RegisterFieldset from '../../components/registerfieldset/registerfieldset'
import email from '../../images/@.svg'
import lock from '../../images/lock1.svg'
import Input from '../../components/input/input'
import googleLogo from '../../images/Google.svg'
import LogInimg from '../../images/LogIn.png'
import { Link as Anchor } from 'react-router-dom'


export default function LogIn({renderRegister, handleRender}) {
  return (
    <section className='log-in'>
      <div className='img-section'>
        <img src={LogInimg} alt="image-login" />
      </div>

      <div className='form-section'>
        <div className='welcome-section'>
          <h2>Welcome <span>Back</span>!</h2>
          <p>Discover manga, manhua and manhwa, track your progress, have fun, read manga</p>
        </div>

        <div className='form'>
          <LoginForm renderRegister={renderRegister} />
        </div>
      </div>

    </section>
  )
}
