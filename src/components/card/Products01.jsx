import { BsCart } from "react-icons/bs";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FiBarChart2 } from "react-icons/fi";
import { ImStarHalf } from "react-icons/im";
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addToCart } from "../../redux/state/cartSlice";
const Products01 = ({item}) => {
    const {id,image,title,price,discount_price}=item
    const dispatch = useDispatch();
   
   // add to cart
   const handlecard = async item => {
    try {
        dispatch(addToCart({ ...item, qun:1, }))
        toast.success('Your items has been add to cart')
      
    }
    catch (err) {
        toast.error('product  cart not add')
    }

}
    return (
        <div>
          
                <div className="block p-px group ">
                    <div className=" p-6 transition-all duration-300  group-hover:shadow-xl">
                        <span className=' flex gap-1 items-center text-[12px] text-[#78A962] mb-3'><MdDone className='bg-[#78A962] text-white p-1 rounded-full text-sm' />in stock</span>
                        <div className='relative overflow-hidden'>
                            <img className="block w-[150px] h-[150px] mx-auto  mb-8 object-contain transition-all duration-300 group-hover:scale-110" src={image} alt="" />
                            <div className='absolute top-4 -right-10 group-hover:right-0 transition-all duration-500 opacity-0 invisible group-hover:opacity-100  group-hover:visible'>
                                <FaRegHeart className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full' />
                                <FiBarChart2  className='p-1 border border-[#A2A6B0] text-3xl text-[#A2A6B0] rounded-full mt-1' />
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

                            <Link to={`/products/${id}`}><h6 className="font-normal text-sm  mt-2 mb-5">{title}</h6> </Link>  
                            <div className='flex flex-col mb-2'>
                                <span className="font-bold  line-through text-[#666666]">${price}</span>
                                <span className=" text-lg font-semibold">${discount_price}</span>
                            </div>
                            <div className='relative overflow-hidden bottom-8 left-0 right-0  opacity-0 transition-all duration-500 invisible   group-hover:bottom-0 group-hover:opacity-100  group-hover:visible'>
                                <button onClick={()=>handlecard(item)} className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2 px-3"><BsCart /> add To Cart</button>
                            </div>

                        </div>
                    </div>
                </div>

        </div>
    );
};
Products01.propTypes = {
    item: PropTypes.object,
}
export default Products01;