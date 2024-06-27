import { GrEdit } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";


const MiniCart = () => {
    return (
        <div
        className="relative w-screen max-w-sm mx-auto shadow-2xl bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
        aria-modal="true"
        role="dialog"
        tabIndex="-1"
    >
        <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
            <span className="sr-only">Close cart</span>

            <IoMdClose className='p-1  text-3xl ' />
        </button>
        <h2 className='text-center text-xl font-semibold '>My Cart</h2>
        <p className='text-[#A2A6B0] text-sm font-normal text-center'> <span> 2 </span> item in cart</p>
        <Link className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2 mt-6 px-2">View or Edit Your Cart</Link>
        <div className='divider'></div>
        <div className="mt-4 space-y-6">
            <ul className="space-y-4">
                <li className="flex items-center gap-4">
                    <div className='flex-1'>
                        <h3 className="flex gap-1 text-sm text-gray-900"><span>1</span> x</h3>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                        alt=""
                        className="size-16 rounded object-cover"
                    />

                    <div>
                        <h3 className="text-[13px] text-gray-900 ">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
                    </div>

                    <div className="flex flex-1 flex-col items-end  gap-1">
                        <button >
                            <IoMdClose className='p-1 rounded-full border text-xl transition text-gray-600 hover:text-red-600 border-gray-600 hover:border-red-600' />
                        </button>
                        <button >
                            <GrEdit className='p-1 rounded-full border text-xl transition text-gray-600 hover:text-[#0156FF] border-gray-600 hover:border-[#0156FF]' />
                        </button>
                    </div>
                </li>
                <div className='divider'></div>
                <li className="flex items-center gap-4">
                    <div className='flex-1'>
                        <h3 className="flex gap-1 text-sm text-gray-900"><span>1</span> x</h3>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                        alt=""
                        className="size-16 rounded object-cover"
                    />

                    <div>
                        <h3 className="text-[13px] text-gray-900">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
                    </div>

                    <div className="flex flex-1 flex-col items-end  gap-1">
                        <button >
                            <IoMdClose className='p-1 rounded-full border text-xl transition text-gray-600 hover:text-red-600 border-gray-600 hover:border-red-600' />
                        </button>
                        <button >
                            <GrEdit className='p-1 rounded-full border text-xl transition text-gray-600 hover:text-[#0156FF] border-gray-600 hover:border-[#0156FF]' />
                        </button>
                    </div>
                </li>
                <div className='divider'></div>
                <li className="flex items-center gap-4">
                    <div className='flex-1'>
                        <h3 className="flex gap-1 text-sm text-gray-900"><span>1</span> x</h3>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
                        alt=""
                        className="size-16 rounded object-cover"
                    />

                    <div>
                        <h3 className="text-[13px] text-gray-900">EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...</h3>
                    </div>

                    <div className="flex flex-1 flex-col items-end  gap-1">
                        <button className="  ">
                            <IoMdClose className='p-1 rounded-full border text-xl transition text-gray-600 hover:text-red-600 border-gray-600 hover:border-red-600' />
                        </button>
                        <button >
                            <GrEdit className='p-1 rounded-full border text-xl transition text-gray-600 hover:text-[#0156FF] border-gray-600 hover:border-[#0156FF]' />
                        </button>
                    </div>
                </li>
                <div className='divider'></div>
            </ul>
            <h2 className='text-center text-[13px]'>Subtotal: <span className='font-semibold text-[18px]'>$499.00</span> </h2>

            <div className="space-y-4 text-center">
               

            <Link className=" rounded-full border-2 text-white bg-[#0156FF] flex gap-2 items-center justify-center py-2 mt-6 px-2">Go to Checkout</Link>

            <Link className=" rounded-full border-2  bg-[#FFB800] flex gap-2 items-center justify-center py-2 mt-6 px-2">Check out with</Link>
            </div>
        </div>
    </div>
    );
};

export default MiniCart;