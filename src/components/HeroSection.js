import React from 'react'
import './HeroSec.css'
import circle from './circle.svg'
import arrow1 from './pngs/arrow1.svg'
import arrow2 from './pngs/arrow2.svg'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"

const HeroSection = () => {

    return (

        <div className='hero-sec-div'>
            <RoughNotationGroup show={true}>
            <img src={circle} alt='circle png' className='png circle-png' />
            <div className='intro-sec-div'><p className='intro-sec'>  <RoughNotation className='rn' type="highlight"  animate={true} color="#f542bf" order="2">Welcome</RoughNotation> to the play ground of Tariro Shumbayaonda </p></div>
            <p className='intro-sec2'>
                <RoughNotation type="box" color="#b39dc7" order="1" padding={2}>
                    Hey there! I'm Tari, A full-stack Software Developer.And this is my corner of the internet. 
                </RoughNotation>
            </p>
            <img src={arrow1} alt="arrow png" className="png arrows arrow1-png" />
            <img src={arrow2} alt="arrow png" className="png arrows arrow2-png" />
            </RoughNotationGroup>
        </div>



    )
}

export default HeroSection