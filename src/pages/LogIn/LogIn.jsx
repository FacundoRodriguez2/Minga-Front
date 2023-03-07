import React from 'react'
import './LogIn.css'
import RegisterFieldset from '../../components/registerfieldset/registerfieldset'
import email from '../../images/@.svg'
import lock from '../../images/lock1.svg'
import Input from '../../components/input/input'
import googleLogo from '../../images/Google.svg'
import LogInimg from '../../images/LogIn.png'
import { Link as Anchor } from 'react-router-dom'


export default function LogIn() {
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
          <RegisterFieldset legendText='Email' inputType='email' inputName='mail' inputId='mail' imgSrc={email} imgAlt='@' />
          <RegisterFieldset legendText='Password' inputType='password' inputName='password' inputId='password' imgSrc={lock} imgAlt='lock' />
          
          <Input className='sign-up' type='submit' value="Sign up" />
          <a href='#' className='sign-in-google'> <img src={googleLogo} alt="googleLogo" /><span>Sign in with Google</span></a>
          <p>Already have an account? <Anchor to='/register' className='link'>Sign up</Anchor></p>
          <p>Go back to <Anchor to='/' className='link'>home page</Anchor></p>
        </div>
      </div>

    </section>
  )
}
