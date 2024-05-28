import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import About from '../../components/about';
import Skills from '../../components/skills';

const MainPage = () => {
  return (
    <div className='bg-main w-full h-full min-h-screen p-5 sm:p-10'>
      <div className='flex justify-center md:justify-between gap-4'>
        <div className='hidden md:block text-[#f0ecec] text-lg font-semibold'>
          Portfolio
        </div>
        <div className=' flex gap-4 p-3 text-[#f0ecec] bg-[#8d8b8b50] rounded-full text-sm font-semibold '>
          <p className='hover:text-[#8f3a7a] cursor-pointer'>Projects</p>
          <p className='hover:text-[#8f3a7a] cursor-pointer'>Get In Touch</p>
        </div>
      </div>

      <div className='h-[80vh] flex flex-col justify-center'>
        <h1 className='text-[#fefefe] font-bold text-4xl md:text-[70px] '>
          Hi there, I'm Peace
        </h1>
        <h3 className='text-[#bdb9b9] mt-6 text-xl md:text-2xl font-semibold'>
          Frontend Engineer
        </h3>

        <div className='text-[#9736aa] flex gap-3 my-6'>
          <a
            href='mailto:abiodunpeace8@gmail.com'
            className='bg-[#8a87873d] p-2 rounded-full'
          >
            <MdEmail size={20} className='cursor-pointer ' />
          </a>
          <a
            href='https://www.linkedin.com/in/peaceabiodun/'
            className='bg-[#8a87873d] p-2 rounded-full'
          >
            <FaLinkedin size={20} className='cursor-pointer' />
          </a>
          <a
            href='https://twitter.com/_fine_peace_'
            className='bg-[#8a87873d] p-2 rounded-full'
          >
            <FaTwitter size={20} className='cursor-pointer' />
          </a>
          <a
            href='https://github.com/peaceabiodun'
            className='bg-[#8a87873d] p-2 rounded-full'
          >
            <FaGithub size={20} className='cursor-pointer' />
          </a>
        </div>
      </div>

      <About />
      <Skills />
    </div>
  );
};

export default MainPage;
