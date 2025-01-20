import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Aboutme from './components/Aboutme'
import Skill from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'


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
      <Hero/>
      <Aboutme/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
