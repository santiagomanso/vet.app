import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AppointmentsScreen from './screens/appointmentsScreen/AppointmentsScreen'
import DoctorAppointment from './screens/appointmentsScreen/DoctorAppointment'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/appointments' element={<AppointmentsScreen />} />
        <Route path='/appointments/doctor' element={<DoctorAppointment />} />
      </Routes>
    </Router>
  )
}

export default App
