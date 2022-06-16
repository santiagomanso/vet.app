import './appointments.css'
import { MdKeyboardArrowRight, MdOutlineCoronavirus } from 'react-icons/md'
import { FaTemperatureHigh, FaCarCrash, FaHeadSideVirus } from 'react-icons/fa'
import { GiStomach, GiDogBowl } from 'react-icons/gi'
import { RiLungsFill } from 'react-icons/ri'
import { TbVaccine } from 'react-icons/tb'
import { BiTennisBall, BiBrain, BiCubeAlt } from 'react-icons/bi'
import { ImHeartBroken } from 'react-icons/im'
import { VscBug } from 'react-icons/vsc'
import {} from 'react-icons/'
import {} from 'react-icons/'
const DoctorAppointment = () => {
  return (
    <>
      <div class='flex-container'>
        <div className='flex gap-2 m-l-2'>
          <div className='icon-div'>
            <BiCubeAlt className='icon-big' />
          </div>
          <h3>General consultation</h3>
        </div>
        <div className='flex-items'>
          <MdKeyboardArrowRight className='icon-med color-red' />
        </div>
      </div>
      <div class='flex-container'>
        <div className='flex gap-2 m-l-2'>
          <div className='icon-div'>
            <VscBug className='icon-big' />
          </div>
          <h3>Fleas</h3>
        </div>
        <div className='flex-items'>
          <MdKeyboardArrowRight className='icon-med color-red' />
        </div>
      </div>
      <div class='flex-container'>
        <div className='flex gap-2 m-l-2'>
          <div className='icon-div'>
            <TbVaccine className='icon-big' />
          </div>
          <h3>Vaccinations</h3>
        </div>
        <div className='flex-items'>
          <MdKeyboardArrowRight className='icon-med color-red' />
        </div>
      </div>
      <div class='flex-container'>
        <div className='flex gap-2 m-l-2'>
          <div className='icon-div'>
            <GiDogBowl className='icon-big' />
          </div>
          <h3>Diets</h3>
        </div>
        <div className='flex-items'>
          <MdKeyboardArrowRight className='icon-med color-red' />
        </div>
      </div>
      <div class='flex-container'>
        <div className='flex gap-2 m-l-2'>
          <div className='icon-div'>
            <BiTennisBall className='icon-big' />
          </div>
          <h3>Castration</h3>
        </div>
        <div className='flex-items'>
          <MdKeyboardArrowRight className='icon-med color-red' />
        </div>
      </div>
      <div class='flex-container'>
        <div className='flex gap-2 m-l-2'>
          <div className='icon-div'>
            <MdOutlineCoronavirus className='icon-big' />
          </div>
          <h3>Flu/Cold</h3>
        </div>
        <div className='flex-items'>
          <MdKeyboardArrowRight className='icon-med color-red' />
        </div>
      </div>
      <div class='flex-container'>
        <div className='flex gap-2 m-l-2'>
          <div className='icon-div'>
            <GiStomach className='icon-big' />
          </div>
          <h3>Stomache</h3>
        </div>
        <div className='flex-items'>
          <MdKeyboardArrowRight className='icon-med color-red' />
        </div>
      </div>
      <div class='flex-container'>
        <div className='flex gap-2 m-l-2'>
          <div className='icon-div'>
            <RiLungsFill className='icon-big' />
          </div>
          <h3>Respiratory problems</h3>
        </div>
        <div className='flex-items'>
          <MdKeyboardArrowRight className='icon-med color-red' />
        </div>
      </div>
      <div class='flex-container'>
        <div className='flex gap-2 m-l-2'>
          <div className='icon-div'>
            <FaTemperatureHigh className='icon-big' />
          </div>
          <h3>Fieber</h3>
        </div>
        <div className='flex-items'>
          <MdKeyboardArrowRight className='icon-med color-red' />
        </div>
      </div>
      <div class='flex-container'>
        <div className='flex gap-2 m-l-2'>
          <div className='icon-div'>
            <FaCarCrash className='icon-big' />
          </div>
          <h3>Vehicules accidents</h3>
        </div>
        <div className='flex-items'>
          <MdKeyboardArrowRight className='icon-med color-red' />
        </div>
      </div>
      <div class='flex-container'>
        <div className='flex gap-2 m-l-2'>
          <div className='icon-div'>
            <ImHeartBroken className='icon-big' />
          </div>
          <h3>Heart Conditions</h3>
        </div>
        <div className='flex-items'>
          <MdKeyboardArrowRight className='icon-med color-red' />
        </div>
      </div>
      <div class='flex-container'>
        <div className='flex gap-2 m-l-2'>
          <div className='icon-div'>
            <BiBrain className='icon-big' />
          </div>
          <h3>Neurological diseases</h3>
        </div>
        <div className='flex-items'>
          <MdKeyboardArrowRight className='icon-med color-red' />
        </div>
      </div>
    </>
  )
}

export default DoctorAppointment
