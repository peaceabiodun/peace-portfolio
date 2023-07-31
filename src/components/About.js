import Pic1 from '../assets/image/pic1.JPG';

const About = () => {
    return ( 
        <div className='p-10 '>
                <h1 className='text-lg font-bold text-center mb-3'>About Me</h1>
                <div className='flex flex-col sm:flex-row w-full sm:items-center sm:justify-center gap-10'>
                    <div className='text-xs'>
                        <img src={Pic1} alt='my-pic' className='w-[150px] h-[200px] border-2 border-black' />
                        <p className='font-bold mt-3'>Peace Abiodun</p>
                        <p className=''>Software Engineer</p>
                    </div>
                
                    <div className='max-w-[400px]'>
                        <p className='font-bold text-sm'>Bio:</p>
                        <p className='text-xs sm:text-sm'> I'm a Frontend Engineer dedicated to building high quality web applications with a focus on scalability and performance. <br />
                            With hands-on experience in building and maintaining various web applications, including food delivery systems and event management apps, I thrive in Agile environments, utilizing Scrum methodologies to deliver timely results.

                            Currently, I work as a Frontend Engineer at Food Court, where I use my experience with JavaScript, TypeScript, ReactJS, Tailwind CSS, Sass, Git and APIs alongside a talented team to deliver seamless user experiences and build innovative solutions that cater to the ever-changing demands of the food industry. I also work as an OSP fiber Engineer at Huawei, Nigeria.

                            When I'm not immersed in work, I love to explore new places, have a good time, watch movies and argue about my favorite character.
                        </p>
                    </div>
                </div>
            </div>
    
     );
}
 
export default About;