import React from 'react'
import flower from './pngs/flower.png'
import './nav_styles.css'
import {AiOutlineMenu} from "react-icons/ai"

const Navigation = () => {
    return (
        <nav className='nav_bar'>
            <h2 className='logo'>Tari</h2>
            <img src={flower} alt='flower_canva'/>
        </nav>

    )
}

export default Navigation