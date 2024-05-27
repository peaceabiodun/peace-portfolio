import { motion } from 'framer-motion';
import { SiTypescript } from 'react-icons/si';
import { FaJsSquare, FaReact, FaNode } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { SiTailwindcss } from 'react-icons/si';
import { ReactComponent as Pattern } from '../assets/image/pattern.svg';

const MainPage = () => {
  const style = `hidden mt-[-54px] text-[10px] font-semibold absolute text-center z-10 bg-white p-1 border rounded-sm`;
  const mobileStyle = `hidden mt-[-51px] text-[10px] font-semibold absolute text-center z-10 bg-white p-1 border rounded-sm`;

  return (
    <div className=''>
      <div className='absolute'>
        <motion.div
          initial={{ y: -100, x: 400 }}
          whileInView={{ y: 300, opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          animate={{ rotate: [0, 150] }}
          className='hidden sm:flex'
        >
          <Pattern />
        </motion.div>

        <motion.div
          initial={{ y: -100, x: 30 }}
          whileInView={{ y: 300, opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          animate={{ rotate: [0, 150, 90] }}
          className=''
        >
          <Pattern />
        </motion.div>

        <motion.div
          initial={{ y: 0, x: 130 }}
          whileInView={{ y: 300, opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 5 }}
          animate={{ rotate: [0, 150, 60] }}
          className=''
        >
          <Pattern />
        </motion.div>

        <motion.div
          initial={{ y: -400, x: 800 }}
          whileInView={{ y: 200, opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
          animate={{ rotate: [0, 150, 90] }}
          className='hidden mdLg:flex'
        >
          <Pattern />
        </motion.div>

        <motion.div
          initial={{ y: -400, x: 1000 }}
          whileInView={{ y: -100, opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
          animate={{ rotate: [0, 150, 90] }}
          className='hidden lg:flex'
        >
          <Pattern />
        </motion.div>
      </div>
      <div className='p-6 sm:p-10'>
        <div className='h-[60vh] flex flex-col justify-center'>
          <h3 className='text-[16px] sm:text-xl font-bold'>Peace Abiodun</h3>
          <h1 className='text-2xl sm:text-3xl font-bold my-2'>
            Frontend Engineer
          </h1>
          <p className='text-xs sm:text-sm'>
            And of course, I made this myself!
          </p>
        </div>

        <div className='border-y'>
          <div className='hidden sm:flex items-center py-6 justify-between gap-2'>
            <div>
              <FaJsSquare id='icon' size={30} className='cursor-pointer' />
              <p id='show' className={style}>
                JavaScript
              </p>
            </div>
            <div>
              <SiTypescript
                id='icon'
                size={26}
                className='rounded-sm cursor-pointer'
              />
              <p id='show' className={style}>
                TypeScript
              </p>
            </div>
            <div>
              <FaReact id='icon' size={30} className='cursor-pointer' />
              <p id='show' className={style}>
                React
              </p>
            </div>
            <div>
              <SiTailwindcss id='icon' size={34} className='cursor-pointer' />
              <p id='show' className={style}>
                Tailwindcss
              </p>
            </div>
            <div>
              <p
                id='icon'
                className='font-bold flex text-lg items-center cursor-pointer'
              >
                CSS
              </p>
              <p id='show' className={style}>
                CSS
              </p>
            </div>
            <div>
              <p
                id='icon'
                className='font-bold text-lg flex items-center cursor-pointer'
              >
                API
              </p>
              <p id='show' className={style}>
                Restful APIs
              </p>
            </div>
            <div>
              <BsGithub id='icon' size={28} className='cursor-pointer' />
              <p id='show' className={style}>
                Git
              </p>
            </div>
            <div>
              <FaNode id='icon' size={36} className='cursor-pointer' />
              <p id='show' className={style}>
                NodeJs
              </p>
            </div>
          </div>

          <div className='py-6 flex flex-col sm:hidden gap-3'>
            <div className='flex items-center justify-between'>
              <div>
                <FaJsSquare size={26} id='icon' className='cursor-pointer' />
                <p id='show' className={mobileStyle}>
                  JavaScript
                </p>
              </div>
              <div>
                <SiTypescript
                  size={24}
                  id='icon'
                  className='rounded-sm cursor-pointer'
                />
                <p id='show' className={mobileStyle}>
                  TypeScript
                </p>
              </div>
              <div>
                <FaReact size={28} id='icon' className='cursor-pointer' />
                <p id='show' className={mobileStyle}>
                  React
                </p>
              </div>
              <div>
                <SiTailwindcss size={32} id='icon' className='cursor-pointer' />
                <p id='show' className={mobileStyle}>
                  Tailwind
                </p>
              </div>
            </div>
            <div className='flex items-center justify-between'>
              <div>
                <p
                  id='icon'
                  className='font-bold flex items-center cursor-pointer'
                >
                  CSS
                </p>
                <p id='show' className={mobileStyle}>
                  CSS
                </p>
              </div>
              <div>
                <p
                  id='icon'
                  className='font-bold flex items-center cursor-pointer'
                >
                  API
                </p>
                <p id='show' className={mobileStyle}>
                  Restful APIs
                </p>
              </div>
              <div>
                <BsGithub size={26} id='icon' className='cursor-pointer' />
                <p id='show' className={mobileStyle}>
                  Git
                </p>
              </div>
              <div>
                <FaNode size={32} id='icon' className='cursor-pointer' />
                <p id='show' className={mobileStyle}>
                  NodeJs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
