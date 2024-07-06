
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import banner from '/banner-1.jpg'
import { Navigation, Autoplay } from 'swiper/modules';


const HeroBanner = () => {

    console.log('banner', banner)
    return (
        <>
            <Swiper
                style={
                    {
                        "--swiper-navigation-background-color": "#fff",
                        "--swiper-navigation-color": "#fff",
                        "--swiper-navigation-size": "25px",
                        "--swiper-pagination-color": "#fff"
                    }
                }

                navigation={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay]} className="mySwiper">
                {/* {banner} */}
                <SwiperSlide className=''>
                    <div id="slide1" className={`h-[328px]  carousel-item relative w-full bg-[url('/banner-1.jpg')] bg-cover bg-center`}>
                        {/* <img  src="https://i.ibb.co/3TttPjT/pexels-dom-j-7304-227405.jpg" className="w-full h-[500px]  object-cover" /> */}
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide2" className="carousel-item relative w-full  ">

                        <img src={banner} className="w-full h-[328px] object-cover" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide3" className="carousel-item relative w-full ">
                        <img src={banner} className=" w-full h-[328px]  object-cover" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide4" className="carousel-item relative w-full ">
                        <img src={banner} className="w-full h-[328px] bg-center  object-cover " />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide3" className="carousel-item relative w-full ">
                        <img src={banner} className="w-full h-[328px]  object-cover" />
                    </div>
                </SwiperSlide>
                <SwiperSlide className=''>
                    <div id="slide2" className="carousel-item relative w-full ">
                        <img src={banner} className="w-full h-[328px]  object-cover" />

                    </div>
                </SwiperSlide>



            </Swiper>
            

        </>
    );
};

export default HeroBanner;