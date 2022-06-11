import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AppointmentsScreen from './screens/appointmentsScreen/AppointmentsScreen'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/appointments' element={<AppointmentsScreen />} />
      </Routes>
    </Router>
  )
}

export default App
