import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import { ModeToggleButton } from '@/components/ModeToggleButton';
import Skills from '@/components/Skills';
import Testimonials from '@/components/Testimonials';
import Work from '@/components/Work';
import { Button } from '@/components/ui/button'
import React from 'react'

const HomePage = () => {
  return (
    <div className='overflow-hidden'>
      <Header/>
      <HeroSection/>
      <Testimonials/>
      <Skills/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default HomePage;