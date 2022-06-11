import React from 'react'
import './homeScreen.css'
import { BiMessage } from 'react-icons/bi'
import { AiOutlineBell } from 'react-icons/ai'
import { IoMdPaw } from 'react-icons/io'
import { FaRegFlushed, FaLungsVirus } from 'react-icons/fa'

import { GiStomach } from 'react-icons/gi'
import { TbVaccine } from 'react-icons/tb'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

const HomeScreen = () => {
  return (
    <div className='container'>
      <section id='about'>
        <div className='component__header'>
          <h5>Home</h5>
          <div className='component__header-icons'>
            <IoMdPaw />
            <BiMessage />
            <AiOutlineBell />
          </div>
        </div>

        <div className='home__welcome'>
          <div className='home__welcome-header'>
            <h2>Hi Mr. John Doe</h2>
            <h3>how can we help you today?</h3>
          </div>
          <button className='btn btn-primary'>Schedule new ppointment</button>
        </div>

        <div className='home__treatments'>
          <h2>Frecuent Treatments</h2>
          <h3>See all treatments</h3>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <SwiperSlide>
            <div className='slider__container'>
              <div className='slider__icon'>
                <TbVaccine />
              </div>
              <div className='slider__header'>
                <h3>Vaccinations</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider__container'>
              <div className='slider__icon'>
                <FaLungsVirus />
              </div>
              <div className='slider__header'>
                <h3>Respiratory problems</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider__container'>
              <div className='slider__icon'>
                <GiStomach />
              </div>
              <div className='slider__header'>
                <h3>Stomage aches</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider__container'>
              <div className='slider__icon'>
                <FaRegFlushed />
              </div>
              <div className='slider__header'>
                <h3>Slide 1</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider__container'>Slide 5</div>
          </SwiperSlide>
          <SwiperSlide>
            <div>Slide 6</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider__container'>Slide 7</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider__container'>Slide 8</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider__container'>Slide 9</div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  )
}

export default HomeScreen
