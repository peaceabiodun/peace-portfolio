import {FaGithub, FaLinkedin, FaDiscord, FaTwitter} from "react-icons/fa"
import { MdEmail } from "react-icons/md";



const Contact = () => {
    return ( 
        <div id="contact" >
          <div className=" mx-10 py-10 border-t flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col w-full  ">
              <h2 className="font-bold text-lg">Let’s work together</h2>
              <p className="text-sm max-w-[300px] my-4">You can reach out to me on any of the platforms below or just send me a message here </p>
              <div className="flex gap-4 my-2">
                <a href="mailto:abiodunpeace8@gmail.com"><MdEmail size={20} className='cursor-pointer' /></a>
                <a href="https://www.linkedin.com/in/peaceabiodun/"><FaLinkedin size={20} className='cursor-pointer'/></a>
                <a href="https://twitter.com/_fine_peace_"><FaTwitter size={20} className='cursor-pointer'/></a>
                <a href="https://github.com/peaceabiodun"><FaGithub size={20} className='cursor-pointer'/></a>
              </div>
            </div>

            <div className="w-full" >
              <form className="flex flex-col gap-4 text-sm">
                <input 
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="bg-[#F3F3F3] text-[#2D2D2D] w-[300px] h-[35px] p-2 outline-none"
                />

                <input 
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="bg-[#F3F3F3] w-[300px] h-[35px] p-2 outline-none"
                />

                <textarea 
                  name="text"
                  placeholder="Type your message here"
                  className="bg-[#F3F3F3] w-[300px] h-[150px] p-2 outline-none"
                />

                <button className="bg-[#2D2D2D] text-white w-[300px] h-[35px] tetx-sm">
                  Submit
                </button>
              </form>
            </div>

          </div>
          <div className="border-t">
            <p className="p-2 text-[12px] text-center">© 2023 peace abiodun </p>
          </div>
        </div>
     );
}
 
export default Contact;