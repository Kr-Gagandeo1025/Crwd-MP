import React from 'react'
import HeroSection from "../components/fragments/HeroSection"
import NavBar from "../components/Navbar"
import About from "../components/fragments/About"
import Supportus from "../components/fragments/Supportus"

const page = () => {
  return (
    <div className='transition-all duration-500 ease-in-out scroll-smooth'>
      <NavBar/>
      <HeroSection/>
      <div className='h-fit w-screen mt-[100vh] z-10 bg-white rounded-3xl absolute'>
        <About/>
        <Supportus/>
      </div>
    </div>
  )
}

export default page
