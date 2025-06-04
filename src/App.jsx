import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Welcome from './components/welcome'
import SignUp from './components/signUp'
import Login from './components/login'
import Profile from './components/profile'

import './App.css';

const App = () => {
    return (
        <Router basename='/Pop-X'>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
    )
}

export default App;