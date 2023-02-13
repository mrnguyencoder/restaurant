import React, { useState } from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBars,
} from 'react-icons/fa';

function NavBar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const links = [
    { href:'#home', label:'Home'},
    { href:'#menu', label:'Menu'},
    { href:'#reservation', label:'Reservation'},
    { href:'#gallery', label:'Gallery'},
    { href:'#testimonial', label:'Testimonial'},
  ]
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center z-10 text-white bg-gray-700/80'>
      <div className='hidden sm:flex space-x-4 pl-4'>
      {links.map((item) => (
        <a key={item.href}
           href={item.href}>
            {item.label}
        </a>
      ))}
      </div>
      <div className='flex justify-between'>
        <FaFacebookF className='mx-4' />
        <FaTwitter className='mx-4' />
        <FaInstagram className='mx-4' />
      </div>
    {/* Hamburger Icon */}
    <div onClick={handleNav} className='sm:hidden z-10'>
      <FaBars size={20} className='mr-4 cursor-pointer' />
    </div>
    {/* Mobile Menu */}
    <div
      onClick={handleNav}
      className={
        nav
          ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col'
          : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'
      }
    >
      <ul className='h-full w-full text-center pt-12'>
          {links.map((item) => (
          <li className="text-2xl py-6">
            <a key={item.href}
              href={item.href}>
                {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
  )
}

export default NavBar