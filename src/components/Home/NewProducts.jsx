import { Link } from "react-router-dom";
import Container from "../shared/Container";
import Products01 from "../card/Products01";
import { ProductContext } from "../../contexts/ProductContextProvider";
import { useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const NewProducts = () => {
    const { products } = useContext(ProductContext)
    return (
        <div>
            <Container>
                <div className="flex justify-between items-center mt-[33px] ">
                    <h2 className="text-[22px] font-semibold">New Products</h2>
                    <Link Link to='/all-products' className="text-[#0156FF] text-[13px] font-normal">See All New Products</Link>
                </div>
               
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        breakpoints={{
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
                          }}
        
                        className="mySwiper"
                    >
                       {products.slice(0,9).map((item, idx) =>
                    <SwiperSlide key={idx}> <Products01  item={item}></Products01> </SwiperSlide>
                       
                    )}
                       
                    </Swiper>
                    
               

            </Container>

        </div>
    );
};

export default NewProducts;