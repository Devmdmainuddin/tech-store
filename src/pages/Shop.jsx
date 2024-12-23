
import { FaArrowLeft } from 'react-icons/fa';
import banner from '/banner.jpg'
import bannerl from '/banner-2.jpg'
import { IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CgMenuGridR } from 'react-icons/cg';
import { BiMenuAltLeft } from 'react-icons/bi';
import msi from '/msi.png'
import raz from '/raz.png'
import thermaltake from '/thermaltake.png'
import adata from '/adata.png'
import hewlett from '/hewlett.png'
import gigabyte from '/gigabyte.png'
import raccrt from '/raccrt.png'
import Benefits from '../components/Benefits'
import { useLocation } from 'react-router-dom';
import PaginatedItems from '../components/PaginatedItems';
import Container from '../components/shared/Container';
import Bredcumb from '../components/shared/Bredcumb';
import { ProductContext } from '../contexts/ProductContextProvider';

const Shop = () => {
    const [number, setNumber] = useState(12)
    const [brand, setBrand] = useState([])
    const [activeMulti, setActiveMulti] = useState(true)
    const { products, categorys } = useContext(ProductContext)
    const [filteredItems, setFilteredItems] = useState(products);
    const [rangeData, setRangeData] = useState({ itemOffset: 0, endOffset: 0, totalItems: filteredItems?.length, });
    const location = useLocation();

    useEffect(() => {
        const getCategoryFromQuery = () => {
            const params = new URLSearchParams(location.search);
            return params.get('category');
        };
        const category = getCategoryFromQuery();
        if (products) {
            if (category) {
                const filtered = products.filter((product) => product.category === category);
                setFilteredItems(filtered);
            } else {
                setFilteredItems(products);
            }
        }
    }, [products, location]);

    useEffect(() => {
        setBrand([... new Set(products?.map(item => item.brand))])
        if (products) {
            setFilteredItems(products);
        }
    }, [products])

    const handleCatfilter = filter => {
        const filterItem = products?.filter(items => items.category === filter);
        setFilteredItems(filterItem);

    }
    const handlebrandfilter = filter => {
        const filterItem = products?.filter(items => items.brand === filter);
        setFilteredItems(filterItem);
    }
    const handlePricefilter = value => {
        const filterItem = products?.filter(items => items.price > value.low && items.price < value.high);
        if (filterItem.length > 0) {
            setFilteredItems(filterItem);
        } else {
            setFilteredItems("")
        }

    }
    
    const selectNumber = (element) => {
        let numberConverter = Number(element.target.value)
        setNumber(numberConverter)

    }
    const handleAllProduct = () => {
        setFilteredItems(products)
    }

    const sortItems = (order) => {
        if (filteredItems && filteredItems.length > 0) {
            const sortedItems = [...filteredItems].sort((a, b) => {
                const dateA = new Date(a.createdAt);
                const dateB = new Date(b.createdAt);
                return order === 'dsc' ? dateB - dateA : dateA - dateB;
            });
            setFilteredItems(sortedItems);
        }
    };


    return (
        <div>
            <div className='w-full'>
                <img src={banner} alt="" className='w-full h-full object-cover' />
            </div>
            <Container >
                <div className=" pt-[19px] bg-blueGray-100">

                    <Bredcumb />

                    <h2 className="mb-5  text-3xl pt-[19px]  font-medium ">MSI PS Series (20)</h2>
                    {/* menu bar  */}

                    <div className='flex flex-col md:flex-row justify-evenly items-center gap-5 mt-6'>
                        <div className='  py-3 sm:pr-7 mb-10 sm:mb-0 sm:w-1/2 lg:w-4/12 xl:w-3/12  '>
                            <p className='w-full flex gap-3 items-center'><FaArrowLeft />Back</p>
                        </div>
                        <div className='  py-3 px-9'>
                            <p className='lg:text-xs lg:leading-7 leading-5 text-[#767676]'>Products from {rangeData.itemOffset + 1} to {rangeData.endOffset > filteredItems?.length ? filteredItems?.length : rangeData.endOffset} of {filteredItems?.length}</p>
                        </div>
                        <select

                            onChange={(e) => handleCatfilter(e.target.value)}
                            name='queryTitle'
                            id='queryTitle'
                            className='border border-gray-200 hover:border-gray-300 rounded-4xl p-3'
                        >
                            <option value=''>Filter By Category</option>
                            {categorys.map((item, idx) => <option key={idx} value={item}>{item}</option>)}
                        </select>



                        <select
                        onChange={(e) => sortItems(e.target.value)}
                            // onChange={(e) => handleSortChange(e.target.value)}
                            name='sort'
                            id='sort'
                            className='border border-gray-200 hover:border-gray-300 rounded-4xl p-3'
                        >
                            <option value=''>Sort By Deadline</option>
                            <option  value='dsc'>Descending Order</option>
                            <option  value='asc'>Ascending Order</option>
                        </select>
                        <select onChange={selectNumber} name="" id="" className='border border-gray-200 hover:border-gray-300 rounded-4xl p-3'>

                            <option value="3">3</option>
                            <option value="6">6</option>
                            <option value="9">9</option>
                            <option value="12">12</option>
                            <option value="15">15</option>
                            <option value="18">18</option>
                            <option value="21">21</option>

                        </select>
                        <div onClick={() => setActiveMulti(true)} className='text-3xl text-gray-600'>
                            <CgMenuGridR />
                        </div>
                        <div onClick={() => setActiveMulti(false)} className='text-3xl text-gray-600'>
                            <BiMenuAltLeft />
                        </div>


                    </div>

                    <div className="flex  ">
                        {/*  sidebar */}
                        <div>
                            <div className="sidebar  mb-10 sm:mb-0 w-[234px] bg-[#F5F7FF]">

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
                                            {categorys.map((item, idx) => <div onClick={() => handleCatfilter(item)} key={idx} className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal cursor-pointer'>
                                                <p>{item}</p>
                                            </div>)}


                                        </details>
                                        <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                                            <summary
                                                className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg  p-4"
                                            >
                                                <h2 className=" text-sm  font-semibold">Price</h2>

                                                <IoIosArrowUp />
                                            </summary>

                                            <div onClick={() => handlePricefilter({ low: 0, high: 499 })} className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal'>
                                                <p>$0.00 - $499</p> <span>22</span>
                                            </div>
                                            <div onClick={() => handlePricefilter({ low: 500, high: 999 })} className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal'>
                                                <p>$500 - $999</p> <span>11</span>
                                            </div>
                                            <div onClick={() => handlePricefilter({ low: 1000, high: 1499 })} className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal'>
                                                <p> $1000 - $1499</p> <span>10</span>
                                            </div>
                                            <div onClick={() => handlePricefilter({ low: 1500, high: 1999 })} className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal'>
                                                <p>$1500 - $1999</p> <span>22</span>
                                            </div>
                                            <div onClick={() => handlePricefilter({ low: 2000, high: 2499 })} className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal'>
                                                <p>$2000 - $2499</p> <span>11</span>
                                            </div>
                                            <div onClick={() => handlePricefilter({ low: 2500, high: 2999 })} className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal'>
                                                <p>$2500 - $2999</p> <span>10</span>
                                            </div>
                                            <div onClick={() => handlePricefilter({ low: 3000, high: 3499 })} className='flex justify-between mt-4 px-4 leading-relaxed text-[13px] font-normal'>
                                                <p>$3000 - $3499</p> <span>10</span>
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
                                    <Link onClick={() => handleAllProduct} className=" rounded-full border-2 border-[#c2c2c3] text-[#8b8c8c] flex gap-2 items-center justify-center py-2"> all Brands</Link>

                                    <div className="max-w-[1398px] mx-auto  my-8 grid grid-cols-2 gap-4">
                                        <div onClick={() => handleAllProduct} className='hover:shadow-xl transition-all duration-300'> <img className='px-1 w-[88px] h-[46px]' src={msi} alt="" /></div>
                                        <div onClick={() => handlebrandfilter('HyperScreen')} className='hover:shadow-xl transition-all duration-300'> <img className='px-1 w-[88px] h-[46px]' src={raz} alt="" /></div>
                                        <div onClick={() => handlebrandfilter('TechBrand')} className='hover:shadow-xl transition-all duration-300'> <img className='px-1 w-[88px] h-[46px]' src={thermaltake} alt="" /></div>
                                        <div onClick={() => handlebrandfilter('SmartTech')} className='hover:shadow-xl transition-all duration-300'> <img className='px-1 w-[88px] h-[46px]' src={adata} alt="" /></div>
                                        <div onClick={() => handlebrandfilter('GamerTech')} className='hover:shadow-xl transition-all duration-300'> <img className='px-1 w-[88px] h-[46px]' src={hewlett} alt="" /></div>
                                        <div onClick={() => handlebrandfilter('OfficeTech')} className='hover:shadow-xl transition-all duration-300'> <img className='px-1 w-[88px] h-[46px]' src={gigabyte} alt="" /></div>
                                        <div onClick={() => handlebrandfilter('raccrt')} className='hover:shadow-xl transition-all duration-300'> <img className='px-1 w-[88px] h-[46px]' src={raccrt} alt="" /></div>
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
                        </div>

                        {/*  main  */}
                        <div className="w-full ">
                            {filteredItems ? activeMulti ?
                                <div className="flex flex-wrap  mt-[60px]">
                                    <PaginatedItems item={filteredItems} activeMulti={activeMulti} setRangeData={setRangeData} itemsPerPage={number}></PaginatedItems>
                                </div>
                                :
                                <div className=" grid grid-cols-1">
                                    <PaginatedItems item={filteredItems} activeMulti={activeMulti} itemsPerPage={number}></PaginatedItems>
                                </div> : <div className='flex items-center justify-center h-screen'><p >no product </p> </div>}

                        </div>
                    </div>
                </div>



            </Container>
            <div className='bg-slate-100'>
                <Benefits></Benefits>
            </div>

        </div>
    );
};

export default Shop;