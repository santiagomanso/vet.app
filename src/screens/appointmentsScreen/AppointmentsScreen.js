import GridAppointment from '../../components/gridAppointment/GridAppointment'
import HomeWelcome from '../../components/homeWelcome/HomeWelcome'
import manso from '../../assets/doctorsProfiles/manso.jpg'
import juancho from '../../assets/doctorsProfiles/juancho.jpg'
import gonza from '../../assets/doctorsProfiles/gonza.jpg'
import pancho from '../../assets/petsProfiles/pancho.jpg'
import kai from '../../assets/petsProfiles/kai.jpeg'
import kenai from '../../assets/petsProfiles/kenai.jpeg'
import './appointments.css'

const AppointmentsScreen = () => {
  return (
    <section>
      <HomeWelcome titulo={'Your Appointments'} />
      <GridAppointment
        date='05.04.2022'
        doctorName='Dr. Santiago Manso Castro'
        doctorImg={manso}
        doctorLocation='stephanstr 60, Moabit Berlin'
        petImg={pancho}
        petName='pancho'
        reason='Castration'
      />

      <GridAppointment
        date='23.10.2023'
        doctorName='Dr. Juan Cruz Martinez'
        doctorImg={juancho}
        doctorLocation='Hospital Julio C. Perrando'
        petImg={kai}
        reason='Vaccination'
      />
      <GridAppointment
        date='16.06.2022'
        doctorName='Dr. Gonzalo Bestoso'
        doctorImg={gonza}
        doctorLocation='Policonsultorio POOBRE, Corrientes Argentina'
        petImg={kenai}
        reason='Balanced Diet follow-up'
      />
    </section>
  )
}

export default AppointmentsScreen
