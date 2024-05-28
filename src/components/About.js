import Pic1 from '../assets/image/pic3.jpeg';

const About = () => {
  return (
    <div className='px-5 sm:px-10 border rounded-xl border-[#5e1b53] '>
      <div className='flex items-center justify-center w-full mt-[-50px]'>
        <div className='w-[205px] h-[205px] rounded-full border-4 border-[#f147d55e]'>
          <img
            src={Pic1}
            alt='my-pic'
            className='w-[200px] h-[200px] object-cover rounded-full border-2 border-[#b93ca467]'
          />
        </div>
      </div>
      <div className='p-5 sm:p-10 flex flex-col items-center justify-center font-semibold '>
        <h2 className='text-[#f0ecec] text-lg md:text-2xl'>PEACE ABIODUN</h2>
        <p className='text-[#d6d0d0] text-sm md:text-lg mt-4 '>
          Over the past few years, I have dedicated my time to building high
          quality web applications with React.js, Next.js, and their associated
          frameworks.
        </p>
        <p className='text-[#d6d0d0] text-sm md:text-lg mt-4'>
          &apos;&apos;The most important thing to me, and The primary reason I
          do what I do is to help people and businesses, bringing them
          profitability and happiness with my skills.&apos;&apos;
        </p>
      </div>
    </div>
  );
};

export default About;
