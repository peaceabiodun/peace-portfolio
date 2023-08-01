import { SiTypescript } from "react-icons/si";
import {FaGithub, FaLinkedin, FaTwitter,FaHtml5, FaCss3, FaJsSquare,
FaReact, FaNode} from "react-icons/fa"
import { BsGithub } from "react-icons/bs";
import { MdEmail, MdCss } from "react-icons/md";
import { SiTailwindcss} from "react-icons/si";

const MainPage = () => {
    const style = `hidden mt-[-54px] text-[10px] font-semibold absolute text-center z-10 bg-white p-1 border rounded-sm`;
    const mobileStyle = `hidden mt-[-51px] text-[10px] font-semibold absolute text-center z-10 bg-white p-1 border rounded-sm`;

    return (
        <div >
            <div className='p-6 sm:p-10'>
                <div className='h-[60vh] flex flex-col justify-center'>
                    <h3 className='text-[16px] font-bold'>Peace Abiodun</h3>
                    <h1 className='text-3xl font-bold my-2'>Frontend Engineer</h1>
                    <p className='text-xs sm:text-sm'>And ofcourse, I made this myself!</p>
                </div>

                <div className='border-y'>
                    <div className='hidden sm:flex items-center py-6 justify-between gap-2'>
                        <div>
                            <FaJsSquare id="icon" size={30} className="cursor-pointer" />
                            <p id="show" className={style}>JavaScript</p>
                        </div>
                        <div>
                            <SiTypescript id="icon" size={26} className='rounded-sm cursor-pointer'/>
                            <p id="show" className={style}>TypeScript</p>
                        </div>
                        <div>
                            <FaReact id="icon" size={30} className="cursor-pointer" />
                            <p id="show" className={style}>React</p>
                        </div>
                        <div>
                            <SiTailwindcss id="icon" size={34} className="cursor-pointer" />
                            <p id="show" className={style}>Tailwindcss</p>
                        </div>
                        <div>
                            <p id="icon" className='font-bold flex text-lg items-center cursor-pointer'>CSS</p>
                            <p id="show" className={style}>CSS</p>
                        </div> 
                        <div>
                            <p id="icon" className='font-bold text-lg flex items-center cursor-pointer'>API</p>
                            <p id="show" className={style}>Restful APIs</p>
                        </div>
                        <div>
                            <BsGithub id="icon" size={28} className="cursor-pointer" />
                            <p id="show" className={style}>Git</p>
                        </div>
                        <div>
                            <FaNode id="icon" size={36} className="cursor-pointer" /> 
                            <p id="show" className={style}>NodeJs</p>
                        </div>   
                        
                    </div>

                    <div  className='py-6 flex flex-col sm:hidden gap-3' >
                        <div className='flex items-center justify-between'>
                            <div>
                                <FaJsSquare size={26}  id="icon" className="cursor-pointer" />
                                <p id="show" className={mobileStyle}>JavaScript</p>
                            </div>
                            <div>
                                <SiTypescript size={24} id="icon" className='rounded-sm cursor-pointer'/>
                                <p id="show" className={mobileStyle}>TypeScript</p>
                            </div>
                            <div>
                                <FaReact size={28} id="icon" className="cursor-pointer" />
                                <p id="show" className={mobileStyle}>React</p>
                            </div>
                            <div>
                                <SiTailwindcss size={32} id="icon" className="cursor-pointer" />
                                <p id="show" className={mobileStyle}>Tailwind</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div>
                                <p id="icon" className='font-bold flex items-center cursor-pointer'>CSS</p>
                                <p id="show" className={mobileStyle}>CSS</p>
                            </div>
                            <div>
                                <p id="icon" className='font-bold flex items-center cursor-pointer'>API</p>
                                <p id="show" className={mobileStyle}>Restful APIs</p>
                            </div>
                            <div>
                                <BsGithub size={26} id="icon" className="cursor-pointer"/>
                                <p id="show" className={mobileStyle}>Git</p>
                            </div>
                            <div>
                                <FaNode size={32} id="icon" className="cursor-pointer"/>
                                <p id="show" className={mobileStyle}>NodeJs</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    );
}
 
export default MainPage;
