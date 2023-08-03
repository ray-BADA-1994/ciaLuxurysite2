import React from 'react'
import BookACar from '../BookACar'
import Footer from '../Footer'
import HeroSection from '../HeroSection'
import HeroSection2 from '../HeroSection2'
import Testomonial from '../Testomonial'
import MemberCard from './MemberCard'

const TeamLayout = () => {
  return (
    <div>
      <HeroSection2 title={'OUR TEAM'} section={'Our Team'}/>
      <MemberCard />
      <Testomonial />
      <BookACar />
    </div>
  )
}

export default TeamLayout