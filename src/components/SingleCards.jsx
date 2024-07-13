import { FaRegHeart, FaStar } from 'react-icons/fa';
import productImg from '/product.jpg'
import { ImStarHalf } from 'react-icons/im';
import { useEffect, useState } from 'react';
import { BsCart } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FiBarChart2 } from 'react-icons/fi';
import { MdDone } from 'react-icons/md';
const SingleCards = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <div className=" grid grid-cols-1">
            {
                products.map((product) =>
                   
                        <div key={product.id} className='flex justify-between  gap-[53px] hover:shadow-xl p-6'>
                            <div >
                                <img src={productImg} alt="" className='w-[250px] h-[250px]' />
                                <div className="flex my-3 text-[#E9A426]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <ImStarHalf />
                                </div>
                            </div>
                            <div>
                                <h2>{product.model}</h2>
                                <p className='mt-5'>MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop</p>
                                <div className='flex gap-4 mb-2 mt-5'>
                                    <span className="font-bold  line-through text-[#666666]">${product.price}</span>
                                    <span className=" text-lg font-semibold">${product.discount_price}</span>
                                </div>
                                <div className='inline-block'>
                                <Link className="rounded-full border-2 border-[#0156FF] text-[#0156FF]  flex gap-2 items-center justify-center py-2 px-7 mt-12"><BsCart /> add To Cart</Link>
                                </div>
                               
                            </div>
                            <div className='flex flex-col items-center justify-between'>
                            <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />{product.status}</span>
                                <div className='w-[220px]'>
                                   <h2>memory : {product.specs.memory}</h2> 
                                   <h2>storage : {product.specs.storage}</h2> 
                                   <h2>battery : {product.specs.battery}</h2> 
                                   <h2>camera : {product.specs.camera}</h2> 
                                   <h2>screen size : {product.specs.screen_size}</h2> 
                                    {/* {product.specs.map(p=><><ul>
                                        <li>{p.memory}</li>
                                        <li>{p.storage}</li>
                                        </ul></>)} */}
                                        {/* {
                  product.specs.map((facilities, idx) => <li key={idx} className="ml-6"> {facilities}</li>)
                } */}

                                </div>
                                <div className='flex gap-2 items-end '>
                                    <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full' />
                                    <FiBarChart2 className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1' />
                                    <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full' />
                                </div>
                            </div>
                        </div>
                )
            }

            <div>

            </div>
            <div>

            </div>

        </div>
    );
};

export default SingleCards;