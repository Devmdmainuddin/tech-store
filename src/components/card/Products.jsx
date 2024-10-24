import { BsCart } from "react-icons/bs";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { ImStarHalf } from "react-icons/im";
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";


const Products = ({ product }) => {
    return (
        <div className="w-[234px]">
            <div className="block p-px group ">
                <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                    <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />{product.status}</span>
                    <div className='relative overflow-hidden'>
                        <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={product.image} alt="" />
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
                            <span className="font-bold  line-through text-[#666666]">{product.discount_price ? product.discount_price : ''}</span>
                            <span className=" text-lg font-semibold">${product.price} </span>
                        </div>
                        <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                            <Link className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2"><BsCart /> add To Cart</Link>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Products;