import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";



const NavBar = () => {
    const [state, setState] =useState(false)

    return (
        <div className='bg-[#e0e0e0] flex justify-between p-4 text-[16px] font-bold border-b border-b-black'>
            <div>
                <h1>Portfolio</h1>
            </div>
            
            <div > 
                <div className='hidden sm:flex gap-4'>
                    <a href="#work" >work</a>
                    <a href="#contact"> contact</a>
                </div>
                
                <div className="sm:hidden flex" onClick= {() => setState(!state)}>
                    <RiMenu3Fill size={20} />
                </div>
            </div>
            
        </div> 
        
     );
}
 
export default NavBar;


