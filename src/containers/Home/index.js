import React from 'react'

import HomeLogo from '../../assets/home-logo.png'
import CarouselCategories from '../../components/CarouselCategories'
import CarouselOffers from '../../components/CarouselOffers'
import { Container, LogoImg } from './styles'

function Home() {
  return (
    <Container>
      <LogoImg src={HomeLogo} alt="home-logo" />
      <CarouselCategories />
      <CarouselOffers />
    </Container>
  )
}

export default Home
