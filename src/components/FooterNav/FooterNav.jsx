import React from 'react'
import './footerNav.css'
import logo from '../../images/Logo.png'
import facebook from '../../images/Facebook.svg'
import twitter from '../../images/Twitter.svg'
import vimeo from '../../images/Vimeo.svg'
import youtube from '../../images/Youtube.svg'

export default function FooterNav() {
    return (
        <nav id='navfooter' >
            <div class='pages'>
                <a>Home</a>
                <a>Mangas</a>
            </div>
            <div className='logo-container'>
                <img src={logo} alt="logo" />
                
            </div>
            <div class='social-container'>
                <div class='social'>
                    <a href="#"><img src={facebook} alt="" /></a>
                    <a href="#"><img src={twitter} alt="" /></a>
                    <a href="#"><img src={vimeo} alt="" /></a>
                    <a href="#"> <img src={youtube} alt="" /></a>
                </div>
                <a href='#' className='donate'>Donate</a>
            </div>
        </nav>
    )
}