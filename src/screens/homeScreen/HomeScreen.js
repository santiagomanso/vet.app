import React from 'react'
import './homeScreen.css'
import { BiMessage, BiStore } from 'react-icons/bi'
import { AiOutlineBell } from 'react-icons/ai'
import { IoMdPaw } from 'react-icons/io'
import { FaHeadSideVirus, FaLungsVirus, FaCarCrash } from 'react-icons/fa'
import { MdOutlineCoronavirus } from 'react-icons/md'
import { GiStomach, GiDogBowl } from 'react-icons/gi'
import { TbVaccine } from 'react-icons/tb'
import { ImHeartBroken } from 'react-icons/im'

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
                <h3>Lungs </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider__container'>
              <div className='slider__icon'>
                <GiStomach />
              </div>
              <div className='slider__header'>
                <h3>Stomage </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider__container'>
              <div className='slider__icon'>
                <GiDogBowl />
              </div>
              <div className='slider__header'>
                <h3>Diet </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider__container'>
              <div className='slider__icon'>
                <ImHeartBroken />
              </div>
              <div className='slider__header'>
                <h3>Castration</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider__container'>
              <div className='slider__icon'>
                <FaCarCrash />
              </div>
              <div className='slider__header'>
                <h3>Vehicules </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider__container'>
              <div className='slider__icon'>
                <MdOutlineCoronavirus />
              </div>
              <div className='slider__header'>
                <h3>Viruses </h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider__container'>
              <div className='slider__icon'>
                <FaHeadSideVirus />
              </div>
              <div className='slider__header'>
                <h3>Behaviour</h3>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='slider__container'>
              <div className='slider__icon'>
                <BiStore />
              </div>
              <div className='slider__header'>
                <h3>Visit Store</h3>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className='services_list'>
          <h2>Quick view of our services</h2>
          <div className='row'>
            <ul>
              <li>Schedule doctor appointment</li>
              <li>Schedule doctor appointment</li>
              <li>Schedule doctor appointment</li>
              <li>Schedule doctor appointment</li>
              <li>Schedule doctor appointment</li>
              <li>Schedule doctor appointment</li>
              <li>Schedule doctor appointment</li>
              <li>Schedule doctor appointment</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeScreen
