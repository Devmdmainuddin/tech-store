import { FaRegHeart, FaStar } from 'react-icons/fa';
import { ImStarHalf } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';
import { FiBarChart2 } from 'react-icons/fi';
import { MdDone } from 'react-icons/md';
import { useEffect, useRef,  } from "react";
import { register } from "swiper/element/bundle";
import { useGetproductsQuery } from '../featured/productApi';

register();




const SingleCard = () => {

    const swiperRef = useRef(null);
    const { data: products, error, isLoading } = useGetproductsQuery()
    
   



    useEffect(() => {
        const swiperContainer = swiperRef.current;
        const params = {
            navigation: true,
            loop: true,
            //  slidesPerView: 2,
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                1280: {
                    slidesPerView: 6,
                    spaceBetween: 10,
                },
            },
    
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

    if (isLoading) {
        <p>Loading cart...</p>
    } else if (error) {
        <p>Error: {error.message}</p>
    }


    return (
        <>
            <swiper-container ref={swiperRef} init="false" className='flex flex-wrap py-6'>
                {products && products.slice(0, 10).map((products, idx) =>
                    <swiper-slide class="blue-slide " key={idx}>
                        <div className="group">
                            <div className="block  transition-all duration-300 md:p-6 p-2   group-hover:shadow-xl ">
                                <div className="p-6 ">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />{products.status}</span>
                                    <Link to={`/products/${products.id}`} className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={products.image} alt="" />
                                        <div className='absolute top-4 -right-10 group-hover:right-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                            <FaRegHeart className='p-1 border border-[#0bdfe2] text-3xl text-[#A2A6B0] rounded-full' />
                                            <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1' />
                                        </div>

                                    </Link>

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

                                        <h6 className="font-normal text-sm  mt-2 mb-5">{products.title}</h6>
                                        <div className='flex flex-col mb-2'>
                                            <span className="font-bold  line-through text-[#666666]">${products.price}</span>
                                            <span className=" text-lg font-semibold">${products.discount_price}</span>
                                        </div>


                                    </div>
                                </div>
                                <div className=' overflow-hidden    opacity-0 transition-all duration-500 invisible  w-full group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                    <button className=" flex gap-2 justify-center items-center w-full rounded-full border-2 border-[#0156FF] text-[#0156FF]  p-2  "><BsCart /> add To Cart</button>
                                </div>

                            </div>


                        </div>
                    </swiper-slide>
                )
                }
            </swiper-container>


        </>

    );
};

export default SingleCard;