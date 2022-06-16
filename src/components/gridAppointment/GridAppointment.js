import './grid.css'
import { MdKeyboardArrowRight } from 'react-icons/md'

import { GoLocation } from 'react-icons/go'
import { FiEdit, FiEye } from 'react-icons/fi'
import { RiDeleteBack2Line } from 'react-icons/ri'

const GridAppointment = ({
  date,
  doctorName,
  doctorImg,
  doctorLocation,
  petImg,
  petName,
  reason,
}) => {
  return (
    <>
      <div class='container__grid component__container'>
        <div class='date'>{date}</div>
        <div class='doctor-img'>
          <div className='appointment__profile-div'>
            <img
              src={doctorImg}
              alt='doctor'
              className='appointment__profile-img'
            />
          </div>
        </div>
        <div class='name'>{doctorName}</div>
        <div class='location'>
          <div>
            <span>{doctorLocation}</span>
            <GoLocation className='icon-med ' />
          </div>
        </div>
        <div class='pet'>
          <div className='appointment__profile-div'>
            <img
              src={petImg}
              alt='doctor'
              className='appointment__profile-img'
            />
          </div>
        </div>
        <div class='reason'>{reason}</div>
        <div className='icon-see'>
          <FiEye className='icon-med margin-l-r-2 color-green' />
        </div>
        <div className='icon-edit'>
          <FiEdit className='icon-med margin-l-r-2 color-blue' />
        </div>
        <div className='icon-delete'>
          <RiDeleteBack2Line className='icon-med margin-l-r-2 color-red' />
        </div>
      </div>
      <div class='container__grid_responsive'>
        <div class='doctor-img'>
          <div className='appointment__profile-div'>
            <img
              src={doctorImg}
              alt='doctor'
              className='appointment__profile-img'
            />
          </div>
        </div>
        <div class='DrName'>{doctorName}</div>
        <div class='petImg'>
          <div className='appointment__profile-div'>
            <img
              src={petImg}
              alt='doctor'
              className='appointment__profile-img'
            />
          </div>
        </div>
        <div class='petName'>{petName}</div>
        <div class='reason'>{reason}</div>
        <div class='see'>
          <FiEye className='icon-med margin-l-r-2 color-green' />
        </div>
        <div class='edit'>
          <FiEdit className='icon-med margin-l-r-2 color-blue' />
        </div>
        <div class='delete'>
          <RiDeleteBack2Line className='icon-med margin-l-r-2 color-red' />
        </div>
        <div class='location'>
          <div>
            <span>{doctorLocation}</span>
            <GoLocation className='icon-med ' />
          </div>
        </div>
        <div class='date'>{date}</div>
      </div>
    </>
  )
}

export default GridAppointment
