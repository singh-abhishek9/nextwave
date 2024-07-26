import React from 'react'
import logo from '../assets/logo.png'
import { IoIosArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import navphoto from '../assets/image.jpeg'
export default function Navbar() {
  return (
    <div className='h-[80px] w-full bg-slate-50 fixed top-0 z-50'>
         <nav className='flex flex-row justify-between w-[80%] mx-auto items-center h-full'>
            {/* logo section */}
                <img src={logo} alt='logo of the website' className='h-[70px] hover:cursor-pointer'/>

            {/* Second list section */}

                <ul className='flex flex-row justify-evenly gap-2 text-sm font-bold text-blue-400 hover:cursor-pointer'>
                 
                    <li className='transition-all hover:text-blue-500 duration-300'>Home</li>
                    <div className='flex gap-1 h-full items-center transition-all hover:text-blue-500 duration-300'>
                        <li>Instructors</li>
                        {/* dropdown */}
                        <IoIosArrowDropdown />

                    </div>
                    <div  className='flex gap-1 h-full items-center transition-all hover:text-blue-500 duration-300'>
                        <li>Careers</li>
                        {/* dropdown */}
                        <IoIosArrowDropdown />
                    </div>
                    <div  className='flex gap-1 items-center transition-all hover:text-blue-500 duration-300'>
                        <li>Batches</li>
                        {/* dropdown */}
                        <IoIosArrowDropdown />
                    </div>
                    <li className='transition-all hover:text-blue-500 duration-300'>About Us</li>
                    <li className='transition-all hover:text-blue-500 duration-300'>Distributor Program</li>
                </ul>
            {/* third section */}
            <ul className='flex gap-2 items-center hover:cursor-pointer'>
                <li><FaSearch /></li>
                <li> <FaShoppingCart /></li>
                <li className='h-[40px] w-[40px] border rounded-full border-black'> 
                    <img src={navphoto} alt='navbar' className='rounded-full'/>
                </li>
            </ul>
         </nav>
    </div>
  )
}
