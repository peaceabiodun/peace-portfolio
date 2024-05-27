const MainPage = () => {
  return (
    <div className='bg-main w-full h-full min-h-screen p-5 sm:p-10'>
      <div className='flex justify-center md:justify-between gap-4'>
        <div className='hidden md:block text-[#f0ecec] text-lg font-semibold'>
          Portfolio
        </div>
        <div className=' flex gap-4 p-3 text-[#f0ecec] bg-[#8d8b8b50] rounded-full text-sm font-semibold '>
          <p className='hover:text-[#8f3a7a] cursor-pointer'>Projects</p>
          <p className='hover:text-[#8f3a7a] cursor-pointer'>Get In Touch</p>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default MainPage;
