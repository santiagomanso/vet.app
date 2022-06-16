import React from 'react'
import HomeWelcome from '../../components/homeWelcome/HomeWelcome'
import Treatments from '../../components/treatments/Treatments'
import Carousel from '../../components/carousel/Carousel'
import Services from '../../components/services/Services'

const HomeScreen = () => {
  return (
    <>
      <HomeWelcome
        title={'Hello Mrs. Sofia Guardia'}
        subtitle={'How can we help your pets today?'}
        btnTxt='schedule a new appointment'
      />
      <Treatments />
      <Carousel />
      <Services />
    </>
  )
}

export default HomeScreen
