import './navigation.css'
import { GoHome } from 'react-icons/go'
import { AiOutlineFileSearch } from 'react-icons/ai'
import { FaRegUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
  const navigate = useNavigate()

  return (
    <div className='app__navigation'>
      <div className='app__navigation-wraper' onClick={() => navigate('/')}>
        <div className='app__navigation-icon'>
          <GoHome />
        </div>
        <div>
          <p className='app__navigation-p'>HOME</p>
        </div>
      </div>

      <div
        className='app__navigation-wraper'
        onClick={() => navigate('/appointments')}
      >
        <div className='app__navigation-icon'>
          <AiOutlineFileSearch />
        </div>
        <div>
          <p className='app__navigation-p'>APPOINTMENTS</p>
        </div>
      </div>

      <div
        className='app__navigation-wraper'
        onClick={() => navigate('/profile')}
      >
        <div className='app__navigation-icon'>
          <FaRegUserCircle />
        </div>
        <div>
          <p className='app__navigation-p'>PROFILE</p>
        </div>
      </div>
    </div>
  )
}

export default Navigation
