import React from 'react'
import './HeroSec.css'
import circle from './circle.svg'
import arrow1 from './pngs/arrow1.svg'
import arrow2 from './pngs/arrow2.svg'
const HeroSection = () => {
    let brac1 = "{"
    let brac2 = "}"
    return (

        <div className='hero-sec-div'>

            <img src={circle} alt='circle png' className='png circle-png' />
            <div className='intro-sec-div'><p className='intro-sec'>Welcome to the play ground of Tariro Shumbayaonda </p></div>
            <p className='intro-sec2'> Heyyyy there, I am Tariro Shumbayaonda. A full-stack Software engineer.This is my corner of the internet. Welcome! </p>
            <img src={arrow1} alt="arrow png" className="png arrows arrow1-png"/>
            <img src={arrow2} alt="arrow png" className="png arrows arrow2-png"/>
            <p className='brac brac1'>{brac1}</p>
            <p className='brac brac2'>{brac2}</p>
        </div>
    )
}

export default HeroSection