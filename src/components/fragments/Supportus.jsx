import React from 'react'

const Supportus = () => {
  return (
    <div className='h-[500px] w-full bg-white px-24 py-16 flex items-center justify-center'>
        <div className='rounded-3xl flex items-center justify-center bg-purple-700 w-full'>
            <video
            className="top-0 left-0 h-[400px] w-full object-cover rounded-3xl"
            autoPlay
            muted
            loop
            >
                <source src="/videos/child.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* <img src='/svgs/grid_svg.svg' className='w-full h-full object-cover opacity-50'/> */}
            <div className='absolute flex items-center flex-col justify-start h-[500px] py-24 gap-6 text-white font-bold'>
                <span className='px-4 py-3 bg-purple-700 text-sm rounded-full uppercase'> get ready for the new start by you</span>
                <span className='text-6xl'>Together We Are Strong</span>
                <div className='w-full flex items-center justify-between mt-20'>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-6xl'>
                            200
                        </span>
                        <span className='w-[60%] flex text-center'>
                            more people have been part of the change
                        </span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-6xl'>
                            10+
                        </span>
                        <span className='w-[60%] flex text-center'>
                            more than 10 countries have used our service
                        </span>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <span className='text-6xl'>
                            100+ ETH
                        </span>
                        <span className='w-[60%] flex text-center'>
                            more than 100 eth collected globally.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Supportus
