import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import qut from '/qut.png'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Testimonials = () => {

  return (

    <>

      <div className="mt-8 flex gap-4 lg:mt-0">
        <button
          aria-label="Previous slide"
          id="keen-slider-previous"
          className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
        >
          <FaArrowLeft />
        </button>

        <button
          aria-label="Next slide"
          id="keen-slider-next"
          className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
        >
          <FaArrowRight />
        </button>
      </div>

      <Swiper
        pagination={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination]} className="mySwiper">
        <SwiperSlide><div className=" max-w-[922px] py-[49px] px-[119px] mx-auto bg-slate-200 mt-[57px]">
          <div className="flex gap-6 text-lg font-normal">
            <img src={qut} alt="" className="w-11 h-11" />
            <p>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
          </div>
          <div className="flex justify-end mt-3">
            <p>- Tama Brown</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <button className="inline-block py-3 px-10  text-[14px]   font-semibold text-center text-blue-600 border border-blue-600  rounded-full" href="#">Leave Us A Review</button>
            <p>000</p>
          </div>

        </div></SwiperSlide>
        <SwiperSlide><div className=" max-w-[922px] py-[49px] px-[119px] mx-auto bg-slate-200 mt-[57px]">
          <div className="flex gap-6 text-lg font-normal">
            <img src={qut} alt="" className="w-11 h-11" />
            <p>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
          </div>
          <div className="flex justify-end mt-3">
            <p>- Tama Brown</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <button className="inline-block py-3 px-10  text-[14px]   font-semibold text-center text-blue-600 border border-blue-600  rounded-full" href="#">Leave Us A Review</button>
            <p>000</p>
          </div>

        </div></SwiperSlide>
        <SwiperSlide><div className=" max-w-[922px] py-[49px] px-[119px] mx-auto bg-slate-200 mt-[57px]">
          <div className="flex gap-6 text-lg font-normal">
            <img src={qut} alt="" className="w-11 h-11" />
            <p>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
          </div>
          <div className="flex justify-end mt-3">
            <p>- Tama Brown</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <button className="inline-block py-3 px-10  text-[14px]   font-semibold text-center text-blue-600 border border-blue-600  rounded-full" href="#">Leave Us A Review</button>
            <p>000</p>
          </div>

        </div></SwiperSlide>
        <SwiperSlide><div className=" max-w-[922px] py-[49px] px-[119px] mx-auto bg-slate-200 mt-[57px]">
          <div className="flex gap-6 text-lg font-normal">
            <img src={qut} alt="" className="w-11 h-11" />
            <p>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
          </div>
          <div className="flex justify-end mt-3">
            <p>- Tama Brown</p>
          </div>
          <div className="flex justify-between items-center mt-3">
            <button className="inline-block py-3 px-10  text-[14px]   font-semibold text-center text-blue-600 border border-blue-600  rounded-full" href="#">Leave Us A Review</button>
            <p>000</p>
          </div>

        </div></SwiperSlide>

      </Swiper>

    </>
  );
};

export default Testimonials;