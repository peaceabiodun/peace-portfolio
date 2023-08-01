import { IoClose } from "react-icons/io5";


const Menu = ({onClose}) => {
    return ( 
        <div className='bg-[#F6FEF9] w-full h-full flex flex-col sm:hidden fixed top-0 bottom-0 py-4 px-4 z-30'>
            <div className='text-[#05668D]'>
                <IoClose size={26} onClick={onClose} className='' />
            </div>
            <div className='my-3 mx-3 text-[#05668D] text-xl font-medium flex flex-col'>
                <a href="#work" className='py-3 px-2 hover:bg-[#e6e6f1]'>Work</a>
                <a href="#contact" className='py-3 px-2 hover:bg-[#e6e6f1]'>Contact</a>
            </div>

        </div>
     );
}
 
export default Menu;