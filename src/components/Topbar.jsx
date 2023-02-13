import React from 'react';
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import logo from '../assets/Screenshot_2023-02-13_at_22.18.46-removebg-preview.png';

function Topbar() {
  return (
    <div className='flex justify-between items-center px-4 py-2'>
    <div className=''>
      <img src={logo} alt="" className='h-12' />
    </div>
    <div className='flex'>
      <div className='hidden md:flex items-center px-6'>
        <AiOutlineClockCircle size={20} className='mr-2 text-[var(--primary-dark)]' />
        <p className='text-sm text-gray-700'>10AM - 10PM</p>
      </div>
      <div className='hidden md:flex items-center px-6'>
        <AiFillPhone size={20} className='mr-2 text-[var(--primary-dark)]' />
        <p className='text-sm text-gray-700'>01-23456789</p>
      </div>
      <button>Booking</button>
    </div>
  </div>
  )
}

export default Topbar