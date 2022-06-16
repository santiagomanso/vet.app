import './services.css'

import { BsCardText } from 'react-icons/bs'
import { AiOutlineMedicineBox, AiFillFolderOpen } from 'react-icons/ai'
import { IoMdPaw } from 'react-icons/io'
import { FaTemperatureHigh } from 'react-icons/fa'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { RiHospitalLine, RiLungsFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { GiStomach } from 'react-icons/gi'
import { BiStore } from 'react-icons/bi'

const Services = () => {
  return (
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
                <p>
                  <Link to='/appointments/doctor'>
                    Schedule doctor appointment
                  </Link>
                </p>
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
                <p>
                  <Link to='/pets'>View your pets</Link>
                </p>
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
                <p>
                  <Link to='/prescriptions'>Pet's prescriptions</Link>
                </p>
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
                <Link to='/appointments/doctor'>Our doctors</Link>
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
                <Link to='/appointments/doctor'>Insurances</Link>
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
                <Link to='/appointments/doctor'>Respiratory problems</Link>
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
  )
}

export default Services
