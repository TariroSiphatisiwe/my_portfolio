import React from 'react'
import './portfolio.css'

const Card =({title,png,text,codeLink,demoLink})=>{
    return(
        <div className='card'>
         <img alt='card' src={png} className='portfolio-pngs'></img>
         <h1 className='card-title'>{title}</h1>
         <p className='p-text'>{text}</p>
         <a href={codeLink}><button className='but bn3'>Source Code</button></a>
         <a href={demoLink}><button className='but bn3'>Demo</button></a>
        </div>
    )
}

export default Card