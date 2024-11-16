import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='w-1/2 justify-between mx-auto flex py-8'>
        <Link to="/" className='font-bold'>HUMBLE.</Link>
        <Link to="/" className=''>Projects</Link>
        <Link to="/create" className=''>Create</Link>
        <Link to="/login" className=''>Login</Link>


    </div>
  )
}

export default Navbar