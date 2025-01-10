import Link from 'next/link';
import React from 'react'
import { BiHome } from 'react-icons/bi';
import { FaCircleInfo, FaHandHoldingHand } from 'react-icons/fa6';
import { IoMdMenu } from 'react-icons/io';
import { IoWallet } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='w-full flex px-10 py-4 items-center justify-between font-mono fixed z-50 bg-black bg-opacity-50'>
      <div className='text-4xl font-bold'>
        <span>Crwd.</span>
      </div>
      <div className='gap-10 text-xl items-center font-bold md:flex hidden'>
        <span className='flex items-center gap-3'><BiHome/>HOME</span>
        <Link href="#about">
          <span className='flex items-center gap-3'><FaCircleInfo/>ABOUT</span>
        </Link>
        <span className='flex items-center gap-3'><FaHandHoldingHand/>SUPPORT</span>
      </div>
      <span className='px-6 py-2 md:flex hidden items-center gap-2 rounded-xl bg-purple-700 text-white font-bold text-xl'>Connect <IoWallet/></span>
      <div className='flex md:hidden'>
        <span><IoMdMenu className='text-3xl'/></span>
      </div>
    </div>
  )
}

export default Navbar
