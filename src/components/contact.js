import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();
  const currentYear = new Date().getFullYear();

  const disable = () => {
    return !name || !email || !message;
  };

  const sendFeedback = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      );
      toast.success('Form Submitted Sucessfully!', {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
      form.current.reset();
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.log('Error submitting form:', error);
      setLoading(false);
    }
  };

  return (
    <div id='contact'>
      <ToastContainer />
      <div className='py-5 sm:py-10 border-t border-[#5e1b5383] flex flex-col sm:flex-row gap-10 '>
        <div className='flex flex-col w-full text-[#d6d0d0] '>
          <h2 className='font-semibold text-lg md:text-2xl'>
            Let’s work together
          </h2>
          <p className='text-sm md:max-w-[90%] my-4'>
            Feel free to contact me through any of the provided platforms, or
            simply send me a message right here.
          </p>
          <div className='flex gap-4 my-2 text-[#9736aa]'>
            <a
              href='mailto:abiodunpeace8@gmail.com'
              className='bg-[#8a87873d] p-2 rounded-full'
            >
              <MdEmail size={30} className='cursor-pointer' />
            </a>
            <a
              href='https://www.linkedin.com/in/peaceabiodun/'
              className='bg-[#8a87873d] p-2 rounded-full'
            >
              <FaLinkedin size={30} className='cursor-pointer' />
            </a>
            <a
              href='https://twitter.com/_fine_peace_'
              className='bg-[#8a87873d] p-2 rounded-full'
            >
              <FaTwitter size={30} className='cursor-pointer' />
            </a>
            <a
              href='https://github.com/peaceabiodun'
              className='bg-[#8a87873d] p-2 rounded-full'
            >
              <FaGithub size={30} className='cursor-pointer' />
            </a>
          </div>
        </div>

        <div className='w-full'>
          <form
            ref={form}
            onSubmit={sendFeedback}
            className='flex flex-col gap-4 text-sm'
          >
            <input
              type='text'
              name='user_name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Full Name'
              className='bg-[#F3F3F3] w-full md:w-[80%] text-[#2D2D2D]  h-[35px] p-2 outline-none'
            />

            <input
              type='email'
              name='user_email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-[#F3F3F3] w-full md:w-[80%] h-[35px] p-2 outline-none'
            />

            <textarea
              name='message'
              placeholder='Type your message here'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='bg-[#F3F3F3] w-full md:w-[80%] h-[150px] p-2 outline-none'
            />

            <button
              type='submit'
              disabled={disable()}
              className={`${
                disable()
                  ? 'bg-[#684d6b] cursor-not-allowed'
                  : 'bg-[#220920] cursor-pointer'
              }  text-white w-full md:w-[80%] h-[35px] tetx-sm`}
            >
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
      <div className='border-t border-[#5e1b5383]'>
        <p className='p-5 text-[12px] text-center text-white'>
          © {currentYear} peace abiodun{' '}
        </p>
      </div>
    </div>
  );
};

export default Contact;
