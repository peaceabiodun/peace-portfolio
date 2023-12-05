import Slider from 'react-slick';
import { projects } from '../utils/data';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Work = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 4000,
    swipe: true,
    draggable: true,
  };
  return (
    <div className='px-6 sm:px-10 pt-6 sm:pt-10 pb-[60px] ' id='work'>
      <h1 className='text-[16px] font-bold text-center mb-4'>
        Some of My Latest Works{' '}
      </h1>

      <div className='flex items-center justify-center'>
        <Slider autoplay {...settings} className='w-[100%] sm:w-[80%] flex'>
          {projects.map((item) => (
            <div key={item.id} className='flex flex-col items-center '>
              <Link to={item.link}>
                <img
                  src={item.image}
                  alt=''
                  className='w-full h-full border shadow-md cursor-pointer'
                />
              </Link>
              <div className='my-4 flex flex-col items-center'>
                <Link
                  to={item.link}
                  className='font-bold text-sm hover:text-[#8a2159]'
                >
                  {item.title}
                </Link>
                <p className='text-sm font-medium max-w-[340px] mt-2'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Work;
