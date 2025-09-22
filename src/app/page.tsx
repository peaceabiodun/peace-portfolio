'use client';

import Footer from '@/components/footer/page';
import VennDiagram from '@/components/venn-diagram/page';
import { projectsData } from '@/utils/data';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { HiArrowLongRight } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { PiPauseThin } from 'react-icons/pi';

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState<
    number | null
  >(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Play the video
      setIsPlaying(!isPlaying); // Toggle the play state
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video
      setIsPlaying(!isPlaying); // Toggle the play state
    }
  };
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
          <h1 className='text-[#FFFFFF]'>PEACE ABDIOUN</h1>
          <h2 className='text-[#FFFFFF] mt-2'>Senior Frontend Engineer</h2>
          <p className='text-[#FFFFFFB2] mt-1'>
            My purpose is simple: Solve problems with intelligence and have a
            life while at it.
          </p>
        </section>

        <section>
          <div
            className='border-[0.5px] border-[#FFFFFF75] w-full h-[320px] md:h-[520px] relative'
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
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
              className='w-full h-full object-cover'
            >
              <source src={'/videos/intro.mp4'} type='video/mp4' />
            </video>

            <div
              className='absolute inset-0 z-10'
              style={{
                background: `linear-gradient(
              180deg,
              rgba(2, 4, 2, 0.9) 0%,
              rgba(2, 4, 2, 0.8) 9.56%,
              rgba(2, 4, 2, 0) 47.81%,
              #0204026d 85.01%
            )`,
              }}
            ></div>

            {/* Play Icon - shows when not playing and hovering */}
            <IoPlayCircleOutline
              onClick={handlePlay}
              size={25}
              className={`${
                !isPlaying && isHovering
                  ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                  : 'hidden'
              } text-[#FFFFFF] z-50 cursor-pointer  transition-all duration-300 text-[#0204026d]`}
            />

            {/* Pause Icon - shows when playing and hovering */}
            <PiPauseThin
              onClick={handlePause}
              size={25}
              className={`${
                isPlaying && isHovering
                  ? 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                  : 'hidden'
              } text-[#FFFFFF] z-50 cursor-pointer transition-all duration-300`}
            />
          </div>
          <div className='flex items-center justify-center'>
            <a
              href='mailto:abiodunpeace8@gmail.com'
              rel='noopener noreferrer'
              target='_blank'
              className='mt-5 border-[0.5px] border-[#ffffff75] p-2 text-[#ffffff] text-sm w-[150px] h-[36px] cursor-pointer text-center hover:bg-[#773a779a] transition-all duration-300'
            >
              SAY HELLO
            </a>
          </div>
        </section>

        <section>
          <VennDiagram />
        </section>

        <section>
          <div className='text-[#FFFFFF] text-sm md:text-lg mt-12 flex items-center justify-center gap-4 cursor-pointer transition-all duration-400 ease-in'>
            <h4 className='hover:line-through hover:text-[#be06ec] transition-all duration-300'>
              SOME OF THE THINGS I'VE DONE
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
              WHAT I'M CURRENTLY READING
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
              <div className='w-[40%] h-[200px] sm:h-[370px] transition-all duration-300 relative border-[0.5px] border-[#FFFFFF75]'>
                <img
                  src='/images/book1.png'
                  alt='book1'
                  className='w-full h-full object-cover object-center'
                />
                <div className='absolute inset-0 bg-[#be06ec2d] ' />
              </div>
              <a
                href='https://open.substack.com/pub/fishinapool/p/chemistry-needs-contact?utm_campaign=post&utm_medium=web'
                rel='noopener noreferrer'
                target='_blank'
                className='w-[60%] h-[200px] sm:h-[370px] bg-[#be06ec10] hover:bg-[#be06ec38] transition-all duration-300 flex flex-col items-center justify-center border-[0.5px] border-[#FFFFFF75] p-2 cursor-pointer'
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
            </div>

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
