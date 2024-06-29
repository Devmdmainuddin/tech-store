import { FaRegEdit } from "react-icons/fa";
import { IoIosArrowForward, IoIosArrowUp } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import zip from '/zip.png'

const Login = () => {
    return (
        <div>
            <div className="max-w-[1398px] px-4 mx-auto flex gap-6">
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
                            <tr>
                                <td className='px-5 py-5 border-b border-gray-200 text-sm flex items-center gap-6'>
                                    <img className="w-[120px] h-[120px] object-cover" src="https://i.ibb.co/SBpL1cK/pexels-aleksandar-pasaric-325185-1.png" alt="" />
                                    <p className='text-gray-900 whitespace-no-wrap w-[270px]'>MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty</p>
                                </td>
                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className='text-gray-900 whitespace-no-wrap'>$4,349.00</p>
                                </td>

                                <td className='px-5 py-5 border-b border-gray-200  text-sm'>
                                    <span className="text-lg  bg-[#F5F7FF] p-3 rounded-lg  font-body">1</span>

                                </td>
                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className='text-gray-900 whitespace-no-wrap'>$13,047.00</p>
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
                            </tr>
                            <tr>
                                <td className='px-5 py-5 border-b border-gray-200 text-sm flex items-center gap-6'>
                                    <img className="w-[120px] h-[120px] object-cover" src="https://i.ibb.co/SBpL1cK/pexels-aleksandar-pasaric-325185-1.png" alt="" />
                                    <p className='text-gray-900 whitespace-no-wrap w-[270px]'>MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty</p>
                                </td>
                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className='text-gray-900 whitespace-no-wrap'>$4,349.00</p>
                                </td>

                                <td className='px-5 py-5 border-b border-gray-200  text-sm'>
                                    <span className="text-lg  bg-[#F5F7FF] p-3 rounded-lg  font-body">1</span>
                                </td>
                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className='text-gray-900 whitespace-no-wrap'>$13,047.00</p>
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
                            </tr>
                            <tr>
                                <td className='px-5 py-5 border-b border-gray-200 text-sm flex items-center gap-6'>
                                    <img className="w-[120px] h-[120px] object-cover" src="https://i.ibb.co/SBpL1cK/pexels-aleksandar-pasaric-325185-1.png" alt="" />
                                    <p className='text-gray-900 whitespace-no-wrap w-[270px]'>MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty</p>
                                </td>
                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className='text-gray-900 whitespace-no-wrap'>$4,349.00</p>
                                </td>

                                <td className='px-5 py-5 border-b border-gray-200  text-sm'>
                                    <span className="text-lg  bg-[#F5F7FF] p-3 rounded-lg  font-body">1</span>
                                </td>
                                <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                                    <p className='text-gray-900 whitespace-no-wrap'>$13,047.00</p>
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
                            </tr>


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
                    </details>
                    <details className="group [&_summary::-webkit-details-marker]:hidden" open>
                        <summary
                            className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg"
                        >
                            <h3 className="mt-[18px] text-[18px] font-normal ">Apply Discount Code</h3>
                            <IoIosArrowUp />
                        </summary>
                       
                    </details>


                    
                    <div className="divider"></div>
                    <div className="flex justify-between text-[13px] font-semibold">
                        <p>Subtotal</p>
                        <span>$13,047.00</span>
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
                        <span>$13,068.00</span>
                    </div>

                    <Link className="W-full mt-4 block py-3 px-10  text-[14px]  text-white font-semibold text-center bg-[#0156FF]   rounded-full" href="#">Proceed to Checkout</Link>
                    <Link className="W-full mt-4 block py-3 px-10  text-[14px]  text-white font-semibold text-center bg-[#FFB800]   rounded-full" href="#">Check out with</Link>
                    <Link className="W-full mt-4 block py-3 px-10  text-[14px]  text-[#A2A6B0] font-semibold text-center border-[#A2A6B0] border    rounded-full" href="#">Check out with</Link>
                    <div className=" px-6 mx-auto bg-[#F5F7FF] py-6 flex justify-center items-center gap-6">
                        <img src={zip} alt="" /> <div className="w-[2px] h-8 bg-slate-500"></div> <h2>own it now, up to 6 months interest free learn more</h2>
                    </div>
                </div>

            </div>

            {/* hero banner */}
            <div className="2xl:mx-auto 2xl:container md:px-20 px-4 md:py-12 py-9">
                <div className="relative rounded-md">
                    <img src="https://i.ibb.co/SBpL1cK/pexels-aleksandar-pasaric-325185-1.png" alt="city view" className="w-full h-full rounded-md  object-center object-fill absolute sm:block hidden" />
                    <img src="https://i.ibb.co/LQpxBsc/mobile.png" alt="city view" className="w-full h-full rounded-md absolute object-center object-fill sm:hidden" />
                    <div className="text-xl relative z-20 bg-gradient-to-r from-blue-700 to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md ">
                        <div>
                            <h1 className="md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64">Act Before It’s Too Late!</h1>
                            <p className="text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4">A good idiom for kids is "It's raining cats and dogs." Kids know what both cats and dogs are from an early age.</p>
                        </div>
                        <div className="md:mt-12 mt-20">
                            <button className="text-base font-medium leading-4 text-indigo-700 bg-white sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white">Explore More</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="https://cdn.tuk.dev/assets/templates/prodify/ProductAdoption.png" alt />
                <div className="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                    <div className="flex items-center">
                        <div className="p-4 bg-yellow-200 rounded-md">
                            <h2>mainuddin</h2>
                        </div>

                    </div>
                </div>
            </div>




            <ul className="flex flex-wrap items-center mb-10 xl:mb-0">
                <li className="mr-6">
                    <Link className="flex items-center text-sm font-medium transition-all duration-300  hover:text-gray-500" href="#">
                        <span>Home</span>
                        <IoIosArrowForward />
                    </Link>
                </li>
                <li className="mr-6">
                    <Link className="text-sm font-medium text-[#A3A3A3] transition-all duration-300  hover:text-gray-700" href="#">
                        <span>Login</span>
                    </Link>
                </li>


            </ul>
            <h2 className="text-3xl font-semibold">Customer Login</h2>
            <div className="flex justify-center gap-8">
                <div className="px-[57px] py-10 bg-slate-100">
                    <h2 className="text-lg font-semibold">Registered Customers</h2>
                    <p className="text-sm font-light leading-10">If you have an account, sign in with your email address.</p>
                    <form action="">
                        <div className="flex flex-col  mt-3">
                            <label htmlFor="email">Email *</label>
                            <input type="email" name="email" id="" placeholder="your Email" className="p-2 border border-[#A2A6B0] outline-none mt-2" />
                        </div>
                        <div className="flex flex-col  mt-3">
                            <label htmlFor="password">Email *</label>
                            <input type="password" name="password" id="" placeholder="your password" className="p-2 border border-[#A2A6B0] outline-none mt-2" />
                        </div>
                        <div className="flex justify-center items-center gap-6 ">
                            <button className="mt-4 inline-block py-3 px-10  text-[14px]  text-white font-semibold text-center bg-blue-600   rounded-full" href="#">Login</button>
                            <p className="text-blue-600 font-normal">Forgot Your Password?</p>
                        </div>

                    </form>

                </div>
                <div className="px-[57px] py-10 bg-slate-100">
                    <h2 className="text-lg font-semibold">New Customer?</h2>
                    <p className="text-sm font-light leading-5">Creating an account has many benefits: </p>
                    <ul className='list-disc list-inside mt-6 text-sm font-light '>
                        <li className="text-sm font-light leading-5">Check out faster</li>
                        <li className="text-sm font-light leading-5" >Keep more than one address</li>
                        <li className="text-sm font-light leading-5">Track orders and more</li>

                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Login;