import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import zip from '/zip.png'
import { RiDeleteBinLine } from "react-icons/ri";
import { FaMinus, FaPlus, FaRegEdit } from "react-icons/fa";
import Benefits from "../components/Benefits";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity } from "../redux/state/cartSlice";

const ShoppingCart = () => {
    const carts = useSelector((state) => state.cart.cartItem)
    const dispatch = useDispatch();

    const handkeMinusQuantity = (items, quantity) => {
        dispatch(changeQuantity({ ...items, qun: quantity - 1, }))
    }
    const handkePlusQuantity = (items, quantity) => {
        dispatch(changeQuantity({ ...items, qun: quantity + 1, }))
    }
    let { totalprice, totalQuntity } = carts.reduce((acc, item) => {
        acc.totalprice += item.price * item.qun
        acc.totalQuntity += item.qun
        return acc
    }, { totalprice: 0, totalQuntity: 0 })

    return (
        <>
        <div className="max-w-[1398px] mx-auto px-6">
            <ul className="flex flex-wrap items-center mb-10 xl:mb-0">
                <li className="mr-6">
                    <Link className="flex items-center text-sm font-medium transition-all duration-300  hover:text-gray-500" href="#">
                        <span>Home</span>
                        <IoIosArrowForward />
                    </Link>
                </li>
                <li className="mr-6">
                    <Link className="flex items-center text-sm font-medium transition-all duration-300  hover:text-gray-500" href="#">
                        <span>shopingCart</span>
                        <IoIosArrowForward />
                    </Link>
                </li>



            </ul>
            <div>
                <h2 className='text-3xl font-medium mt-6'>Shopping Cart</h2>

            </div>
            <div className=" flex gap-6">
                <div className='inline-block  shadow rounded-lg overflow-hidden'>
                    <table className=' leading-normal'>
                        <thead>
                            <tr>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                >
                                    Item
                                </th>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                >
                                    Price
                                </th>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                >
                                    Qty
                                </th>
                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                >
                                    Subtotal
                                </th>


                                <th
                                    scope='col'
                                    className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                >
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>{/* User data table row */}
                            {carts.map((item,idx)=><tr key={idx}>
                                <td  className='px-5 py-5 border-b border-gray-200 text-sm flex items-center gap-6'>
                                    <img className="w-[120px] h-[120px] object-cover" src={item.image} alt="" />
                                    <p className='text-gray-900 whitespace-no-wrap w-[270px]'>MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty</p>
                                </td>
                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className='text-gray-900 whitespace-no-wrap'>${item.price}</p>
                                </td>

                                <td className='px-5 py-5 border-b border-gray-200  text-sm'>
                                <div className="w-[139px]   border border-[#F0F0F0] text-[#767676] flex justify-between items-center p-3">
                                                    <span
                                                        className="cursor-pointer inline-block   text-lg font-normal "
                                                        onClick={() => handkeMinusQuantity(item, item.qun)}
                                                    >
                                                        <FaMinus />
                                                    </span>
                                                    <span className="inline-block px-2 text-lg font-normal">{item.qun}</span>
                                                    <span
                                                        className="cursor-pointer inline-block  text-lg "
                                                        onClick={() => handkePlusQuantity(item, item.qun)}
                                                    >
                                                        <FaPlus />
                                                    </span>
                                                </div>

                                </td>
                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className='text-gray-900 whitespace-no-wrap'>${item.price * item.qun}</p>
                                </td>


                                <td className='p-2 border-b border-gray-200 text-sm '>
                                    <div className="flex items-center gap-2">
                                        <button className='cursor-pointer inline-block p-3  bg-red-100  rounded-full font-semibold text-red-900 leading-tight'>
                                            <RiDeleteBinLine />
                                        </button>
                                        <Link className='cursor-pointer inline-block p-3  bg-green-100   rounded-full font-semibold text-red-900 leading-tight'>
                                            <FaRegEdit />
                                        </Link>
                                    </div>


                                </td>
                            </tr> )}
                           


                        </tbody>
                    </table>
                    <div className="flex justify-between">
                        <div className="flex gap-6">
                            <Link className="W-full mt-4 block py-3 px-10  text-[14px]  [#A2A6B0] font-semibold text-center border-[#A2A6B0] border  rounded-full" href="#">Continue Shopping</Link>
                            <Link className="W-full mt-4 block py-3 px-10  text-[14px]  text-white font-semibold text-center bg-black   rounded-full" href="#">Clear Shopping Cart</Link>
                        </div>

                        <Link className="W-full mt-4 block py-3 px-10  text-[14px]  text-white font-semibold text-center bg-black   rounded-full" href="#">Update Shopping Cart</Link>
                    </div>

                </div>
                <div className="w-[446px] bg-[#F5F7FF] py-[18px] px-8">
                    <h2 className="text-2xl font-semibold">Summary</h2>
                    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg"
                        >
                            <h3 className="mt-[18px] text-[18px] font-normal ">Estimate Shipping and Tax</h3>

                            <IoIosArrowUp />
                        </summary>
                        <p className="text-sm font-normal text-[#666666] mt-3 max-w-[287px]">Enter your destination to get a shipping estimate.</p>

                        <div className="flex flex-col ">
                            <label htmlFor="discount" className="text-[13px] font-semibold mt-3">Country</label>

                            <select name="" id="" className="py-3 px-8 outline-none border mt-3">
                                <option value="Australia">Australia</option>
                                <option value="bangladesh">bangladesh</option>
                                <option value="india">india</option>
                            </select>
                        </div>
                       
                        <div className="flex flex-col ">
                            <label htmlFor="discount" className="text-[13px] font-semibold mt-3">State/Province</label>
                            <input type="text" name="discount" placeholder="Enter State/Province" className="py-3 px-8 outline-none border mt-3" />

                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="discount" className="text-[13px] font-semibold mt-3">Zip/Postal Code</label>
                            <input type="text" name="discount" placeholder="Enter Zip/Postal Code" className="py-3 px-8 outline-none border mt-3" />

                        </div>
                        <h2 className="text-[13px] font-semibold mt-3">Standard Rate</h2>
                        <div>
                            <input type="radio" id="Standard" name="drone" value="Standard" className="mt-3"/>
                            <label htmlFor="Standard" className="ml-2">Price may vary depending on the item/destination. Shop Staff will contact you. $21.00</label>
                        </div>
                        <h2 className="text-[13px] font-semibold mt-3">Pickup from store</h2>
                        <div>
                            <input type="radio" id="store" name="drone" value="store"className="mt-3" />
                            <label htmlFor="store" className="ml-2">1234 Street Adress City Address, 1234 $0.00</label>
                        </div>

                    </details>
                    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg"
                        >
                            <h3 className="mt-[18px] text-[18px] font-normal ">Apply Discount Code</h3>
                            <IoIosArrowUp />
                        </summary>
                        <div className="flex flex-col ">
                            <label htmlFor="discount" className="text-[13px] font-semibold mt-3">Enter discount code</label>
                            <input type="text" name="discount" placeholder="Enter Discount code" className="py-3 px-8 outline-none border mt-3" />
                            <button className="W-full mt-4 block py-3 px-10  text-[14px]  text-[#0156FF] font-semibold text-center border-[#0156FF] border    rounded-full" href="#">Check out with</button>
                        </div>

                    </details>



                    <div className="divider"></div>
                    <div className="flex justify-between text-[13px] font-semibold">
                        <p>Subtotal</p>
                        <span>${parseFloat(totalprice?.toFixed(2))}</span>
                    </div>
                    <div className="flex justify-between text-[13px] font-semibold mt-3">
                        <p>Shipping </p>
                        <span>$21.00</span>
                    </div>
                    <p className="max-w-[300px] text-[10px] font-normal my-2">(Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.)</p>
                    <div className="flex justify-between text-[13px] font-semibold mt-3">
                        <p>Tax</p>
                        <span>$1.91</span>
                    </div>
                    <div className="flex justify-between text-[13px] font-semibold mt-3">
                        <p>GST(10%)</p>
                        <span>$1.91</span>
                    </div>
                    <div className="flex justify-between text-[13px] font-semibold mt-3">
                        <p>Order Total</p>
                        <span>${totalprice +21.00 +1.91 + 1.91 }</span>
                    </div>

                    <Link className="W-full mt-4 block py-3 px-10  text-[14px]  text-white font-semibold text-center bg-[#0156FF]   rounded-full" href="#">Proceed to Checkout</Link>
                    <Link className="W-full mt-4 block py-3 px-10  text-[14px]  text-white font-semibold text-center bg-[#FFB800]   rounded-full" href="#">Check out with</Link>
                    <Link className="W-full mt-4 block py-3 px-10  text-[14px]  text-[#A2A6B0] font-semibold text-center border-[#A2A6B0] border    rounded-full" href="#">Check out with</Link>
                    <div className=" px-6 mx-auto bg-[#F5F7FF] py-6 flex justify-center items-center gap-6">
                        <img src={zip} alt="" /> <div className="w-[2px] h-8 bg-slate-500"></div> <h2>own it now, up to 6 months interest free learn more</h2>
                    </div>
                </div>

            </div>
        </div>
        <div className="bg-[#F5F7FF] mt-14">
                <Benefits></Benefits>
            </div>
        </>
        
    );
};

export default ShoppingCart;