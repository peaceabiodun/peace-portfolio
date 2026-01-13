'use client';

import Footer from '@/components/footer/page';
import VennDiagram from '@/components/venn-diagram/page';
import { projectsData } from '@/utils/data';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const hideControlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Function to start the timer that hides controls after 3 seconds
  const startHideControlsTimer = () => {
    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current);
    }
    hideControlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  };

  // Function to reset the timer and show controls
  const resetControlsTimer = () => {
    setShowControls(true);
    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current);
    }
    if (isPlaying) {
      startHideControlsTimer();
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Play the video
      setIsPlaying(true); // Set playing state to true
      setShowControls(true); // Show controls when user interacts
      startHideControlsTimer(); // Start timer to hide controls
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video
      setIsPlaying(false); // Set playing state to false
      setShowControls(true); // Show controls when user interacts
      // Clear timer when paused since we don't want to hide controls when paused
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current);
      }
    }
  };

  // Handle mouse enter - show controls and reset timer if playing
  const handleMouseEnter = () => {
    setIsHovering(true);
    setShowControls(true);
    if (isPlaying) {
      resetControlsTimer();
    }
  };

  // Handle mouse leave - start timer if playing
  const handleMouseLeave = () => {
    setIsHovering(false);
    if (isPlaying) {
      startHideControlsTimer();
    }
  };

  // Handle click/tap on video container (for mobile)
  const handleVideoClick = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (hideControlsTimeoutRef.current) {
        clearTimeout(hideControlsTimeoutRef.current);
      }
    };
  }, []);
  return (
    <main className='bg-[#0A0A0A] w-full h-full min-h-screen'>
      <div className='max-w-[1000px] mx-auto p-5 md:p-10'>
        <header className='w-full text-[#FFFFFFB2] flex gap-5 items-center justify-between'>
          <h2 className='text-sm md:text-lg '>SENIOR FRONTEND ENGINEER</h2>

          <div className='text-xs md:text-sm flex gap-3'>
            <Link
              href='https://www.linkedin.com/in/peaceabiodun/'
              rel='noopener noreferrer'
              target='_blank'
              className='hover:text-[#FFFFFF] hover:underline underline-offset-4 hover:text-sm md:hover:text-base transition-all duration-300'
            >
              LINKEDIN
            </Link>
            <Link
              href='https://github.com/peaceabiodun'
              rel='noopener noreferrer'
              target='_blank'
              className='hover:text-[#FFFFFF] hover:underline underline-offset-4 hover:text-sm md:hover:text-base transition-all duration-300'
            >
              GITHUB
            </Link>
          </div>
        </header>

        <section className='flex flex-col text-sm md:text-lg mt-8 mb-8'>
          <h1 className='text-[#FFFFFF]'>PEACE ABIODUN</h1>
          <h2 className='text-[#FFFFFF] mt-2'>Senior Frontend Engineer</h2>
          <p className='text-[#FFFFFFB2] mt-1'>
            " I write code the way I keep my word: clean and reliable.
          </p>
          <p className='text-[#be06ec] mt-1'>
            I am the engineer you call when 'WORKING' isn't enough."
          </p>
        </section>

        <section>
          <div className='border-[0.5px] border-[#FFFFFF75] w-full h-[380px] md:h-[620px] relative'>
            <img
              src='/images/author1.png'
              alt='poster'
              className='object-cover object-center w-full h-full'
            />
          </div>
          {/* <div
            className='border-[0.5px] border-[#FFFFFF75] w-full h-[320px] md:h-[520px] relative'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleVideoClick}
          >
            <video
              ref={videoRef}
              controls={false}
              src={'/videos/intro.mp4'}
              poster='/images/poster.png'
              crossOrigin='anonymous'
              playsInline
              autoPlay
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onClick={handleVideoClick}
              className='w-full h-full object-cover brightness-80'
            >
              <source src={'/videos/intro.mp4'} type='video/mp4' />
            </video>

        

            Play Icon - shows when not playing and controls are visible
            <IoPlayCircleOutline
              onClick={(e) => {
                e.stopPropagation();
                handlePlay();
              }}
              size={25}
              className={`${
                !isPlaying && showControls
                  ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                  : 'hidden'
              } text-[#FFFFFF] z-50 cursor-pointer  transition-all duration-300 `}
            />

            Pause Icon - shows when playing and controls are visible
            <PiPauseThin
              onClick={(e) => {
                e.stopPropagation();
                handlePause();
              }}
              size={25}
              className={`${
                isPlaying && showControls
                  ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                  : 'hidden'
              } text-[#FFFFFF] z-50 cursor-pointer transition-all duration-300`}
            />
          </div> */}
          <div className='flex items-center justify-center'>
            <a
              href='mailto:abiodunpeace8@gmail.com'
              rel='noopener noreferrer'
              target='_blank'
              className='mt-5 border-[0.5px] border-[#ffffff75] p-2 text-[#ffffff] text-sm w-[200px] h-[36px] cursor-pointer text-center hover:bg-[#773a779a] transition-all duration-300 font-bold'
            >
              CONTACT ME
            </a>
          </div>
        </section>

        <section>
          <VennDiagram />
        </section>

        <section>
          <div className='text-[#FFFFFF] text-sm md:text-lg mt-12 flex items-center justify-center gap-4 cursor-pointer transition-all duration-400 ease-in'>
            <h4 className='hover:line-through hover:text-[#be06ec] transition-all duration-300'>
              WHERE MY WORK IS
            </h4>
            <HiArrowLongRight size={16} />
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className='mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4'
          >
            {projectsData.map((item, index) => (
              <div
                key={index}
                className=' border-[0.5px] border-[#FFFFFF75] hover:border-[#be06ec] transition-all duration-300 '
              >
                <div
                  className='relative'
                  onMouseEnter={() => setSelectedProjectIndex(index)}
                  onMouseLeave={() => setSelectedProjectIndex(null)}
                >
                  <div className='border-b-[0.5px] border-b-[#FFFFFF75] hover:border-b-[#be06ec] transition-all duration-300 w-full h-[350px] relative'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='w-full h-full object-cover object-center brightness-80'
                    />
                  </div>
                  {selectedProjectIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                      className='absolute inset-0 bg-[#0a0a0ac7] text-[#ffffff] z-10 '
                    >
                      <div className='p-3 flex flex-col justify-end w-full h-full max-w-[370px]'>
                        <p className=' text-base font-bold'>{item.subtext}</p>
                        <p className=' text-[#FFFFFFB2] text-sm mt-2'>
                          {item.description}
                        </p>
                        <a
                          href={item.link}
                          rel='noopener noreferrer'
                          target='_blank'
                          className=' text-sm mt-2 bg-[#be06ec56] hover:bg-[#be06eca1] transition-all duration-300 p-2 h-[30px] w-[100px] flex items-center justify-center'
                        >
                          View
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
                <div
                  onClick={() =>
                    setSelectedProjectIndex(
                      selectedProjectIndex === index ? null : index
                    )
                  }
                  className=' text-[#ffffff] flex items-center justify-center gap-2 mt-2 hover:line-through hover:text-[#be06ec] transition-all duration-300 cursor-pointer p-3 '
                >
                  <h4 className='text-sm'>{item.title}</h4>
                  <HiArrowLongRight size={14} />
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        <section>
          <div className='text-[#FFFFFF] text-sm md:text-lg mt-12 flex items-center justify-center gap-4 cursor-pointer transition-all duration-400 ease-in'>
            <h4 className='hover:line-through hover:text-[#be06ec] transition-all duration-300'>
              WHAT I AM READING CURRENTLY
            </h4>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
            }}
            className='mt-8'
          >
            <div className='flex w-full'>
              <div className='w-[50%] h-[200px] sm:h-[370px] transition-all duration-300 relative border-[0.5px] border-[#FFFFFF75]'>
                <img
                  src='/images/book2.png'
                  alt='book2'
                  className='w-full h-full object-contain object-center'
                />
                <div className='absolute inset-0 bg-[#be06ec2d] ' />
              </div>
              <div className='w-[50%] h-[200px] sm:h-[370px] transition-all duration-300 relative border-[0.5px] border-[#FFFFFF75]'>
                <img
                  src='/images/book3.png'
                  alt='book3'
                  className='w-full h-full object-contain object-center'
                />
                <div className='absolute inset-0 bg-[#be06ec2d] ' />
              </div>
            </div>
            <a
              href='https://open.substack.com/pub/fishinapool/p/chemistry-needs-contact?utm_campaign=post&utm_medium=web'
              rel='noopener noreferrer'
              target='_blank'
              className='w-full h-[200px] sm:h-[370px]  bg-[#be06ec38] hover:bg-[#be06ec56] transition-all duration-300 flex flex-col items-center justify-center border-[0.5px] border-[#FFFFFF75] p-2 cursor-pointer'
            >
              <p className='sm:text-base text-sm font-bold text-[#ffffff] text-center'>
                Substack
              </p>
              <p className='sm:text-sm text-xs font-medium my-1 flex items-center justify-center text-center gap-2 text-[#FFFFFFB2]'>
                CHEMISTRY NEEDS CONTACT
              </p>
              <p className='text-[10px] text-[#FFFFFFB2] underline underline-offset-4'>
                Read
              </p>
            </a>

            <div className='grid grid-cols-2 w-full'>
              <a
                href='https://open.substack.com/pub/themarathon0612/p/clarity-of-thinking?r=1v2kx8&utm_campaign=post&utm_medium=web'
                rel='noopener noreferrer'
                target='_blank'
                className='w-full h-[200px] sm:h-[370px] bg-[#be06ec0c] hover:bg-[#be06ec17] transition-all duration-300 flex flex-col items-center justify-center border-[0.5px] border-[#FFFFFF75] p-2 cursor-pointer'
              >
                <p className='sm:text-base text-sm font-bold text-[#ffffff] text-center'>
                  Substack
                </p>
                <p className='sm:text-sm text-xs font-medium my-1 flex items-center justify-center text-center gap-2 text-[#FFFFFFB2]'>
                  CLARITY OF THINKING
                </p>
                <p className='text-[10px] text-[#FFFFFFB2] underline underline-offset-4'>
                  Read
                </p>
              </a>
              <a
                href='https://read.isabelunraveled.com/p/how-to-be-cool?utm_campaign=post&utm_medium=web'
                rel='noopener noreferrer'
                target='_blank'
                className='w-full h-[200px] sm:h-[370px] bg-[#be06ec1c] hover:bg-[#be06ec38] transition-all duration-300 flex flex-col items-center justify-center border-[0.5px] border-[#FFFFFF75] p-2 cursor-pointer'
              >
                <p className='sm:text-base text-sm font-bold text-[#ffffff] text-center'>
                  Substack
                </p>
                <p className='sm:text-sm text-xs font-medium my-1 flex items-center justify-center text-center gap-2 text-[#FFFFFFB2]'>
                  HOW TO BE COOL
                </p>
                <p className='text-[10px] text-[#FFFFFFB2] underline underline-offset-4'>
                  Read
                </p>
              </a>
            </div>
            <a
              href='https://read.isabelunraveled.com/p/confidence?utm_campaign=post&utm_medium=web'
              rel='noopener noreferrer'
              target='_blank'
              className='w-full h-[200px] sm:h-[370px]  bg-[#be06ec38] hover:bg-[#be06ec56] transition-all duration-300 flex flex-col items-center justify-center border-[0.5px] border-[#FFFFFF75] p-2 cursor-pointer'
            >
              <p className='sm:text-base text-sm font-bold text-[#ffffff] text-center'>
                Substack
              </p>
              <p className='sm:text-sm text-xs font-medium my-1 flex items-center justify-center text-center gap-2 text-[#FFFFFFB2]'>
                CONFIDENCE COMES FROM TAKING CARE OF YOURSELF
              </p>
              <p className='text-[10px] text-[#FFFFFFB2] underline underline-offset-4'>
                Read
              </p>
            </a>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
