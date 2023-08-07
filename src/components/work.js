import { Carousel } from "@material-tailwind/react";
import { projects } from "../utils/data";
import { Link } from "react-router-dom";


const Work = () => {

    return ( 
        <div className='px-6 sm:px-10 pt-6 sm:pt-10 pb-[60px] ' id='work'>
            <h1 className='text-[16px] font-bold text-center mb-4'>Some of My Latest work </h1>

            <div className="flex justify-center">
                <Carousel 
                  className='w-[100%] sm:w-[80%] ' 
                  navigation={({ setActiveIndex, activeIndex, length }) =>(
                    <div className="absolute bottom-0 left-2/4 z-30 flex -translate-x-2/4 gap-2 bg-white">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i ? "w-8 bg-[#787879]" : "w-4 bg-[#ceced3]"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                  )}>
                    {projects.map((item)=>(
                    <div key={item.id} className='flex flex-col items-center'>
                        <Link  to={item.link}><img src={item.image} alt='' className='w-full h-full border shadow-md cursor-pointer' /></Link>
                        <Link to={item.link} className='font-bold text-sm my-4 hover:text-[#8a2159]'>{item.title}</Link>
                        <p className='text-sm font-medium max-w-[340px] mb-3'>{item.description}</p>
                    </div>
                    ))}

                    
                </Carousel>
            </div>
        </div>
     );
}
 
export default Work;