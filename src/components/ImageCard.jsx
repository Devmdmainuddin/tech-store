// import banner from '/banner-1.jpg'
import product from '/product.jpg'
const ImageCard = () => {
    return (
        <section className="py-12 ">
        <div className="container mx-auto">
            <div className="flex flex-wrap py-6">

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 ">
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
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 ">
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
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 ">
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
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 ">
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
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 ">
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
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6 ">
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
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="w-full relative max-w-sm mx-auto h-auto ">
                    <img src="https://pagedone.io/asset/uploads/1688031162.jpg" alt="image" className="w-full max-w-sm mx-auto h-auto relative z-0" />
                    <a href="#" className=" absolute w-full h-full top-0 left-0 bg-indigo-600 opacity-0 z-10 transition-opacity duration-300 hover:opacity-40 "></a>
                </div>
                <div className="w-full relative max-w-sm mx-auto h-auto ">
                    <img src="https://pagedone.io/asset/uploads/1688031162.jpg" alt="image" className="w-full max-w-sm mx-auto h-auto relative z-0" />
                    <a href="#" className=" absolute w-full h-full top-0 left-0 bg-emerald-600 opacity-0 z-10 transition-opacity duration-300 hover:opacity-40 "></a>
                </div>
                <div className="w-full relative max-w-sm mx-auto h-auto ">
                    <img src="https://pagedone.io/asset/uploads/1688031162.jpg" alt="image" className="w-full max-w-sm mx-auto h-auto relative z-0" />
                    <a href="#" className=" absolute w-full h-full top-0 left-0 bg-amber-600 opacity-0 z-10 transition-opacity duration-300 hover:opacity-40 "></a>
                </div>
                <div className="w-full relative max-w-sm mx-auto h-auto ">
                    <img src="https://pagedone.io/asset/uploads/1688031162.jpg" alt="image" className="w-full max-w-sm mx-auto h-auto relative z-0" />
                    <a href="#" className=" absolute w-full h-full top-0 left-0 bg-red-600 opacity-0 z-10 transition-opacity duration-300 hover:opacity-40 "></a>
                </div>
                <div className="w-full relative max-w-sm mx-auto h-auto ">
                    <img src="https://pagedone.io/asset/uploads/1688031162.jpg" alt="image" className="w-full max-w-sm mx-auto h-auto relative z-0" />
                    <a href="#" className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-40 "></a>
                </div>
                <div className="w-full relative max-w-sm mx-auto h-auto ">
                    <img src="https://pagedone.io/asset/uploads/1688031162.jpg" alt="image" className="w-full max-w-sm mx-auto h-auto relative z-0" />
                    <a href="#" className=" absolute w-full h-full top-0 left-0 bg-black opacity-0 z-10 transition-opacity duration-300 hover:opacity-40 "></a>
                </div>
            </div>

            <div className="w-full relative ">
                <div className=" group h-72 w-80 mx-auto flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">
                    <img src="https://pagedone.io/asset/uploads/1688031162.jpg" alt="image" className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6" />
                    <div className="absolute h-full w-full bg-black/50 top-0 left-0"></div>
                </div>
            </div>

            <div className="w-full relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg ">
                        <img src="https://pagedone.io/asset/uploads/1688031162.jpg" alt="image" className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110" />
                    </div>
                    <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg ">
                        <img src="https://pagedone.io/asset/uploads/1688031162.jpg" alt="image" className="w-full h-auto relative z-0 rounded-lg scale-110 transition-all duration-300 hover:scale-100" />
                    </div>
                </div>
            </div>



            <div className="w-full xs:w-1/2 lg:w-1/3 px-4">
                <a className="block mb-10 group" href="#">
                    <div className="w-full h-64 bg-coolGray-200 rounded-xl mb-3 flex items-center justify-center relative flex-1 p-6 border-2 border-transparent group-hover:border-purple-500 transition duration-150">
                        <div className="absolute left-5 top-5 uppercase bg-orange-500 py-1 px-3 rounded-full text-white text-xs font-bold text-center">New</div>
                        <img src={product} alt="" />
                    </div>
                    <p className="text-rhino-700">Brown Original 64’s Jacket</p>
                    <p className="text-rhino-300">$ 249.00</p>
                </a>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-8">
                <a className="block group max-w-sm md:max-w-none mx-auto" href="#">
                    <div className="relative flex items-center justify-center h-96 mb-4 bg-coolGray-100 rounded-xl border-2 border-transparent group-hover:border-purple-500 transition duration-150 overflow-hidden">
                        <div className="absolute top-0 left-0 m-6">
                            <span className="inline-block py-1 px-3 mr-2 text-2xs text-white font-bold bg-orange-500 uppercase rounded-full">Hot stuff</span>
                        </div>
                        <img className="block" src={product} alt="" />
                    </div>
                    <div className="text-center">
                        <span className="block text-xl text-rhino-500 font-semibold mb-1">Summer Slim Shorts</span>
                        <span className="block text-base text-rhino-300">$ 79.00</span>
                    </div>
                </a>
            </div>
        </div>
    </section>
    );
};

export default ImageCard;