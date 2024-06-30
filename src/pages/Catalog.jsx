import { FaArrowLeft, FaRegHeart, FaStar } from 'react-icons/fa';
import banner from '/banner.jpg'
import bannerl from '/banner-2.jpg'
import { IoIosArrowForward, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { BiMenuAltLeft } from 'react-icons/bi';
import msi from '/msi.png'
import raz from '/raz.png'
import thermaltake from '/thermaltake.png'
import adata from '/adata.png'
import hewlett from '/hewlett.png'
import gigabyte from '/gigabyte.png'
import raccrt from '/raccrt.png'
import { FiBarChart2 } from 'react-icons/fi';
import { ImStarHalf } from 'react-icons/im';
import { MdDone } from 'react-icons/md';
import productImg from '/product.jpg'
import Benefits from '../components/Benefits'
import SingleCards from '../components/SingleCards';
import SpecificationSlider from '../components/slider/SpecificationSlider';
import Featues from '../components/Featues';
import DetailsPageImage from '../components/DetailsPageImage';
import Contact from '../components/Contact';
import Login from '../components/Login';
const Catalog = () => {
    const [products, setProducts] = useState([])
    const [itemsperpage, setitemsperpage] = useState(6)
    const [counts, setCounts] = useState(0)
    const numberofPage = Math.ceil(counts / itemsperpage);
    const [currentPage, setcurrentPage] = useState(0)
    const pages = [...Array(numberofPage).keys()]


    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    const handlepre = () => {
        if (currentPage > 0) {
            setcurrentPage(currentPage - 1)
        }
    }
    const handlenext = () => {
        if (currentPage < pages.length - 1) {
            setcurrentPage(currentPage + 1)
        }
    }

    const handleItemsPerPage = e => {
        const value = parseInt(e.target.value)
        setitemsperpage(value)
        setcurrentPage(0)
    }


    return (
        <section>
            <div className='max-w-[1398px] mx-auto'>
                <img src={banner} alt="" />
            </div>
            <div className="max-w-[1398px] mx-auto pt-[19px] px-4  bg-blueGray-100">

                <ul className="flex flex-wrap items-center mb-10 xl:mb-0">
                    <li className="mr-6">
                        <Link className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" href="#">
                            <span>Home</span>
                            <IoIosArrowForward />
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" href="#">
                            <span>Everyday Use Notebooks</span>
                            <IoIosArrowForward />
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link className="flex items-center text-sm font-medium text-gray-400 hover:text-gray-500" href="#">
                            <span>MSI Prestige Series</span>
                            <IoIosArrowForward />
                        </Link>
                    </li>

                    <li><a className="text-sm font-medium text-indigo-500 hover:text-indigo-600" href="#">MSI WS Series</a></li>
                </ul>
                <h2 className="mb-5  text-3xl pt-[19px]  font-medium ">MSI PS Series (20)</h2>
                <div className='flex flex-col md:flex-row justify-evenly items-center gap-5 mt-6'>
                    <div className='  py-3 sm:pr-7 mb-10 sm:mb-0 sm:w-1/2 lg:w-4/12 xl:w-3/12  '>
                        <p className='w-full flex gap-3 items-center'><FaArrowLeft />Back</p>
                    </div>
                    <div className='  py-3 px-9'>
                        <p className='text-[#A2A6B0]'>Items 1-35 of 61</p>
                    </div>
                    <select


                        name='queryTitle'
                        id='queryTitle'
                        className='border border-gray-200 hover:border-gray-300 rounded-4xl p-3'
                    >
                        <option value=''>Filter By Category</option>
                        <option value='mobile'>mobile</option>
                        <option value='clothing'>clothing</option>
                        <option value='watches'>watches</option>
                        <option value='furniture'>furniture</option>
                        <option value='Laptop'>Laptop</option>
                        <option value='Camera'>Camera</option>
                    </select>



                    <select

                        name='sort'
                        id='sort'
                        className='border border-gray-200 hover:border-gray-300 rounded-4xl p-3'
                    >
                        <option value=''>Sort By Deadline</option>
                        <option value='dsc'>Descending Order</option>
                        <option value='asc'>Ascending Order</option>
                    </select>
                    <select name="items:" value={`${itemsperpage}`} onChange={handleItemsPerPage} id="" className='border border-gray-200 hover:border-gray-300 rounded-4xl p-3'>

                        <option value="3">3</option>
                        <option value="6">6</option>
                        <option value="9">9</option>
                        <option value="12">12</option>
                        <option value="15">15</option>
                        <option value="18">18</option>
                        <option value="21">21</option>

                    </select>
                    <div className='text-3xl text-gray-600'>
                        <CgMenuGridR />
                    </div>
                    <div className='text-3xl text-gray-600'>
                        <BiMenuAltLeft />
                    </div>


                </div>

                <div className="sm:flex sm:flex-wrap mb-24">
                    {/*  sidebar */}
                    <div className="sidebar px-[18px] mb-10 sm:mb-0 sm:w-1/2 lg:w-4/12 xl:w-3/12 bg-[#F5F7FF]">

                        <div className="mb-4">
                            <h2 className="mb-6 pt-3 text-[16px] font-bold leading-9 font-heading  text-center">Filters</h2>
                            <Link className=" rounded-full border-2 border-[#c2c2c3] text-[#8b8c8c] flex gap-2 items-center justify-center py-2"> Clear Filter</Link>

                        </div>
                        <div className="mb-10 xl:mb-16">


                            <div className="space-y-4">
                                <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4 "
                                    >
                                        <h2 className=" text-sm  font-semibold">Category</h2>

                                        <IoIosArrowUp />
                                    </summary>
                                    <div className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal'>
                                        <p>CUSTOM PCS</p> <span>22</span>
                                    </div>
                                    <div className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal'>
                                        <p>MSI ALL-IN-ONE PCS</p> <span>11</span>
                                    </div>
                                    <div className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal'>
                                        <p>HP/COMPAQ PCS</p> <span>10</span>
                                    </div>


                                </details>
                                <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4"
                                    >
                                        <h2 className=" text-sm  font-semibold">Price</h2>

                                        <IoIosArrowUp />
                                    </summary>

                                    <div className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal'>
                                        <p>$0.00 - $1,000.00</p> <span>22</span>
                                    </div>
                                    <div className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal'>
                                        <p>$1,000.00 - $2,000.00</p> <span>11</span>
                                    </div>
                                    <div className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal'>
                                        <p> $2,000.00 - $3,000.00</p> <span>10</span>
                                    </div>
                                    <div className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal'>
                                        <p>$3,000.00 - $4,000.00</p> <span>22</span>
                                    </div>
                                    <div className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal'>
                                        <p>$4,000.00 - $5,000.00</p> <span>11</span>
                                    </div>
                                    <div className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal'>
                                        <p>$5,000.00 - $6,000.00</p> <span>10</span>
                                    </div>
                                    <div className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal'>
                                        <p>$6,000.00 - $7,000.00</p> <span>10</span>
                                    </div>


                                </details>
                                <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4 "
                                    >
                                        <h2 className=" text-sm  font-semibold">Color</h2>

                                        <IoIosArrowUp />
                                    </summary>
                                    <div className='flex justify-between mt-4 px-4'>
                                        <div className='bg-black rounded-full w-6 h-6 border-2 border-black box-content'>
                                        </div>
                                        <div className='bg-red-700 rounded-full w-6 h-6 border-2 border-white box-content outline outline-blue-600'>
                                        </div>
                                        <div className='bg-green-700 rounded-full w-6 h-6 border-2 border-green-700 box-content'>
                                        </div>
                                        <div className='bg-yellow-400 rounded-full w-6 h-6 border-2 border-yellow-400 box-content'>
                                        </div>
                                        <div className='bg-emerald-500 rounded-full w-6 h-6 border-2 border-emerald-500 box-content'>
                                        </div>
                                    </div>



                                </details>
                                <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                                    <summary
                                        className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4 "
                                    >
                                        <h2 className=" text-sm  font-semibold">Filter Name</h2>

                                        <IoIosArrowUp />
                                    </summary>
                                    <div className='flex justify-between mt-4 px-4'>

                                    </div>



                                </details>


                            </div>
                            <Link className=" rounded-full  text-white bg-[#0156FF] flex gap-2 items-center justify-center py-2"> Apply Filters <span>(2)</span> </Link>

                        </div>
                        <div className="mb-4">
                            <h2 className="mb-6 pt-3 text-[16px] font-bold leading-9 font-heading  text-center">Brands</h2>
                            <Link className=" rounded-full border-2 border-[#c2c2c3] text-[#8b8c8c] flex gap-2 items-center justify-center py-2"> all Brands</Link>

                            <div className="max-w-[1398px] mx-auto  my-8 grid grid-cols-2 gap-4">
                                <div className='hover:shadow-xl transition-all duration-300'> <img className='px-1 w-[88px] h-[46px]' src={msi} alt="" /></div>
                                <div className='hover:shadow-xl transition-all duration-300'> <img className='px-1 w-[88px] h-[46px]' src={raz} alt="" /></div>
                                <div className='hover:shadow-xl transition-all duration-300'> <img className='px-1 w-[88px] h-[46px]' src={thermaltake} alt="" /></div>
                                <div className='hover:shadow-xl transition-all duration-300'> <img className='px-1 w-[88px] h-[46px]' src={adata} alt="" /></div>
                                <div className='hover:shadow-xl transition-all duration-300'> <img className='px-1 w-[88px] h-[46px]' src={hewlett} alt="" /></div>
                                <div className='hover:shadow-xl transition-all duration-300'> <img className='px-1 w-[88px] h-[46px]' src={gigabyte} alt="" /></div>
                                <div className='hover:shadow-xl transition-all duration-300'> <img className='px-1 w-[88px] h-[46px]' src={raccrt} alt="" /></div>
                            </div>

                        </div>
                        <div className="mb-4 text-center">
                            <h2 className='text-[16px] font-bold'>Compare Products</h2>
                            <p className='text-[13px] font-normal mt-3'>You have no items to compare.</p>

                        </div>
                        <div className="mb-4 text-center">
                            <h2 className='text-[16px] font-bold'>My Wish List</h2>
                            <p className='text-[13px] font-normal mt-3'>You have no items in your wish list.</p>

                        </div>
                        <div className="mb-4 text-center flex justify-center items-center">
                            <img src={bannerl} alt="" className='w-[233px] h-[370px]' />
                        </div>
                    </div>
                    {/*  main  */}
                    <div className="w-full sm:w-1/2 lg:w-8/12 xl:w-9/12 sm:pl-7">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                            {products.map((product,) => <>
                                <div className="">
                                    <div className="block p-px group ">
                                        <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />{product.status}</span>
                                            <div className='relative overflow-hidden'>
                                                <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={productImg} alt="" />
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

                                                <h6 className="font-normal text-sm  mt-2 mb-5">{product.title}</h6>
                                                <div className='flex flex-col mb-2'>
                                                    <span className="font-bold  line-through text-[#666666]">${product.price}</span>
                                                    <span className=" text-lg font-semibold">${product.discount_price}</span>
                                                </div>
                                                <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                                    <Link className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2"><BsCart /> add To Cart</Link>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>)}


                        </div>
                        <ul className="flex justify-center items-center ">
                            <li onClick={handlepre}>
                                <span className="p-1 flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 focus:outline-none mr-1 sm:mr-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="15 6 9 12 15 18" />
                                    </svg>
                                </span>
                            </li>
                            {
                                pages.map(page => <button onClick={() => setcurrentPage(page)} key={page} className={currentPage === page ? "bg-orange-300 p-3" : 'mx-6 p-3 border-2'}>{page}</button>)
                            }
                            {/* <li>
                            <span className="flex text-indigo-700 hover:bg-indigo-600 hover:text-white text-base leading-tight font-bold cursor-pointer shadow transition duration-150 ease-in-out mx-2 sm:mx-4 rounded px-3 py-2 focus:outline-none">1</span>
                        </li> */}

                            <li onClick={handlenext}>
                                <span className="flex rounded transition duration-150 ease-in-out text-base leading-tight font-bold text-gray-500 hover:text-indigo-700 p-1 focus:outline-none ml-1 sm:ml-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <polyline points="9 6 15 12 9 18" />
                                    </svg>
                                </span>
                            </li>
                        </ul>

                        <div>
                            <SingleCards></SingleCards>
                        </div>


                    </div>
                </div>





            </div>
            <Login></Login>
            <Contact></Contact>



            <div className=' flex justify-between items-start max-w-[1398px] mx-auto'>
                <div role="tablist" className=" tabs-bordered 'w-1/2 bg-slate-200">
                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="About Product" />
                    <div role="tabpanel" className="tab-content p-6">

                        <ul className="flex flex-wrap items-center mb-10 xl:mb-0">
                            <li className="mr-6">
                                <Link className="flex items-center text-sm font-medium transition-all duration-300  hover:text-gray-500" href="#">
                                    <span>Home</span>
                                    <IoIosArrowForward />
                                </Link>
                            </li>
                            <li className="mr-6">
                                <Link className="flex items-center text-sm font-medium transition-all duration-300  hover:text-gray-500" href="#">
                                    <span>Everyday Use Notebooks</span>
                                    <IoIosArrowForward />
                                </Link>
                            </li>
                            <li className="mr-6">
                                <Link className="flex items-center text-sm font-medium transition-all duration-300  hover:text-gray-500" href="#">
                                    <span>MSI Prestige Series</span>
                                    <IoIosArrowForward />
                                </Link>
                            </li>

                            <li><a className="text-sm font-medium text-[#A3A3A3] transition-all duration-300  hover:text-gray-700" href="#">MSI WS Series</a></li>
                        </ul>
                        <div>
                            <h2 className='text-3xl font-medium mt-6'>MSI MPG Trident 3</h2>
                            <p className='text-[#0156FF] text-[12px] font-normal mt-6'>Be the first to review this product</p>
                            {/* about product */}
                            {/* <p className='text-xl font-light mt-6'>MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop</p> */}

                            {/* details */}
                            {/* <ul className='list-disc list-inside mt-6 text-sm font-light'>
                                <li> Intel Core i7-10700F</li>
                                <li>  Intel H410</li>
                                <li>WHITE</li>
                                <li>NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6</li>
                                <li>SO-DIMM 16GB (16GB x 1) DDR4 2666MHz</li>
                                <li>2 total slots (64GB Max)</li>
                                <li>512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM</li>
                                <li>Gaming Keyboard GK30 + Gaming Mouse GM11</li>
                                <li>3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)</li>
                                <li>Intel WGI219Vethernet (10/100/1000M)</li>
                                <li>AX200 (WIFI 6)+BT5.1</li>
                                <li>PSU 330W</li>
                            </ul> */}
                            {/* specs */}
                            <div className=' border border-[#b1b2b4]'>
                                <div className='flex justify-evenly p-4 bg-white'><p>CPU</p><p>N/A</p></div>
                                <div className='flex justify-evenly p-4 bg-slate-50'><p>Featured</p><p>N/A</p></div>
                                <div className='flex justify-evenly p-4 bg-white'><p>I/O Ports</p><p>N/A</p></div>
                            </div>

                        </div>
                        <div className='flex justify-between mt-8'>
                            <p className='text-[12px] font-semibold'>Have a Question? <Link className='text-[#0156FF]'>Contact Us</Link> </p>
                            <p className='text-[12px] font-light'>SKU D5515AI</p>
                        </div>

                        <button className='text-sm font-bold mt-[166px]'>+ More information</button>

                    </div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="Details"
                        defaultChecked />
                    <div role="tabpanel" className="tab-content p-10">Tab content 2</div>

                    <input
                        type="radio"
                        name="my_tabs_1"
                        role="tab"
                        className="tab"
                        aria-label="Specs" />
                    <div role="tabpanel" className="tab-content p-10">Tab content 3</div>
                </div>
                <div className='w-1/2'>
                    <DetailsPageImage></DetailsPageImage>
                </div>

            </div>

            <SpecificationSlider></SpecificationSlider>
            <Featues></Featues>
            <div className='bg-slate-100'>
                <Benefits></Benefits>
            </div>
        </section>
    );
};

export default Catalog;