import React from 'react'
import { motion } from "motion/react";

const VerfPortalCards = ({item, type}) => {
  return (
    <div className='w-full flex items-center justify-between border border-black rounded-xl p-2 bg-white shadow-md'>
      <div className='w-1/3'>
        <p className='text-sm font-semibold text-gray-600'>Benificiery Name</p>
        <h1 className='text-xl font-bold text-black'>{item?.beneficiary_name}</h1>
      </div>
      <div>
        <p className='text-sm font-semibold text-gray-600'>Goal Amount</p>
        <h1 className='text-xl font-bold text-black'>{item?.target_amount_eth}</h1>
      </div>
      <div>
        <p className='text-sm font-semibold text-gray-600'>applied on</p>
        <h1 className='text-xl font-bold text-black'>{item?.date_created?.slice(0,10)}</h1>
      </div>
      {type===1&&
        <motion.a whileTap={{opacity:0.7, scale:0.9}} className='bg-blue-700 text-lg font-semibold px-8 py-2 border rounded-md border-black shadow-lg' href={`/companies-verification/${item?.id}`}>
          View
        </motion.a>
      }
      {type===2&&
        <motion.a whileTap={{opacity:0.7, scale:0.9}} className='bg-blue-700 text-lg font-semibold px-8 py-2 border rounded-md border-black shadow-lg' href={`/educational-verification/${item?.id}`}>
          View
        </motion.a>
      }
      {type===3&&
        <motion.a whileTap={{opacity:0.7, scale:0.9}} className='bg-blue-700 text-lg font-semibold px-8 py-2 border rounded-md border-black shadow-lg' href={`/healthcare-verification/${item?.id}`}>
          View
        </motion.a>
      }
    </div>
  )
}

export default VerfPortalCards
