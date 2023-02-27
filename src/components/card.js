import React from 'react'
import './portfolio.css'
import img1 from './pngs/png2.png'
const Card =({title,png})=>{
    return(
        <div className='card'>
         <img src={img1} className='portfolio-pngs'></img>
        </div>
    )
}

export default Card