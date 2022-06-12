import React from 'react'
import './homeScreen.css'
import { BiMessage, BiStore } from 'react-icons/bi'
import { BsCardText } from 'react-icons/bs'
import {
  AiOutlineBell,
  AiOutlineMedicineBox,
  AiFillFolderOpen,
  AiOutlineFileSearch,
} from 'react-icons/ai'
import { IoMdPaw } from 'react-icons/io'
import {
  FaHeadSideVirus,
  FaCarCrash,
  FaTemperatureHigh,
  FaRegUserCircle,
} from 'react-icons/fa'
import { MdOutlineCoronavirus, MdKeyboardArrowRight } from 'react-icons/md'
import { RiHospitalLine, RiLungsFill } from 'react-icons/ri'
import { GiStomach, GiDogBowl } from 'react-icons/gi'
import { TbVaccine } from 'react-icons/tb'
import { GoHome } from 'react-icons/go'
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

        <div className='services_list'>
          <h2>Our services for your pets</h2>
          <div className='row services_list-wrapper'>
            <ul>
              <li>
                <div className='services__list-container'>
                  <div>
                    <div className='services__list-icon'>
                      <RiHospitalLine />
                    </div>
                    <p>Schedule doctor appointment</p>
                  </div>
                  <MdKeyboardArrowRight />
                </div>
              </li>

              <li>
                <div className='services__list-container'>
                  <div>
                    <div className='services__list-icon'>
                      <BsCardText />
                    </div>
                    <p>See your pets prescriptions</p>
                  </div>
                  <MdKeyboardArrowRight />
                </div>
              </li>

              <li>
                <div className='services__list-container'>
                  <div>
                    <div className='services__list-icon'>
                      <IoMdPaw />
                    </div>
                    <p>View your pets</p>
                  </div>
                  <MdKeyboardArrowRight />
                </div>
              </li>

              <li>
                <div className='services__list-container'>
                  <div>
                    <div className='services__list-icon'>
                      <AiOutlineMedicineBox />
                    </div>
                    <p>View doctors</p>
                  </div>
                  <MdKeyboardArrowRight />
                </div>
              </li>

              <li>
                <div className='services__list-container'>
                  <div>
                    <div className='services__list-icon'>
                      <AiFillFolderOpen />
                    </div>
                    <p>Your pet's past treatments</p>
                  </div>
                  <MdKeyboardArrowRight />
                </div>
              </li>

              <li>
                <div className='services__list-container'>
                  <div>
                    <div className='services__list-icon'>
                      <RiLungsFill />
                    </div>
                    <p>Respiratory problems</p>
                  </div>
                  <MdKeyboardArrowRight />
                </div>
              </li>
              <li>
                <div className='services__list-container'>
                  <div>
                    <div className='services__list-icon'>
                      <FaTemperatureHigh />
                    </div>
                    <p>Fieber</p>
                  </div>
                  <MdKeyboardArrowRight />
                </div>
              </li>

              <li>
                <div className='services__list-container'>
                  <div>
                    <div className='services__list-icon'>
                      <GiStomach />
                    </div>
                    <p>Stomache appointment</p>
                  </div>
                  <MdKeyboardArrowRight />
                </div>
              </li>

              <li>
                <div className='services__list-container'>
                  <div>
                    <div className='services__list-icon'>
                      <BiStore />
                    </div>
                    <p>Schedule doctor appointment</p>
                  </div>
                  <MdKeyboardArrowRight />
                </div>
              </li>
              <li>
                <div className='services__list-container'>
                  <div>
                    <div className='services__list-icon'>
                      <BiStore />
                    </div>
                    <p>Schedule doctor appointment</p>
                  </div>
                  <MdKeyboardArrowRight />
                </div>
              </li>

              <li>
                <div className='services__list-container'>
                  <div>
                    <BiStore />
                    <p>Schedule doctor appointment</p>
                  </div>
                  <MdKeyboardArrowRight />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className='app__navigation'>
          <div className='app__navigation-wraper'>
            <div className='app__navigation-icon'>
              <GoHome />
            </div>
            <div>
              <p className='app__navigation-p'>HOME</p>
            </div>
          </div>
          <div className='app__navigation-wraper'>
            <div className='app__navigation-icon'>
              <AiOutlineFileSearch />
            </div>
            <div>
              <p className='app__navigation-p'>APPOINTMENTS</p>
            </div>
          </div>
          <div className='app__navigation-wraper'>
            <div className='app__navigation-icon'>
              <FaRegUserCircle />
            </div>
            <div>
              <p className='app__navigation-p'>PROFILE</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomeScreen
