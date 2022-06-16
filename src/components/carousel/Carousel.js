import './carousel.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

import { TbVaccine } from 'react-icons/tb'
import { RiLungsFill } from 'react-icons/ri'
import { GiStomach, GiDogBowl } from 'react-icons/gi'
import { ImHeartBroken } from 'react-icons/im'
import { FaHeadSideVirus, FaCarCrash } from 'react-icons/fa'
import { MdOutlineCoronavirus } from 'react-icons/md'
import { BiStore } from 'react-icons/bi'

const Carousel = () => {
  return (
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
            <RiLungsFill />
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
  )
}

export default Carousel
