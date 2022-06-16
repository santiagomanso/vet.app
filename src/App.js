import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Container from './components/container/Container'
import Header from './components/header/Header'

import Navigation from './components/navigation/Navigation'
import AppointmentsScreen from './screens/appointmentsScreen/AppointmentsScreen'
import DoctorAppointment from './screens/appointmentsScreen/DoctorAppointment'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'
import PetsScreen from './screens/petsScreen/PetsScreen'
import PrescriptionScreen from './screens/prescriptionsScreen/PrescriptionScreen'

function App() {
  return (
    <Router>
      <Container>
        <Header title='Home' />
        <Navigation />
        <Routes>
          <Route path='/' element={<HomeScreen />} exact />
          <Route path='/prescriptions' element={<PrescriptionScreen />} />
          <Route path='/pets' element={<PetsScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/appointments' element={<AppointmentsScreen />} />
          <Route path='/appointments/doctor' element={<DoctorAppointment />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
