import React from 'react'
import './header.css'
import CTA from './CTA'
import Saarthak from '../../assets/Saarthak.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Saarthak Tuli</h1>
        <h5 className="text-light">IOS Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={Saarthak} alr='me' />
        </div>

        <a href='#contact' className='scroll__down'> Scroll Down</a>
      </div>
   </header>
  )
}

export default Header