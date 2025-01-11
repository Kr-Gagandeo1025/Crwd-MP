'use client'
import React, { useEffect } from 'react'
import { motion } from "motion/react"

const AdminDashbrd = () => {
  const func = async () => {
    const response = await fetch("/api/verify-company",{
      method : "POST",
    })
    const result = await response.json();
    console.log(result)
  }
  
  useEffect (()=>{
    func();
  },[])
  return (
    <div className='m-0 p-0 w-screen min-h-screen flex-col justify-start items-center bg-white text-black'>
      {/* admin top bar */}
      <div className='w-full px-10 py-4 flex items-center justify-between border-b shadow-lg'>
        <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} className='font-bold flex flex-col items-start justify-start'>
          <h1 className='text-2xl'>Customer Verification Dashboard</h1>
          <p className='text-sm text-gray-500'>@admin-name-123</p>
        </motion.div>

        <motion.button whileTap={{opacity:0.7, scale:0.8}} className='bg-red-500 text-xl font-semibold px-8 py-2 border rounded-md border-black shadow-lg'>
          Logout
        </motion.button>
      </div>

      {/* type selector */}
      <motion.ul className='w-full mt-10 flex items-start justify-start px-10 gap-5'>
          <li className={`cursor-pointer px-4 py-2 border border-black shadow-lg text-lg rounded-md bg-gray-200`}>Company/NGO</li>
          <li className={`cursor-pointer px-4 py-2 border border-black text-lg rounded-md opacity-70`}>Educational/Student</li>
          <li className={`cursor-pointer px-4 py-2 border border-black text-lg rounded-md opacity-70`}>Healthcare</li>
      </motion.ul>

      {/* map the data for companies */}

    </div>
  )
}

export default AdminDashbrd
