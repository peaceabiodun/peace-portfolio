import { projects } from '../utils/data';

const Projects = () => {
  return (
    // <div className='px-6 sm:px-10 pt-6 sm:pt-10 pb-[60px] ' id='Projects'>
    //   <h1 className='text-[16px] font-bold text-center mb-4'>
    //     Some of My Latest Works{' '}
    //   </h1>

    //   <div className='flex items-center justify-center'>
    //     <Slider autoplay {...settings} className='w-[100%] sm:w-[80%] flex'>
    //       {projects.map((item) => (
    //         <div key={item.id} className='flex flex-col items-center '>
    //           <Link to={item.link}>
    //             <img
    //               src={item.image}
    //               alt=''
    //               className='w-full h-full border shadow-md cursor-pointer'
    //             />
    //           </Link>
    //           <div className='my-4 flex flex-col items-center'>
    //             <Link
    //               to={item.link}
    //               className='font-bold text-sm hover:text-[#8a2159]'
    //             >
    //               {item.title}
    //             </Link>
    //             <p className='text-sm font-medium max-w-[340px] mt-2'>
    //               {item.description}
    //             </p>
    //           </div>
    //         </div>
    //       ))}
    //     </Slider>
    //   </div>
    // </div>

    <div id='projects' className='mb-10'>
      <h2 className='text-[#f0ecec] text-lg md:text-2xl text-center mb-3 font-semibold'>
        Projects
      </h2>
      <p className='text-[#bdb9b9] text-center font-medium text-sm mb-5'>
        Some of My Projects
      </p>
      <div className=' h-full gap-5 w-full flex lg:grid lg:grid-cols-3 overflow-x-auto scroll-smooth no-scrollbar '>
        {projects.map((item) => (
          <div
            key={item.id}
            className='p-4 bg-[#8a87873d] w-[350px] min-w-[350px] min-h-[370px] rounded-xl overflow-hidden'
          >
            <a href={item.link} target='_blank' rel='noopener noreferrer'>
              <p className='text-[#f0ecec] text-lg font-semibold mb-3'>
                {item.title}
              </p>
              <div>
                <img
                  src={item.image}
                  alt='project'
                  className='w-full h-[200px] object-cover rounded-xl brightness-75'
                />
              </div>
              <p className='text-[#faeefe] text-sm font-medium my-3'>
                {item.description}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
