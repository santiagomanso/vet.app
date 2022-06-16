import './pets.css'
import { FaDog, FaCat } from 'react-icons/fa'
import kira from '../../assets/petsProfiles/kira.jpg'
import teto from '../../assets/petsProfiles/teto.jpg'
import waffles from '../../assets/petsProfiles/waffles.jpg'
import pancho from '../../assets/petsProfiles/pancho.jpg'
import dog from '../../assets/petsProfiles/dog.jpg'
import german from '../../assets/petsProfiles/german.jpg'
import { GiSittingDog, GiTurtle, GiEgyptianBird } from 'react-icons/gi'
import { TiDeleteOutline } from 'react-icons/ti'
import { CgDetailsLess } from 'react-icons/cg'
import HomeWelcome from '../../components/homeWelcome/HomeWelcome'

const PetsScreen = () => {
  return (
    <>
      <HomeWelcome title='My Pets' btnTxt='add new pet' />

      <div className='component__container'>
        <div class='container_grid_pets'>
          <div class='area1'>
            <div className='card'>
              <div className='card__content'>
                <div className='pet__img-div'>
                  <img src={kira} alt='Dog' className='pet__img-img' />
                </div>
                <div className='pet__img-icons'>
                  <FaCat className='pet__name-icon' />
                  <TiDeleteOutline className='pet__delete-icon' />
                </div>
                <div className='pet__name-div'>
                  <CgDetailsLess className='pet__name-icon' />
                  <span>KIRA</span> <CgDetailsLess className='pet__name-icon' />
                </div>
              </div>
            </div>
          </div>
          <div class='area2'>
            <div className='card'>
              <div className='card__content'>
                <div className='pet__img-div'>
                  <img src={german} alt='Dog' className='pet__img-img' />
                </div>
                <div className='pet__img-icons'>
                  <GiSittingDog className='pet__name-icon' />
                  <TiDeleteOutline className='pet__delete-icon' />
                </div>
                <div className='pet__name-div'>
                  <CgDetailsLess className='pet__name-icon' />
                  <span>JASON</span>{' '}
                  <CgDetailsLess className='pet__name-icon' />
                </div>
              </div>
            </div>
          </div>
          <div class='area3'>
            <div className='card'>
              <div className='card__content'>
                <div className='pet__img-div'>
                  <img src={waffles} alt='Dog' className='pet__img-img' />
                </div>
                <div className='pet__img-icons'>
                  <FaCat className='pet__name-icon' />
                  <TiDeleteOutline className='pet__delete-icon' />
                </div>
                <div className='pet__name-div'>
                  <CgDetailsLess className='pet__name-icon' />
                  <span>WAFFLES</span>
                  <CgDetailsLess className='pet__name-icon' />
                </div>
              </div>
            </div>
          </div>
          <div class='area4'>
            <div className='card'>
              <div className='card__content'>
                <div className='pet__img-div'>
                  <img src={dog} alt='Dog' className='pet__img-img' />
                </div>
                <div className='pet__img-icons'>
                  <GiSittingDog className='pet__name-icon' />
                  <TiDeleteOutline className='pet__delete-icon' />
                </div>
                <div className='pet__name-div'>
                  <CgDetailsLess className='pet__name-icon' />
                  <span>FIRULAIS</span>
                  <CgDetailsLess className='pet__name-icon' />
                </div>
              </div>
            </div>
          </div>
          <div class='area5'>
            <div className='card'>
              <div className='card__content'>
                <div className='pet__img-div'>
                  <img src={teto} alt='Dog' className='pet__img-img' />
                </div>
                <div className='pet__img-icons'>
                  <GiTurtle className='pet__name-icon' />
                  <TiDeleteOutline className='pet__delete-icon' />
                </div>
                <div className='pet__name-div'>
                  <CgDetailsLess className='pet__name-icon' />
                  <span>TETO</span> <CgDetailsLess className='pet__name-icon' />
                </div>
              </div>
            </div>
          </div>
          <div class='area6'>
            <div className='card'>
              <div className='card__content'>
                <div className='pet__img-div'>
                  <img src={pancho} alt='Dog' className='pet__img-img' />
                </div>
                <div className='pet__img-icons'>
                  <GiEgyptianBird className='pet__name-icon' />
                  <TiDeleteOutline className='pet__delete-icon' />
                </div>
                <div className='pet__name-div'>
                  <CgDetailsLess className='pet__name-icon' />
                  <span>pancho</span>{' '}
                  <CgDetailsLess className='pet__name-icon' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PetsScreen
