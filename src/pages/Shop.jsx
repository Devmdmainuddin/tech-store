
import { FaArrowLeft } from 'react-icons/fa';
import banner from '/banner.jpg'
import bannerl from '/banner-2.jpg'
import { IoIosArrowForward, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
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
import Benefits from '../components/Benefits'
import { useLocation } from 'react-router-dom';
import { useGetproductsQuery } from '../future/productApi';
import PaginatedItems from '../components/PaginatedItems';

const Shop = () => {
    const [number, setNumber] = useState(12)
    const [cetegorey, setCategorey] = useState([])
    const [cetegoryShow, setCetegoryShow] = useState([])
    const [brand, setBrand] = useState([])
    const [brandShow, setBrandShow] = useState([])
   
    const [color, setcColor] = useState([])
    const [priceShow, setShow] = useState([])
  

    const [activeMulti, setActiveMulti] = useState(true)
    const { data, error, isLoading } = useGetproductsQuery();
    const [filteredItems, setFilteredItems] = useState(data);
    const [rangeData, setRangeData] = useState({ itemOffset: 0,endOffset: 0,totalItems: filteredItems?.length,});
    const location = useLocation();
    // console.log(data);
    useEffect(() => {
        const getCategoryFromQuery = () => {
            const params = new URLSearchParams(location.search);
            return params.get('category');
        };
    
        const category = getCategoryFromQuery();
        if (data) {
            if (category) {
                const filtered = data.filter((product) => product.category === category);
                setFilteredItems(filtered);
            } else {
                setFilteredItems(data);
            }
        }
    }, [data, location]);
    
    useEffect(() => {
        setCategorey([... new Set(data?.map(item => item.category))])
        setBrand([... new Set(data?.map(item => item.brand))])
        if (data) {
            setFilteredItems(data); 
          }
    }, [data])
    const handleCatfilter = filter => {
        const filterItem = data?.filter(items => items.category === filter);
        setFilteredItems(filterItem);
     
    }
    const handlebrandfilter = filter => {
        const filterItem = data?.filter(items => items.brand === filter);
        setFilteredItems(filterItem);
    }
    const handlePricefilter = value => {
        const filterItem = data?.filter(items => items.price > value.low && items.price < value.high);
        if (filterItem.length > 0) {
            setFilteredItems(filterItem);
        } else {
            setFilteredItems("")
        }

    }
    //  onClick={() => handlePricefilter({ low: 0, high: 9.99 })}

    const handleByNew = () => {
        if (filteredItems && filteredItems.length > 0) {
          const sortedByNew = [...filteredItems].sort((a, b) => {
            const dateA = new Date(b.createAt);
            const dateB = new Date(a.createAt);
            return dateA - dateB;
          });
          setFilteredItems(sortedByNew);
        }
      };
      
      const handleByOld = () => {
        if (filteredItems && filteredItems.length > 0) {
          const sortedByOld = [...filteredItems].sort((a, b) => {
            const dateA = new Date(b.createAt);
            const dateB = new Date(a.createAt);
            return dateB - dateA;
          });
          setFilteredItems(sortedByOld);
        }
      };


    // useEffect(() => {
    //     fetch('fakedata.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data))

    // }, [])

    const selectNumber = (element) => {
        let numberConverter = Number(element.target.value)
        setNumber(numberConverter)

    }
    const handleAllProduct = () => {
        setitem(data)
    }


  
    return (
        <div>
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
                {/* menu bar  */}
              
                <div className='flex flex-col md:flex-row justify-evenly items-center gap-5 mt-6'>
                    <div className='  py-3 sm:pr-7 mb-10 sm:mb-0 sm:w-1/2 lg:w-4/12 xl:w-3/12  '>
                        <p className='w-full flex gap-3 items-center'><FaArrowLeft />Back</p>
                    </div>
                    <div className='  py-3 px-9'>
                        <p className='lg:text-xs lg:leading-7 leading-5 text-[#767676]'>Products from {rangeData.itemOffset + 1} to {rangeData.endOffset > filteredItems?.length ? filteredItems?.length : rangeData.endOffset} of {filteredItems?.length}</p>
                    </div>
                    <select


                        name='queryTitle'
                        id='queryTitle'
                        className='border border-gray-200 hover:border-gray-300 rounded-4xl p-3'
                    >
                        <option value=''>Filter By Category</option>
                   {cetegorey.map((item,idx)=><option onClick={()=>handleCatfilter(item)} key={idx} value=''>{item}</option>)}
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
                        {
                            activeMulti ?
                                <div className="flex flex-wrap justify-between gap-6 mt-[60px]">
                                    <PaginatedItems item={filteredItems} activeMulti={activeMulti} setRangeData={setRangeData} itemsPerPage={number}></PaginatedItems>
                                </div>
                                :
                                <div className=" grid grid-cols-1">
                                    <PaginatedItems item={filteredItems} activeMulti={activeMulti} itemsPerPage={number}></PaginatedItems>
                                </div>
                        }
                    </div>
                </div>
            </div>


            <div className='bg-slate-100'>
                <Benefits></Benefits>
            </div>

        </div>
    );
};

export default Shop;