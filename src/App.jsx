import './App.css'
import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import HeroSection from './components/HeroSection'


function App() {

  return (
    <>
    <div>
    <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
      <Navbar/>
      <HeroSection/>
      <Aboutme/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
