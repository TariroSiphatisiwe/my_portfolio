import React from 'react'
import './portfolio.css'
import Card from './card'
import AOS from 'aos'
import 'aos/dist/aos.css' 
import img1 from './pngs/png1.png'
import img2 from './pngs/png2.png'
import img3 from './pngs/png3.png'

AOS.init();
const Portfolio=()=>{
    return(
        <div className='portfolio-sec'>
            <h1 className ='three' data-aos="fade-in">03</h1>
            <p className='heading' data-aos="fade-in">Portfolio</p>
            <Card title={'QR Code Generator'} png={img1} text={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'} codeLink={'hhh'} demoLink={'hhh'}/>
            <Card title={'My Emotions'} png={img2} text={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'} codeLink={'hhh'} demoLink={'hhh'}/>
            <Card title={'Whats App Bot'} png={img3} text={'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'} codeLink={'hhh'} demoLink={'hhh'}/>

        </div>
    )
}

export default Portfolio