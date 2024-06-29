// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useEffect, useRef } from 'react';
import qut from '/qut.png'
// import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from "swiper/element/bundle";
register();
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
const Testimonials = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      pagination:true,
      // navigation: true,
      loop: true,
      slidesPerView: 1,
      // spaceBetween:30,
      // These are new...
      injectStyles: [
        `
          // .swiper-button-next,
          // .swiper-button-prev {
          //   background-color: #666666;
          //   padding: 8px 16px;
          //   border-radius: 100%;
          //   border:1px solid #666666;
          //   color: white;
          //   transition:all 0.4s;
          // }
          //   .swiper-button-next:hover,
          // .swiper-button-prev:hover{
          // border:1px solid #0156FF;
          // color:#0156FF;
          // background-color: #A2A6B0;
          // }

          .swiper-horizontal>
          .swiper-pagination-bullets, 
          .swiper-pagination-bullets,
          .swiper-pagination-horizontal{
          bottom:60px;
          right:90px;
          width:300px;
left:auto;
          margin-right:30px;
          }
          .swiper-pagination{
          text-align:right;
          
          
          
          
          
          }
          
        
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);




  return (

    <>
      <swiper-container ref={swiperRef} init="false" className='flex  max-w-[922px] px-6 py-6'>
        <swiper-slide class="blue-slide">
          <div className=" py-[49px] px-[119px] mx-auto bg-slate-200 mt-[57px]">
            <div className="flex gap-6 text-lg font-normal">
              <img src={qut} alt="" className="w-11 h-11" />
              <p>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
            </div>
            <div className="flex justify-end mt-3">
              <p>- Tama Brown</p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <button className="inline-block py-3 px-10  text-[14px]   font-semibold text-center text-blue-600 border border-blue-600  rounded-full" href="#">Leave Us A Review</button>
             
            </div>

          </div>
        </swiper-slide>
        <swiper-slide class="blue-slide">
          <div className=" py-[49px] px-[119px] mx-auto bg-slate-200 mt-[57px]">
            <div className="flex gap-6 text-lg font-normal">
              <img src={qut} alt="" className="w-11 h-11" />
              <p>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
            </div>
            <div className="flex justify-end mt-3">
              <p>- Tama Brown</p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <button className="inline-block py-3 px-10  text-[14px]   font-semibold text-center text-blue-600 border border-blue-600  rounded-full" href="#">Leave Us A Review</button>
              
            </div>

          </div>
        </swiper-slide>
        <swiper-slide class="blue-slide">
          <div className=" py-[49px] px-[119px] mx-auto bg-slate-200 mt-[57px]">
            <div className="flex gap-6 text-lg font-normal">
              <img src={qut} alt="" className="w-11 h-11" />
              <p>My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
            </div>
            <div className="flex justify-end mt-3">
              <p>- Tama Brown</p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <button className="inline-block py-3 px-10  text-[14px]   font-semibold text-center text-blue-600 border border-blue-600  rounded-full" href="#">Leave Us A Review</button>
             
            </div>

          </div>
        </swiper-slide>
      
      

      </swiper-container>


      {/* <div className="mt-8 flex gap-4 lg:mt-0">
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
      </div> */}
      <div>
        {/* <Swiper
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

        </Swiper> */}
      </div>


    </>
  );
};

export default Testimonials;