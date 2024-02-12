import Pic1 from '../assets/image/pic2.JPG';

const About = () => {
  return (
    <div className='p-6 sm:p-10 '>
      <h1 className='text-lg font-bold text-center mb-4'>About Me</h1>
      <div className='flex flex-col sm:flex-row w-full items-center sm:justify-center gap-10'>
        <div className='text-xs'>
          <img
            src={Pic1}
            alt='my-pic'
            className='min-w-[180px] h-[290px] border-2 border-black'
          />
          <p className='font-bold mt-3'>Peace Abiodun</p>
          <p className=''>Software Engineer</p>
        </div>

        <div className='max-w-[400px] '>
          <p className='font-bold text-sm'>Bio:</p>
          <p className='text-xs sm:text-sm'>
            {' '}
            I'm a Frontend Engineer dedicated to building high quality web
            applications with a focus on scalability and performance. <br />
            Currently, I work as a Frontend Engineer at Food Court, where I use
            my experience with JavaScript, TypeScript, ReactJS, Tailwind CSS,
            Sass, Git and APIs alongside a talented team to deliver seamless
            user experiences and build innovative solutions that cater to the
            ever-changing demands of the food industry.
            <br />
            When I'm not immersed in work, I love to have a good time, travel
            and explore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
