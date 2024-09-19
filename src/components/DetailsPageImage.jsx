import { FiBarChart2 } from 'react-icons/fi';
import productImg from '/product.jpg'
import { FaRegHeart } from 'react-icons/fa';
import zip from '/zip.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import banner from '/banner-1.jpg'
import {  Autoplay, Pagination } from 'swiper/modules';

const DetailsPageImage = ({src}) => {
    return (
        <>
            <Swiper
              pagination={{
                clickable: true,
            }}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]} className="mySwiper  border">

                <SwiperSlide>
                    <div className="group  p-6">
                        <div className='relative overflow-hidden p-6 transition-all duration-300  '>
                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={src} alt="" />
                            <div className='absolute top-0 left-10  '>
                                <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full hover:scale-110' />
                                <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1 hover:scale-110' />
                                <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1 hover:scale-110' />
                            </div>

                        </div>

                        <div className="max-w-[263px]  mx-auto  py-6 flex justify-center items-center gap-2">
                            <img src={zip} alt="" className='w-[77px] h-8' /> <div className="w-[2px] h-4 bg-slate-500"></div> <h2 className='text-[12px] font-light'>own it now, up to 6 months interest free learn more</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="group  p-6">
                        <div className='relative overflow-hidden p-6 transition-all duration-300  '>
                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={src} alt="" />
                            <div className='absolute top-0 left-10  '>
                                <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full hover:scale-110' />
                                <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1 hover:scale-110' />
                                <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1 hover:scale-110' />
                            </div>

                        </div>

                        <div className="max-w-[263px]  mx-auto  py-6 flex justify-center items-center gap-2">
                            <img src={zip} alt="" className='w-[77px] h-8' /> <div className="w-[2px] h-4 bg-slate-500"></div> <h2 className='text-[12px] font-light'>own it now, up to 6 months interest free learn more</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="group  p-6">
                        <div className='relative overflow-hidden p-6 transition-all duration-300  '>
                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={src} alt="" />
                            <div className='absolute top-0 left-10  '>
                                <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full hover:scale-110' />
                                <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1 hover:scale-110' />
                                <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1 hover:scale-110' />
                            </div>

                        </div>

                        <div className="max-w-[263px]  mx-auto  py-6 flex justify-center items-center gap-2">
                            <img src={zip} alt="" className='w-[77px] h-8' /> <div className="w-[2px] h-4 bg-slate-500"></div> <h2 className='text-[12px] font-light'>own it now, up to 6 months interest free learn more</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="group  p-6">
                        <div className='relative overflow-hidden p-6 transition-all duration-300  '>
                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={src} alt="" />
                            <div className='absolute top-0 left-10  '>
                                <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full hover:scale-110' />
                                <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1 hover:scale-110' />
                                <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1 hover:scale-110' />
                            </div>

                        </div>

                        <div className="max-w-[263px]  mx-auto  py-6 flex justify-center items-center gap-2">
                            <img src={zip} alt="" className='w-[77px] h-8' /> <div className="w-[2px] h-4 bg-slate-500"></div> <h2 className='text-[12px] font-light'>own it now, up to 6 months interest free learn more</h2>
                        </div>
                    </div>
                </SwiperSlide>
                



            </Swiper>



        </>


    );
};

export default DetailsPageImage;