import { FaJsSquare, FaNode, FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { BsGithub } from 'react-icons/bs';

const Skills = () => {
  const style = `hidden mt-[-54px] text-[10px] font-semibold absolute text-center z-10 bg-white p-1 border rounded-sm`;
  return (
    <div className='my-10'>
      <h2 className='text-[#f0ecec] text-lg md:text-2xl text-center mb-5 font-semibold'>
        Skills
      </h2>
      <div className='w-full h-full py-5 border-y border-[#5e1b5383] text-[#f7d8f5c4] flex gap-5 justify-evenly overflow-x-auto scroll-smooth no-scrollbar'>
        <div>
          <FaJsSquare id='icon' size={30} className='cursor-pointer' />
        </div>
        <div>
          <SiTypescript
            id='icon'
            size={26}
            className='rounded-sm cursor-pointer'
          />
        </div>
        <div>
          <FaReact id='icon' size={30} className='cursor-pointer' />
        </div>
        <div>
          <TbBrandNextjs id='icon' size={34} className='cursor-pointer' />
        </div>
        <div>
          <SiTailwindcss id='icon' size={34} className='cursor-pointer' />
        </div>
        <div>
          <p
            id='icon'
            className='font-bold flex text-lg items-center cursor-pointer'
          >
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
        </div>
        <div>
          <BsGithub id='icon' size={28} className='cursor-pointer' />
        </div>
        <div>
          <FaNode id='icon' size={36} className='cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default Skills;
