import ContentCard from '../cards/ContentCard';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import './ContentSlider.css';

SwiperCore.use([Navigation, Pagination]);

export default function ContentSlider({ title, courses, category }) {
  return (
    <div className="w-full flex justify-center">
      <div className="flex-col w-full">
        <div className="text-3xl text-d-text font-bold mb-4 mx-auto pl-6 md:pl-12 lg:pl-16 xl:pl-40">{title}</div>
        {/* <div className="flex w-[1400px] mx-auto justify-between absolute translate-y-28">
          <img
            className="rotate-180 -translate-x-12"
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/100/f1f1f1/more-than.png"
            alt="more-than"
          />
          <img
            className="translate-x-12"
            width="50"
            height="50"
            src="https://img.icons8.com/ios-filled/100/f1f1f1/more-than.png"
            alt="more-than"
          />
        </div> */}

        <div className='overflow-x-scroll w-full h-fit gap-8 flex pl-6 md:pl-12 lg:pl-16 xl:pl-40'>
          {courses.map((course)=>{
            return <ContentCard category={category} courses={course}/>
          })}
        </div>
      </div>
    </div>
  );
}
