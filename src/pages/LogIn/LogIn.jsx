import React from 'react'
import './LogIn.css'
import LoginForm from '../../components/LoginForm/LoginForm'
<<<<<<< HEAD
import RegisterFieldset from '../../components/registerfieldset/registerfieldset'
import email from '../../images/@.svg'
import lock from '../../images/lock1.svg'
import Input from '../../components/input/input'
import googleLogo from '../../images/Google.svg'
=======
>>>>>>> 8c2de2cce36e10fb0699175c5c43cf4d317f8837
import LogInimg from '../../images/LogIn.png'


<<<<<<< HEAD
export default function LogIn({renderRegister, handleRender}) {
=======
export default function LogIn({renderRegister}) {
>>>>>>> 8c2de2cce36e10fb0699175c5c43cf4d317f8837
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

