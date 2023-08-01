import { Carousel } from "@material-tailwind/react";
import { projects } from "../utils/data";


const Work = () => {
    return ( 
        <div className='px-6 sm:px-10 pt-6 sm:pt-10 pb-[60px] ' id='work'>
            <h1 className='text-lg font-bold text-center mb-4'>My Latest work </h1>

            <div className="flex justify-center">
                <Carousel nextArrow={false} prevArrow={false}
                    className='w-[100%] sm:w-[80%] ' 
                    navigation={({ setActiveIndex, activeIndex, length }) =>(
                    <div className="absolute bottom-0 left-2/4 z-50 flex -translate-x-2/4 gap-2 bg-white">
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
                        <img src={item.image} alt='' className='w-full h-full border border-black' />
                        <a href={item.link} className='font-bold text-sm my-3 hover:text-[#8a2159]'>{item.title}</a>
                        <p className='text-xs max-w-[340px] mb-3'>{item.description}</p>
                    </div>
                    ))}
                </Carousel>
            </div>
        </div>
     );
}
 
export default Work;