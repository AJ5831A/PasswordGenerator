import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex gap-4 p-4 bg-black" >
        <Link to="/" className='mx-3 text-white'>Home</Link>
        <Link to='/profile' className='mx-3 text-white'>Profile</Link>
        <Link to='/login' className='mx-3 text-white'>Login</Link>
        <Link to='/about' className='mx-3 text-white'>About</Link>
    </div>
  )
}

export default Navbar