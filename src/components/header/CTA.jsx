import React from 'react'
import CV from '../../assets/SaarthakTuli_CV.pdf'
import './header.css'

const CTA = () => {
  return (
      <div className='cta'>
          <a href={CV} download className='btn'>Download CV</a>
          <a href='#contact' className='btn btn-primary'>Contact</a>
          
    </div>
  )
}

export default CTA