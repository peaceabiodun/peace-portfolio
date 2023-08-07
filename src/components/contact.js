import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa"
import { MdEmail } from "react-icons/md";



const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [message, setMessage]= useState('');
  const form = useRef();

  const disable = () => {
    return name.length === 0 || email === 0 || message === 0 
    };


  const sendFeedback = async (e) => {
    e.preventDefault();
    setLoading(true);
    try{
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID, 
        process.env.REACT_APP_TEMPLATE_ID, 
        form.current, 
        process.env.REACT_APP_PUBLIC_KEY,
        );
      toast.success("Form Submitted Sucessfully!", {
        position: toast.POSITION.TOP_RIGHT
      });
      setLoading(false);
      form.current.reset();
      setName('')
      setEmail('')
      setMessage('')
    } catch(error){
      console.log("Error submitting form:", error);
      setLoading(false);
    }
  };

  

    return ( 
        <div id="contact" >
           <ToastContainer  />
          <div className="mx-5 sm:mx-10 mt-5 py-6 sm:py-10 border-t flex flex-col sm:flex-row gap-10 ">
            <div className="flex flex-col w-full ">
              <h2 className="font-bold text-lg">Let’s work together</h2>
              <p className="text-sm max-w-[90%] my-4">Feel free to contact me through any of the provided platforms, or simply send me a message right here.</p>
              <div className="flex gap-4 my-2">
                <a href="mailto:abiodunpeace8@gmail.com"><MdEmail size={20} className='cursor-pointer' /></a>
                <a href="https://www.linkedin.com/in/peaceabiodun/"><FaLinkedin size={20} className='cursor-pointer'/></a>
                <a href="https://twitter.com/_fine_peace_"><FaTwitter size={20} className='cursor-pointer'/></a>
                <a href="https://github.com/peaceabiodun"><FaGithub size={20} className='cursor-pointer'/></a>
              </div>
            </div>

            <div className="w-full" >
              <form ref={form} onSubmit={sendFeedback} className="flex flex-col gap-4 text-sm">
                <input 
                  type="text"
                  name="user_name"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  placeholder="Name"
                  className="bg-[#F3F3F3] w-[90%] md:w-[80%] text-[#2D2D2D]  h-[35px] p-2 outline-none"
                />

                <input 
                  type="email"
                  name="user_email"
                  placeholder="Email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  className="bg-[#F3F3F3] w-[90%] md:w-[80%] h-[35px] p-2 outline-none"
                />

                <textarea 
                  name="message"
                  placeholder="Type your message here"
                  value={message}
                  onChange={(e)=> setMessage(e.target.value)}
                  className="bg-[#F3F3F3] w-[90%] md:w-[80%] h-[150px] p-2 outline-none"
                />

                <button type="submit" disabled={disable()} className={`${disable() ?'bg-[#7e7a7a] cursor-not-allowed':'bg-[#2D2D2D] cursor-pointer'}  text-white w-[90%] md:w-[80%] h-[35px] tetx-sm`}>
                  {loading? "loading...":"Submit"}
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