const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className=' text-[#FFFFFF] text-xs flex gap-2 items-center justify-center mt-10 mb-3 '>
        <div className='flex flex-row items-center justify-center'>
          <img src='/copyright.svg' alt='copyright' className='w-6 h-6' />
          <p className='ml-1'>Copyright</p>
        </div>

        <div className=''>
          <p>Peace Abiodun {year}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
