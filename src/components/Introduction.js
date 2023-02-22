import React from 'react'
import './intro.css'
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
import AOS from 'aos'
import 'aos/dist/aos.css' 

AOS.init();

const Introduction = () => {
    return (
        <div className='intro-div'>
            <RoughNotationGroup show={true}>
            <p className='text text-par p1'  data-aos="fade" >
                I love building tools that are <RoughNotation className='rn' type="highlight"  animate={true} color="#fcf790" order="1">User Friendly,</RoughNotation> <RoughNotation className='rn' type="circle"  animate={true} color="#d98dba" order="2">simple</RoughNotation> and <RoughNotation className='rn' type="box"  animate={true} color="#a7d1d6" order="3">fun</RoughNotation>.
                I started my journey as an online programming student at Duke Univesity, I learnt the fundamentals of creating clean and useful algorithms. I then studied with Zero To Mastery Academy and I learnt to work with the <RoughNotation className='rn' type="highlight"  animate={true} color="#b0c77d" order="4">front-end and the backend. </RoughNotation>
                I got an oppotunity to work at a Data Driven company called Deep Analytics. Through my experience I worked on projects were I built tools with React.js for the front-end and sql,postgres and node.js for the backend. I was also involved in unit Testing for multiple projects. I have developed a working style that leans towards <RoughNotation className='rn' type="circle"  animate={true} color="#c77d91" order="5">flexibilty,</RoughNotation> <RoughNotation className='rn' type="box"  animate={true} color="#9e7dc7" order="6">collaboration</RoughNotation> and <RoughNotation className='rn' type="underline"  animate={true} color="#f59a40" order="7">reliability</RoughNotation>.     
            </p>
            <p className='text text-par2' data-aos="zoom-in-right">I am currently looking for a new Role as a Developer.</p>
            </RoughNotationGroup>
            <a href='https://www.linkedin.com/in/tariro-siphatisiwe-shumbayaonda-60913319a/'><button className='button bn1'>Linkden</button></a>
            <a href='https://github.com/TariroSiphatisiwe'><button className='button bn2'>Github</button></a>
        </div>

    )

}

export default Introduction