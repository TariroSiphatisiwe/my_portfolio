import React from 'react'
import './HeroSec.css'
import circle from './circle.svg'

const HeroSection = () => {

    return (

        <div className='hero-sec-div'>

            <img src={circle} alt='circle png' className='png circle-png' />
            <div className='intro-sec-div'><p className='intro-sec'>Welcome to the play ground of Tariro Shumbayaonda </p></div>
           <p className='intro-sec2'> Heyyyy there, I am Tariro Shumbayaonda. A full-stack Software engineer.This is my corner of the internet. Welcome! </p>

        </div>
    )
}

export default HeroSection