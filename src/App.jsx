import './App.css'
import {Route , Routes} from "react-router-dom"
import Home from './Components/Home'
import Profile from './Components/Profile'
import Login from './Components/Login'
import About from './Components/About'
import Navbar from './Components/Navbar'

function App() {


  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/profile' element={<Profile />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/about' element={<About />}/>
    </Routes>
    </>
  )
}

export default App
