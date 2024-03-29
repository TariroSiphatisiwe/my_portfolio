import './App.css'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import CustomCursor from 'custom-cursor-react'
import Introduction from './components/Introduction'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import 'custom-cursor-react/dist/index.css'
import './components/HeroSec.css'


const App = ()=> {
  return (
    <div className='app-container'>
      <Navigation/>
      <HeroSection/>
      <CustomCursor
      targets={['.circle-png','.intro-sec2','.arrow1-png','.button','.two','.one','.three','.but']}
      customClass='custom-cursor'
      dimensions={50}
      fill='#E7ABAB'
      smoothness={{
        movement: 0.2,
        scale: 0.1,
        opacity: 0.2,
      }}
      targetOpacity={0.5}
    />
    <Introduction/>
    <Portfolio/>
    <Footer/>
    </div>
  )
}

export default App
