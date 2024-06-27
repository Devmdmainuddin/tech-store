import { FaRegHeart, FaStar } from 'react-icons/fa';
import product from '/product.jpg'
import { ImStarHalf } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';
import { FiBarChart2 } from 'react-icons/fi';
import { MdDone } from 'react-icons/md';
import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";

import SingleBanner from './banner/SingleBanner';
register();




const SingleCard = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: true,
            loop: true,
            slidesPerView:6,
            // spaceBetween:30,
            // These are new...
            injectStyles: [
                `
              .swiper-button-next,
              .swiper-button-prev {
                background-color: #666666;
                padding: 8px 16px;
                border-radius: 100%;
                border:1px solid #666666;
                color: white;
                transition:all 0.4s;
              }
                .swiper-button-next:hover,
              .swiper-button-prev:hover{
              border:1px solid #0156FF;
              color:#0156FF;
              background-color: #A2A6B0;
              }
            
          `,
            ],
        };

        Object.assign(swiperContainer, params);
        swiperContainer.initialize();
    }, []);

    return (
        <>
            <swiper-container ref={swiperRef} init="false" className='flex flex-wrap py-6'>
                <swiper-slide class="blue-slide">
                    <div className="">
                        <div className="block p-px group ">
                            <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                <div className='relative overflow-hidden'>
                                    <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={product} alt="" />
                                    <div className='absolute top-4 -right-10 group-hover:right-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                        <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full' />
                                        <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1' />
                                    </div>

                                </div>


                                <div className="relative block ">
                                    <div className='flex justify-between'>
                                        <div className="flex  mb-3 text-[#E9A426]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <ImStarHalf />
                                        </div>
                                        <span className="block text-sm font-medium text-gray-500"> reviews (4)</span>

                                    </div>

                                    <h6 className="font-normal text-sm  mt-2 mb-5">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h6>
                                    <div className='flex flex-col mb-2'>
                                        <span className="font-bold  line-through text-[#666666]">$249</span>
                                        <span className=" text-lg font-semibold">$149</span>
                                    </div>
                                    <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                        <Link className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2"><BsCart /> add To Cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </swiper-slide>
                <swiper-slide class="blue-slide">
                    <div className="">
                        <div className="block p-px group ">
                            <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                <div className='relative overflow-hidden'>
                                    <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={product} alt="" />
                                    <div className='absolute top-4 -right-10 group-hover:right-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                        <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full' />
                                        <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1' />
                                    </div>

                                </div>


                                <div className="relative block ">
                                    <div className='flex justify-between'>
                                        <div className="flex  mb-3 text-[#E9A426]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <ImStarHalf />
                                        </div>
                                        <span className="block text-sm font-medium text-gray-500"> reviews (4)</span>

                                    </div>

                                    <h6 className="font-normal text-sm  mt-2 mb-5">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h6>
                                    <div className='flex flex-col mb-2'>
                                        <span className="font-bold  line-through text-[#666666]">$249</span>
                                        <span className=" text-lg font-semibold">$149</span>
                                    </div>
                                    <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                        <Link className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2"><BsCart /> add To Cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </swiper-slide>
                <swiper-slide class="yellow-slide">
                    <div className=" ">
                        <div className="block p-px group ">
                            <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                <div className='relative overflow-hidden'>
                                    <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={product} alt="" />
                                    <div className='absolute top-4 -right-10 group-hover:right-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                        <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full' />
                                        <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1' />
                                    </div>

                                </div>


                                <div className="relative block ">
                                    <div className='flex justify-between'>
                                        <div className="flex  mb-3 text-[#E9A426]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <ImStarHalf />
                                        </div>
                                        <span className="block text-sm font-medium text-gray-500"> reviews (4)</span>

                                    </div>

                                    <h6 className="font-normal text-sm  mt-2 mb-5">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h6>
                                    <div className='flex flex-col mb-2'>
                                        <span className="font-bold  line-through text-[#666666]">$249</span>
                                        <span className=" text-lg font-semibold">$149</span>
                                    </div>
                                    <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                        <Link className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2"><BsCart /> add To Cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </swiper-slide>
                <swiper-slide class="green-slide">
                    <div className="">
                        <div className="block p-px group ">
                            <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                <div className='relative overflow-hidden'>
                                    <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={product} alt="" />
                                    <div className='absolute top-4 -right-10 group-hover:right-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                        <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full' />
                                        <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1' />
                                    </div>

                                </div>


                                <div className="relative block ">
                                    <div className='flex justify-between'>
                                        <div className="flex  mb-3 text-[#E9A426]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <ImStarHalf />
                                        </div>
                                        <span className="block text-sm font-medium text-gray-500"> reviews (4)</span>

                                    </div>

                                    <h6 className="font-normal text-sm  mt-2 mb-5">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h6>
                                    <div className='flex flex-col mb-2'>
                                        <span className="font-bold  line-through text-[#666666]">$249</span>
                                        <span className=" text-lg font-semibold">$149</span>
                                    </div>
                                    <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                        <Link className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2"><BsCart /> add To Cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </swiper-slide>
                <swiper-slide class="blue-slide">
                    <div className=" ">
                        <div className="block p-px group ">
                            <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                <div className='relative overflow-hidden'>
                                    <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={product} alt="" />
                                    <div className='absolute top-4 -right-10 group-hover:right-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                        <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full' />
                                        <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1' />
                                    </div>

                                </div>


                                <div className="relative block ">
                                    <div className='flex justify-between'>
                                        <div className="flex  mb-3 text-[#E9A426]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <ImStarHalf />
                                        </div>
                                        <span className="block text-sm font-medium text-gray-500"> reviews (4)</span>

                                    </div>

                                    <h6 className="font-normal text-sm  mt-2 mb-5">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h6>
                                    <div className='flex flex-col mb-2'>
                                        <span className="font-bold  line-through text-[#666666]">$249</span>
                                        <span className=" text-lg font-semibold">$149</span>
                                    </div>
                                    <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                        <Link className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2"><BsCart /> add To Cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </swiper-slide>
                <swiper-slide class="yellow-slide">
                    <div className="">
                        <div className="block p-px group ">
                            <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                <div className='relative overflow-hidden'>
                                    <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={product} alt="" />
                                    <div className='absolute top-4 -right-10 group-hover:right-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                        <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full' />
                                        <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1' />
                                    </div>

                                </div>


                                <div className="relative block ">
                                    <div className='flex justify-between'>
                                        <div className="flex  mb-3 text-[#E9A426]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <ImStarHalf />
                                        </div>
                                        <span className="block text-sm font-medium text-gray-500"> reviews (4)</span>

                                    </div>

                                    <h6 className="font-normal text-sm  mt-2 mb-5">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h6>
                                    <div className='flex flex-col mb-2'>
                                        <span className="font-bold  line-through text-[#666666]">$249</span>
                                        <span className=" text-lg font-semibold">$149</span>
                                    </div>
                                    <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                        <Link className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2"><BsCart /> add To Cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </swiper-slide>
                <swiper-slide class="green-slide">
                    <div className="">
                        <div className="block p-px group ">
                            <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                <div className='relative overflow-hidden'>
                                    <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={product} alt="" />
                                    <div className='absolute top-4 -right-10 group-hover:right-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                        <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full' />
                                        <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1' />
                                    </div>

                                </div>


                                <div className="relative block ">
                                    <div className='flex justify-between'>
                                        <div className="flex  mb-3 text-[#E9A426]">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <ImStarHalf />
                                        </div>
                                        <span className="block text-sm font-medium text-gray-500"> reviews (4)</span>

                                    </div>

                                    <h6 className="font-normal text-sm  mt-2 mb-5">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h6>
                                    <div className='flex flex-col mb-2'>
                                        <span className="font-bold  line-through text-[#666666]">$249</span>
                                        <span className=" text-lg font-semibold">$149</span>
                                    </div>
                                    <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                        <Link className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2"><BsCart /> add To Cart</Link>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </swiper-slide>

            </swiper-container>
  
        </>

    );
};

export default SingleCard;