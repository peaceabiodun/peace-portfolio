import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";



const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [stickyNav, setStickyNav] = useState(false);

    const changeNavBackground = () => {
        if(window.scrollY >=57) {
            setStickyNav(true)
        } else {
            setStickyNav(false)
        }
    };

    useEffect(() => {
        changeNavBackground();
        window.addEventListener("scroll", changeNavBackground);
        return () => {
          window.removeEventListener("scroll", changeNavBackground);
        };
      }, []);

    return (
        <div className={stickyNav?  'bg-[#F3F3F3] flex justify-between p-4 text-[16px] font-bold border-b border-b-[#241f13] fixed top-0 z-50 w-full': 'bg-white flex justify-between p-4 text-[16px] font-bold border-b border-b-[#241f13]'}>
            <div>
                <h1>Portfolio</h1>
            </div>
            
            <div > 
                <div className='hidden sm:flex gap-4'>
                    <a href="#work" >work</a>
                    <a href="#contact"> contact</a>
                </div>
                
                <div className="sm:hidden flex" >
                    <RiMenu3Fill size={20} onClick={()=> setOpenMenu(!openMenu)} />
                </div>
            </div>

            {openMenu&&
            <div className="bg-white absolute flex flex-col p-3 space-y-2 rounded-md text-sm right-4 top-[57px] shadow-md w-[50%] h-[70px]">
                <a href="#work" >work</a>
                <a href="#contact"> contact</a>
            </div>}
        </div> 
        
     );
}
 
export default NavBar;


