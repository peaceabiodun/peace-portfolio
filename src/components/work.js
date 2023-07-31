import { projects } from "../utils/data";

const Work = () => {
    return ( 
        <div className='p-10' id='work'>
            <h1 className='text-lg font-bold text-center mb-3'>My Latest work </h1>

            <div className='flex flex-col sm:flex-row justify-center gap-8'>
                {projects.map((item)=>(
                <div key={item.id} className=''>
                    <img src={item.image} alt='' className='w-[340px] h-[200px] border-2 border-black' />
                    <a href={item.link} className='font-bold text-sm my-2'>{item.title}</a>
                    <p className='text-xs max-w-[340px]'>{item.description}</p>
                </div>
                ))}
            </div>
        </div>
     );
}
 
export default Work;