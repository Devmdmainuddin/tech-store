import { Link } from "react-router-dom";
import Benefits from "../components/Benefits";
import { IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

const Checkout = () => {
    const carts = useSelector((state) => state.cart.cartItem)
    return (
        <div>
            <div className="max-w-[1398px] mx-auto px-6">
                <ul className="flex flex-wrap items-center mb-10 xl:mb-0">
                    <li className="mr-6">
                        <Link to='/' className="flex items-center text-sm font-medium transition-all duration-300  hover:text-gray-500" href="#">
                            <span>Home</span>
                            <IoIosArrowForward />
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link to='/shoppingCart' className="flex items-center text-sm font-medium transition-all duration-300  hover:text-gray-500" href="#">
                            <span>shopingCart</span>
                            <IoIosArrowForward />
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link className="flex items-center text-sm font-medium transition-all duration-300  hover:text-gray-500" href="#">
                            <span>Checkout Process</span>
                            <IoIosArrowForward />
                        </Link>
                    </li>



                </ul>
                <div>
                    <h2 className='text-3xl font-medium mt-6'>Shopping Cart</h2>

                </div>
                <div className="flex justify-evenly">
                    <div>
                        <h3 className="mt-[18px] text-[18px] font-normal ">Estimate Shipping and Tax</h3>
                        <div className="divider mt-3"></div>
                        <div className="flex flex-col ">
                            <label htmlFor="email" className="text-[13px] font-semibold mt-3">Email Address *</label>
                            <input type="email" name="email" placeholder="Enter Email Address *" className="py-3 px-8 outline-none border mt-3" />

                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="fname" className="text-[13px] font-semibold mt-3">First Name *</label>
                            <input type="text" name="fname" placeholder="Enter First Name" className="py-3 px-8 outline-none border mt-3" />

                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="lname" className="text-[13px] font-semibold mt-3">Last Name *</label>
                            <input type="text" name="lname" placeholder="Enter Last Name " className="py-3 px-8 outline-none border mt-3" />

                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="Company" className="text-[13px] font-semibold mt-3">Company *</label>
                            <input type="text" name="Company" placeholder="Enter Company  Name " className="py-3 px-8 outline-none border mt-3" />

                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="Street" className="text-[13px] font-semibold mt-3">Street Address *</label>
                            <input type="text" name="Street" placeholder="Enter Street Address  " className="py-3 px-8 outline-none border mt-3" />

                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="City" className="text-[13px] font-semibold mt-3">City *</label>
                            <input type="text" name="City" placeholder="Enter City  " className="py-3 px-8 outline-none border mt-3" />

                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="State" className="text-[13px] font-semibold mt-3">State/Province *</label>
                            <input type="text" name="State" placeholder="Enter State/Province  " className="py-3 px-8 outline-none border mt-3" />

                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="Postal" className="text-[13px] font-semibold mt-3">Zip/Postal Code *</label>
                            <input type="text" name="Postal" placeholder="Enter Zip/Postal Code  " className="py-3 px-8 outline-none border mt-3" />

                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="Country" className="text-[13px] font-semibold mt-3">Country *</label>
                            <input type="text" name="Country" placeholder="Enter Country   " className="py-3 px-8 outline-none border mt-3" />

                        </div>
                        <div className="flex flex-col ">
                            <label htmlFor="Number" className="text-[13px] font-semibold mt-3">Phone Number *</label>
                            <input type="number" name="Number" placeholder="Enter Phone Number   " className="py-3 px-8 outline-none border mt-3" />

                        </div>
                        <h2 className="text-[13px] font-semibold mt-3">Standard Rate</h2>
                        <div>
                            <input type="radio" id="Standard" name="drone" value="Standard" className="mt-3" />
                            <label htmlFor="Standard" className="ml-2">Price may vary depending on the item/destination. Shop Staff will contact you. $21.00</label>
                        </div>
                        <h2 className="text-[13px] font-semibold mt-3">Pickup from store</h2>
                        <div>
                            <input type="radio" id="store" name="drone" value="store" className="mt-3" />
                            <label htmlFor="store" className="ml-2">1234 Street Adress City Address, 1234 $0.00</label>
                        </div>
                        <button className="W-full mt-4 block py-3 px-10  text-[14px]  text-white font-semibold text-center bg-[#0156FF]    rounded-full" href="#">Next</button>
                    </div>
                    <div className="w-[446px] h-[313px] inline-block p-6 bg-[#F5F7FF]">
                        <h2 className="text-2xl font-semibold">Order Summary</h2>
                        <div className="divider mt-3"></div>
                        <div>
                            {carts.map((item,idx)=><div key={idx} className='px-5 py-5 border-b border-gray-200 text-sm flex items-center gap-6'>
                            <img className="w-[120px] h-[120px] object-cover" src={item.image} alt="" />
                            <p className='text-gray-900 whitespace-no-wrap w-[270px]'>{item.title}</p>
                        </div>)}
                        
                        </div>
                        

                    </div>
                </div>




            </div>
            <div className="bg-[#F5F7FF] mt-14">
                <Benefits></Benefits>
            </div>
        </div>
    );
};

export default Checkout;