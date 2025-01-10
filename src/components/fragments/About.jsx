import Image from 'next/image'
import React from 'react'
import { BsAsterisk } from 'react-icons/bs'

const About = () => {
  return (
    <div className='h-fit flex flex-col items-start justify-between w-full px-24 py-16 tracking-tighter' id='about'>
      <div>
        <span className='p-4 rounded-full text-black bg-gray-300 text-lg font-bold'>About we are - you are</span>
      </div>
      <div className='w-full flex items-center justify-between text-black mt-10'>
        <div className='w-[50%] flex-col flex items-start justify-start border-r-4 border-gray-300 text-6xl font-bold'>
            <span>More people</span>
            <span>More impact</span>
        </div>
        <div className='w-[50%] ml-24'>
            <p className='text-black text-2xl font-bold'>
                Beacause together, we can make a real diffrence. Our volunteers service in a variety of roles according to their skills and interest.
            </p>
        </div>
      </div>
      <div className='w-full flex items-center justify-between overflow-x-scroll mt-16'>
        <div className='flex w-[400px] h-[450px]'>
            <img src="/images/hands-plant.jpg" alt='planting' className='h-full w-full object-cover rounded-xl'/>
            <div className='absolute w-[400px] h-fit self-end p-4 bg-yellow-600 text-black rounded-xl'>
                <div className='flex w-full items-center justify-between'>
                    <span className='text-3xl font-bold'>Plant for Future.</span>
                    <BsAsterisk className='text-6xl text-white -translate-y-10 bg-purple-700 p-2 rounded-full'/>
                </div>
                <p>
                    Planting trees is not only useful in the present but also in the future of Blockchains...
                </p>
            </div>
        </div>
        <div className='flex w-[400px] h-[450px]'>
            <img src="/images/poor-children.jpg" alt='poor' className='h-full w-full object-cover rounded-xl'/>
            <div className='absolute w-[400px] h-fit self-end p-4 bg-yellow-600 text-black rounded-xl'>
                <div className='flex w-full items-center justify-between'>
                    <span className='text-3xl font-bold'>Help them Learn.</span>
                    <BsAsterisk className='text-6xl text-white -translate-y-10 bg-purple-700 p-2 rounded-full'/>
                </div>
                <p>
                    Planting trees is not only useful in the present but also in the future of Blockchains...
                </p>
            </div>
        </div>
        <div className='flex w-[400px] h-[450px]'>
            <img src="/images/hand-sanitizer.jpg" alt='sanitizer' className='h-full w-full object-cover rounded-xl'/>
            <div className='absolute w-[400px] h-fit self-end p-4 bg-yellow-600 text-black rounded-xl'>
                <div className='flex w-full items-center justify-between'>
                    <span className='text-3xl font-bold'>Funding Healthcare.</span>
                    <BsAsterisk className='text-6xl text-white -translate-y-10 bg-purple-700 p-2 rounded-full'/>
                </div>
                <p>
                    Planting trees is not only useful in the present but also in the future of Blockchains...
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
