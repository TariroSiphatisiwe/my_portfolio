import React from 'react'
import './portfolio.css'
import AOS from 'aos'
import 'aos/dist/aos.css' 

AOS.init();
const Portfolio=()=>{
    return(
        <div className='portfolio-sec'>
            <h1 className ='three' data-aos="fade-in">03</h1>
            <p className='heading' data-aos="fade-in">Portfolio</p>
        </div>
    )
}

export default Portfolio