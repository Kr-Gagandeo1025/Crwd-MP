"use client"
import { useRef, useEffect } from 'react';
import { BiArrowToBottom } from 'react-icons/bi';
import { gsap } from 'gsap';


const HeroSection = () => {
  const videoRef = useRef(null);
  const lettersRef = useRef([]);
  useEffect(() => {
    gsap.fromTo(
      lettersRef.current,
      {
        y: 100, // Start position (bottom)
        opacity: 0, // Hidden at the start
      },
      {
        delay:2,
        y: 0, // End position (top)
        opacity: 1, // Fully visible
        duration: 1, // Animation duration for each letter
        stagger: 0.5, // Delay between each letter animation
        ease: "power2.out", // Smooth easing
      }
    );
    gsap.fromTo("#hero-desc",{
      opacity:0,
    },{
      delay:5.5,
      opacity:1,
      duration:0.5,
      ease:"power2.in"
    })
    gsap.fromTo("#hero-cta",{
      opacity:0,
    },{
      delay:6,
      opacity:1,
      duration:0.5,
      ease:"power2.in"
    })
  }, []);
  return (
    <div className='flex w-full font-mono fixed z-0'>
      <div className="relative h-screen w-full">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 h-full w-full object-cover"
        autoPlay
        muted
      >
        <source src="/videos/hero_bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black/50">
        <div className="text-white font-bold flex flex-col items-center justify-center">
          <div className='flex items-center justify-center gap-3 text-[200px]'>
            <span
              ref={(el) => (lettersRef.current[0] = el)}
              className="inline-block text-yellow-600"
            >
              C
            </span>
            <span
              ref={(el) => (lettersRef.current[1] = el)}
              className="inline-block text-white"
            >
              r
            </span>
            <span
              ref={(el) => (lettersRef.current[2] = el)}
              className="inline-block text-white"
            >
              w
            </span>
            <span
              ref={(el) => (lettersRef.current[3] = el)}
              className="inline-block text-white"
            >
              d
            </span>
            <span
              ref={(el) => (lettersRef.current[4] = el)}
              className="inline-block text-yellow-600"
            >
              .
            </span>
          </div>
          <span className='text-3xl mt-10 flex items-center gap-4' id='hero-desc'>The Revolutionary <span className='text-4xl text-yellow-600'>WEB-3</span> Crowdfunding Solution.</span>
          <span className='text-xl bg-white text-black px-6 py-4 rounded-3xl flex items-center gap-3 mt-24' id='hero-cta'>
            Know More <BiArrowToBottom/>
          </span>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeroSection
