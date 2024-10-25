import { IoIosArrowForward } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import DetailsPageImage from '../components/DetailsPageImage';
import SpecificationSlider from '../components/slider/SpecificationSlider';
import Featues from '../components/Featues';
import Benefits from '../components/Benefits';
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContextProvider';
const ProductsDetails = () => {
    const { id } = useParams();
    const { products } = useContext(ProductContext)
    const product = products.find(product => product.id === parseInt(id))

    return (
        <div >

            <div className="flex justify-between max-w-[1398px] mx-auto px-6">
                <div className='w-1/2'>
                    <Tabs >
                        <TabList className='flex gap-6'>
                            <Tab className='border-none '>About Product</Tab>
                            <Tab className='border-none' >Details</Tab>
                            <Tab className='border-none'>Specs</Tab>

                        </TabList>


                        <TabPanel>
                            <div>
                                <div className=" p-6">

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
                                        <h2 className='text-3xl font-medium mt-6'>{product.title}</h2>
                                        <p className='text-[#0156FF] text-[12px] font-normal mt-6'> {product.description} </p>
                                        


                                    </div>
                                    <div className='flex justify-between mt-8'>
                                        <p className='text-[12px] font-semibold'>Have a Question? <Link className='text-[#0156FF]'>Contact Us</Link> </p>
                                        <p className='text-[12px] font-light'>SKU D5515AI</p>
                                    </div>

                                    <button className='text-sm font-bold mt-[166px]'>+ More information</button>

                                </div>
                            </div>

                        </TabPanel>
                        <TabPanel>
                            <div>
                                <div className=" p-6">

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
                                        <h2 className='text-3xl font-medium mt-6'>{product.title}</h2>
                                        <p className='text-[#0156FF] text-[12px] font-normal mt-6'>Be the first to review this product</p>


                                        <ul className='list-disc list-inside mt-6 text-sm font-light'>
                                        <li> {product.description}</li>
                                           {/* <li> Intel Core i7-10700F</li>
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
                                            <li>PSU 330W</li> */}
                                        </ul>
                                        {/* specs */}


                                    </div>
                                    <div className='flex justify-between mt-8'>
                                        <p className='text-[12px] font-semibold'>Have a Question? <Link className='text-[#0156FF]'>Contact Us</Link> </p>
                                        <p className='text-[12px] font-light'>SKU D5515AI</p>
                                    </div>

                                    <button className='text-sm font-bold mt-[166px]'>+ More information</button>

                                </div>
                            </div>

                        </TabPanel>
                        <TabPanel>
                            <div>
                                <div className=" p-6">

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
                                        <h2 className='text-3xl font-medium mt-6'>{product.title}</h2>
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
                            </div>
                        </TabPanel>

                    </Tabs>

                </div>
                <div className='w-1/2 mt-16'>
                    <DetailsPageImage src={product.image}></DetailsPageImage>
                </div>
            </div>
            <div>
            <SpecificationSlider></SpecificationSlider>
            </div>
            <div>
            <Featues></Featues>
            </div>
            <div className="bg-[#F5F7FF] mt-14">
                <Benefits></Benefits>
            </div>
           
            

        </div>
    );
};

export default ProductsDetails;