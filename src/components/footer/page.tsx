const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='px-5'>
      <div className=' text-[#FFFFFF] text-xs flex gap-2 items-center justify-center mt-10 mb-2 '>
        <div className='flex flex-row items-center justify-center'>
          <img src='/copyright.svg' alt='copyright' className='w-6 h-6' />
          <p className='ml-1'>Copyright</p>
        </div>

        <div className=''>
          <p>Peace Abiodun {year}</p>
        </div>
      </div>
      <a
        href='mailto:abiodunpeace8@gmail.com'
        rel='noopener noreferrer'
        target='_blank'
        className='text-[#FFFFFF] text-xs flex gap-2 items-center justify-center pb-6 hover:text-[#be06ec] transition-all duration-300 hover:underline '
      >
        abiodunpeace8@gmail.com
      </a>
    </footer>
  );
};

export default Footer;
