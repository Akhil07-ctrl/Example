import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Welcome from './components/welcome'
import SignUp from './components/signUp'
import Login from './components/login'
import Profile from './components/profile'
import UserHome from './components/userHome'

import './App.css';

const App = () => {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user-home" element={<UserHome />} />
          </Routes>
        </Router>
    )
}

export default App;