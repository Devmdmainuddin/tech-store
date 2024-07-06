import { Link } from "react-router-dom";
import HeroBanner from "../components/banner/HeroBanner";
import SingleCard from "../components/SingleCard";
import SingleBanner from "../components/banner/SingleBanner";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { ImStarHalf } from "react-icons/im";
import { FiBarChart2 } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import builds from '/custome_builds.jpg'
import laptops from '/laptops.jpg'
import desktops from '/desktops.jpg'
import monitor from '/monitor.jpg'
import build from '/builds.jpg'
import laptop from '/laptop.jpg'
import zip from '/zip.png'
import monitors from '/monitors.jpg'

import { BsCart } from "react-icons/bs";
import Partnar from "../components/Partnar";
import Blogs from "../components/Blogs";
import Testimonials from "../components/Testimonials";
import Benefits from "../components/Benefits";

const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>

            <div className="flex justify-between items-center mt-[33px] max-w-[1398px] mx-auto px-6">
                <h2 className="text-[22px] font-semibold">New Products</h2>
                <Link Link to='/all-products' className="text-[#0156FF] text-[13px] font-normal">See All New Products</Link>
            </div>
            <div className=" max-w-[1398px] mx-auto px-6">
                <SingleCard></SingleCard>
            </div>
            <div className="max-w-[1398px] px-6 mx-auto bg-[#F5F7FF] py-6 flex justify-center items-center gap-6">
                <img src={zip} alt="" /> <div className="w-[2px] h-3 bg-slate-500"></div> <h2>own it now, up to 6 months interest free learn more</h2>
            </div>

            <div className="max-w-[1398px] mx-auto px-6  my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                <SingleBanner image={builds} categoreys='Custome Builds'></SingleBanner>
                <Link to='/products-Details' className="">
                    <div className="block p-px group ">
                        <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                            <div className='relative overflow-hidden'>
                                <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={build} alt="" />
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

                </Link>
                <Link to='/products-Details' className="">
                    <div className="block p-px group ">
                        <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                            <div className='relative overflow-hidden'>
                                <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={build} alt="" />
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

                </Link>
                <Link to='/products-Details' className="">
                    <div className="block p-px group ">
                        <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                            <div className='relative overflow-hidden'>
                                <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={build} alt="" />
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

                </Link>
                <Link to='/products-Details' className="">
                    <div className="block p-px group ">
                        <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                            <div className='relative overflow-hidden'>
                                <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={build} alt="" />
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

                </Link>
                <Link to='/products-Details' className="">
                    <div className="block p-px group ">
                        <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                            <div className='relative overflow-hidden'>
                                <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={build} alt="" />
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

                </Link>
               
            </div>
            <Tabs className='max-w-[1398px] mx-auto px-6'>
                <TabList>
                    <Tab>MSI Infinute Series</Tab>
                    <Tab>MSI Triden</Tab>
                    <Tab>MSI GL Series</Tab>
                    <Tab>MSI Nightblade</Tab>
                </TabList>

                <TabPanel>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                        <SingleBanner image={laptops} categoreys='MSI Laptops'></SingleBanner>

                        <Link to='/products-Details' className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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

                        </Link>
                        <Link to='/products-Details' className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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

                        </Link>
                        <Link to='/products-Details' className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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

                        </Link>
                        <Link to='/products-Details' className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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

                        </Link>
                        <Link to='/products-Details' className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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

                        </Link>
                      
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                        <SingleBanner image={desktops} categoreys='Desktops'></SingleBanner>

                        <Link to='/products-Details' className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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

                        </Link>
                        <Link to='/products-Details' className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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

                        </Link>
                        <Link to='/products-Details' className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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

                        </Link>
                        <Link to='/products-Details' className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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

                        </Link>
                        <Link to='/products-Details' className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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

                        </Link>
                    
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                        <SingleBanner image={monitor} categoreys='Gaming Monitors'></SingleBanner>

                        <div className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                        <div className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                        <div className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                        <div className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                        <div className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                </TabPanel>
                <TabPanel>
                    <div className="my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                        <SingleBanner image={laptops} categoreys='MSI Laptops'></SingleBanner>

                        <div className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                        <div className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                        <div className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                        <div className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                        <div className="">
                            <div className="block p-px group ">
                                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                    <div className='relative overflow-hidden'>
                                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                </TabPanel>

            </Tabs>
            {/* tabs products */}
            <div>
                <Tabs className='max-w-[1398px] mx-auto px-6'>
                    <TabList>
                        <Tab>MSI Infinute Series</Tab>
                        <Tab>MSI Triden</Tab>
                        <Tab>MSI GL Series</Tab>
                        <Tab>MSI Nightblade</Tab>
                    </TabList>


                    <TabPanel>
                        <div className="my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner image={desktops} categoreys='Desktops'></SingleBanner>

                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                    </TabPanel>
                    <TabPanel>
                        <div className="my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner image={laptops} categoreys='MSI Laptops'></SingleBanner>

                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                    </TabPanel>
                    <TabPanel>
                        <div className="my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner image={monitor} categoreys='Gaming Monitors'></SingleBanner>

                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                    </TabPanel>
                    <TabPanel>
                        <div className="my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner image={laptops} categoreys='MSI Laptops'></SingleBanner>

                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                            <div className="">
                                <div className="block p-px group ">
                                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                                        <div className='relative overflow-hidden'>
                                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={laptop} alt="" />
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
                    </TabPanel>

                </Tabs>
            </div>
            {/* SingleBanner */}
            <div className="max-w-[1398px] px-6 mx-auto my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                <SingleBanner image={monitor} categoreys='Gaming Monitors'></SingleBanner>
                <div className="">
                    <div className="block p-px group ">
                        <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                            <div className='relative overflow-hidden'>
                                <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={monitors} alt="" />
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
                <div className="">
                    <div className="block p-px group ">
                        <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                            <div className='relative overflow-hidden'>
                                <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={monitors} alt="" />
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
                <div className="">
                    <div className="block p-px group ">
                        <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                            <div className='relative overflow-hidden'>
                                <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={monitors} alt="" />
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
                <div className="">
                    <div className="block p-px group ">
                        <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                            <div className='relative overflow-hidden'>
                                <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={monitors} alt="" />
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
                <div className="">
                    <div className="block p-px group ">
                        <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                            <div className='relative overflow-hidden'>
                                <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={monitors} alt="" />
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
            <div className="px-6">
                <Partnar></Partnar>
            </div>
            <div className="px-6">
                <Blogs></Blogs>
            </div>
            <div className="px-6 max-w-[1398px] mx-auto">
                <Testimonials></Testimonials>
            </div>
      
                <Benefits></Benefits>
           
        </div>
    );
};

export default Home;