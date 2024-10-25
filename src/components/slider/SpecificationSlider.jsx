import { Swiper, SwiperSlide } from 'swiper/react';
import intel from '/intel.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Container from '../shared/Container';
const SpecificationSlider = () => {
    return (
        <div className=''>
            <Swiper
            loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>


                    <section className="w-full relative bg-[url(/intel.jpg)] bg-cover bg-center bg-no-repeat h-[681px]">

                        <Container>
                            <div className='relative py-32 sm:px-6 flex h-screen items-center'>
                                <div className="max-w-[464px] ">
                                    <h1 className="lg:text-[44px] text-2xl leading-snug font-medium text-white ">
                                        Outplay the Competittion
                                    </h1>

                                    <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                                        Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
                                    </p>
                                    <p className='mt-4 max-w-lg text-white sm:text-xl/relaxed'>
                                        *Performance compared to i7-9700. Specs varies by model.
                                    </p>


                                </div>
                            </div>
                        </Container>



                    </section>
                </SwiperSlide>
                <SwiperSlide>


                    <section className="w-full relative bg-[url(/intel.jpg)] bg-cover bg-center bg-no-repeat h-[681px]">

                        <Container>
                            <div className='relative py-32 sm:px-6 flex h-screen items-center '>
                                <div className="max-w-[464px] ">
                                    <h1 className="lg:text-[44px] text-2xl leading-snug font-medium text-white ">
                                        Outplay the Competittion
                                    </h1>

                                    <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                                        Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
                                    </p>
                                    <p className='mt-4 max-w-lg text-white sm:text-xl/relaxed'>
                                        *Performance compared to i7-9700. Specs varies by model.
                                    </p>


                                </div>
                            </div>

                        </Container>



                    </section>
                </SwiperSlide>
                <SwiperSlide>


                    <section className="w-full relative bg-[url(/intel.jpg)] bg-cover bg-center bg-no-repeat h-[681px]">

                        <Container>
                            <div className='relativepy-32 sm:px-6 lg:flex lg:h-screen lg:items-center '>
                                <div className="max-w-[464px] ">
                                    <h1 className="lg:text-[44px] text-2xl leading-snug font-medium text-white ">
                                        Outplay the Competittion
                                    </h1>

                                    <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                                        Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.
                                    </p>
                                    <p className='mt-4 max-w-lg text-white sm:text-xl/relaxed'>
                                        *Performance compared to i7-9700. Specs varies by model.
                                    </p>


                                </div>
                            </div>
                        </Container>



                    </section>
                </SwiperSlide>
               


            </Swiper>
        </div>
    );
};

export default SpecificationSlider;