import React from 'react'
import email from '../../images/@.svg'
import lock from '../../images/lock1.svg'
import RegisterFieldset from '../registerfieldset/registerfieldset'
import Input from '../input/input'
import googleLogo from '../../images/Google.svg'
import { Link as Anchor } from 'react-router-dom'
import { useRef } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function LoginForm({ renderRegister }) {
  let dataForm = useRef()

  async function handleSubmit(e) {
    e.preventDefault()

    let formInputs = []

    Object.values(dataForm.current).forEach(e => {
      if (e.name) {
        formInputs.push(e)
      }
    })

    let data = {
      [formInputs[0].name]: formInputs[0].value,
      [formInputs[1].name]: formInputs[1].value,
    }

    let url = 'http://localhost:8080/api/auth/signin'
    try {
      await axios.post(url, data)
        .then(res => {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('user', JSON.stringify({
            name: res.data.user.name,
            mail: res.data.user.mail,
            photo: res.data.user.photo,
          }))
          setInterval(() => window.location.href = '/', 1000)
        })
      Swal.fire("Login Successful")
      dataForm.current.reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit} ref={dataForm}>
      <RegisterFieldset legendText='Email' inputType='email' inputName='mail' inputId='mail' imgSrc={email} imgAlt='@' />
      <RegisterFieldset id='field-password' legendText='Password' inputType='password' inputName='password' inputId='password' imgSrc={lock} imgAlt='lock' />

      <Input className='sign-up' type='submit' value="Sign up" />
      <a href='#' className='sign-in-google'> <img src={googleLogo} alt="googleLogo" /><span>Sign in with Google</span></a>
      <p>You don´t have an account yet? <Anchor onClick={renderRegister} className='link'>Sign Up</Anchor></p>
      <p>Go back to <Anchor to='/' className='link'>home page</Anchor></p>
    </form>
  )
}
