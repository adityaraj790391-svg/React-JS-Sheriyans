import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex px-8 py-4 bg-cyan-500 justify-between'>
      <h2 className='text-xl font-bold'>Sheriyans</h2>
      <div className='flex gap-10'>
        <Link className='text-lg font-medium' to = '/'>Home</Link>
        <Link className='text-lg font-medium' to = '/about'>About</Link>
        <Link className='text-lg font-medium'to = '/product'>Product</Link>
        <Link className='text-lg font-medium'to = '/courses'>Courses</Link>


      </div>
    </div>
  )
}

export default Navbar
