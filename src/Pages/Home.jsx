import React from 'react'
import BookACar from '../components/BookACar'
import HeroSection from '../components/HeroSection'
import SectionAboutUs from '../components/SectionAboutUs'
import SectionSpecial from '../components/SectionSpecial'
import Testomonial from '../components/Testomonial'

const Home = () => {
  return (
    <>
      <HeroSection />
      <SectionSpecial />
      <SectionAboutUs />
      <Testomonial/>
      <BookACar />
    </>
  )
}

export default Home