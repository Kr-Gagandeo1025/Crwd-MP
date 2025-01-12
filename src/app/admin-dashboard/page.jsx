'use client'
import React, { useEffect, useState } from 'react';
import { motion } from "motion/react";
import VerfPortalCards from "../../components/VerfPortalCards";
import { FaSpinner } from 'react-icons/fa6';

const AdminDashbrd = () => {

  const [VerfType, setVerfType] = useState(1);
  const [VerificationData, setVerificationData] = useState(null);

  const func = async () => {
    const response = await fetch("/api/get-verification-data",{
      method : "POST",
    })
    const result = await response.json();
    console.log(result);
    setVerificationData(result);
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
          <li className={`cursor-pointer px-4 py-2 border border-black text-lg rounded-md ${VerfType==1?'bg-gray-200 shadow-lg':'opacity-70'} transition-all duration-300 ease-in-out`} onClick={()=>{setVerfType(1)}}>Company/NGO</li>
          <li className={`cursor-pointer px-4 py-2 border border-black text-lg rounded-md ${VerfType==2?'bg-gray-200 shadow-lg':'opacity-70'} transition-all duration-300 ease-in-out`} onClick={()=>{setVerfType(2)}}>Educational/Student</li>
          <li className={`cursor-pointer px-4 py-2 border border-black text-lg rounded-md ${VerfType==3?'bg-gray-200 shadow-lg':'opacity-70'} transition-all duration-300 ease-in-out`} onClick={()=>{setVerfType(3)}}>Healthcare</li>
      </motion.ul>

      {/* map the data for companies */}
      {VerfType===1&& VerificationData?<motion.div className='w-full px-10 py-4 gap-4 flex flex-col items-center justify-start' initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}}>
        {VerificationData?.data1?.map((item,id)=>(
          <VerfPortalCards key={id} item={item} type={1}/>
        ))}
      </motion.div>:VerfType===1&&<div className='flex w-full items-center justify-center gap-3 mt-10 text-2xl'><FaSpinner className='animate-spin'/>Loading...</div>}
      {VerfType===2&& VerificationData?<motion.div className='w-full px-10 py-4 gap-4 flex flex-col items-center justify-start' initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}}>
      {VerificationData?.data2?.map((item,id)=>(
          <VerfPortalCards key={id} item={item} type={2}/>
        ))}
      </motion.div>:VerfType===2&&<div className='flex w-full items-center justify-center gap-3 mt-10 text-2xl'><FaSpinner className='animate-spin'/>Loading...</div>}
      {VerfType===3&& VerificationData?<motion.div className='w-full px-10 py-4 gap-4 flex flex-col items-center justify-start' initial={{opacity:0,y:-100}} animate={{opacity:1,y:0}}>
      {VerificationData?.data3?.map((item,id)=>(
          <VerfPortalCards key={id} item={item} type={3}/>
        ))}
      </motion.div>:VerfType===3&&<div className='flex w-full items-center justify-center gap-3 mt-10 text-2xl'><FaSpinner className='animate-spin'/>Loading...</div>}

    </div>
  )
}

export default AdminDashbrd
