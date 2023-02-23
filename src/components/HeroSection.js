import React from 'react'
import './HeroSec.css'
import circle from './circle.svg'
import arrow1 from './pngs/arrow1.svg'
import arrow2 from './pngs/arrow2.svg'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import AOS from 'aos'
import 'aos/dist/aos.css' 

AOS.init();

const HeroSection = () => {

    return (

        <div className='hero-sec-div'>
            <h1 className='one'>01</h1>
            <RoughNotationGroup show={true}>
            <div className='intro-sec-div' ><p className='intro-sec'>  <RoughNotation className='rn' type="box"  animate={true} color="#E7ABAB" order="2">Welcome</RoughNotation>  <RoughNotation className='rn' type="circle"  animate={true} color="#000000" order="2">to</RoughNotation> my play <span className='intro-span'>ground.</span></p></div>
            <p className='intro-sec2'>
                <RoughNotation type="box" color="#000000" order="1" padding={2}>
                    Hey there! I'm Tari, A full-stack Software Developer.And this is my corner of the internet. 
                </RoughNotation>
            </p>
            <img src={arrow2} alt="arrow png" className="png arrows arrow2-png" />
            </RoughNotationGroup>
        </div>



    )
}

export default HeroSection