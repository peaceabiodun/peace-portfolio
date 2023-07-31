import { SiTypescript } from "react-icons/si";
import {FaGithub, FaLinkedin, FaTwitter,FaHtml5, FaCss3, FaJsSquare,
FaReact, FaNode} from "react-icons/fa"
import { BsGithub } from "react-icons/bs";
import { MdEmail, MdCss } from "react-icons/md";
import { SiTailwindcss} from "react-icons/si";

const MainPage = () => {
    return (
        <div >
            <div className='p-10'>
                <div className='h-[60vh] flex flex-col justify-center'>
                    <h3 className='text-[16px] font-bold'>Peace Abiodun</h3>
                    <h1 className='text-3xl font-bold my-2'>Frontend Engineer</h1>
                    <p className='text-xs sm:text-sm'>And ofcourse, I made this myself!</p>
                </div>

                <div className='border-y'>
                    <div className='hidden sm:flex py-6 justify-between gap-2'>
                        <FaJsSquare size={30} />
                        <SiTypescript size={28} className='rounded-sm'/>
                        <FaReact size={30} />
                        <SiTailwindcss size={34} />
                        <p className='font-bold flex items-center'>CSS</p>
                        <p className='font-bold flex items-center'>API</p>
                        <BsGithub size={30}/>
                        <FaNode size={36} />
                    </div>

                    <div  className='py-6 flex flex-col sm:hidden gap-3' >
                        <div className='flex justify-between'>
                            <FaJsSquare size={30} />
                            <SiTypescript size={28} className='rounded-sm'/>
                            <FaReact size={30} />
                            <SiTailwindcss size={34} />
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-bold flex items-center'>CSS</p>
                            <p className='font-bold flex items-center'>API</p>
                            <BsGithub size={30}/>
                            <FaNode size={36} />
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}
 
export default MainPage;
