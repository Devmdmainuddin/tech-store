import { useContext, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { FaMinus, FaPlus, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import avatarImg from '../../assets/user-profile.png'
import logo from '/logo.png'
import { GrEdit } from "react-icons/gr";
import { IoMdClose } from "react-icons/io";
import useAuth from '../../hooks/useAuth';

import { useNavigate } from 'react-router-dom';
import { ProductContext } from "../../contexts/ProductContextProvider";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, deleteItem } from "../../redux/state/cartSlice";

const Navbar = () => {
    const { user, logOut } = useAuth()
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const [usemenuOpen, setusemenuOpen] = useState(false)
    const { categorys } = useContext(ProductContext)
    const carts = useSelector((state) => state.cart.cartItem)
    let [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();
    const handleCategoryFilter = (category) => {
        navigate(`/all-products?category=${encodeURIComponent(category)}`);
    };

    const handleDelete = id => {
        dispatch(deleteItem(id));
    }

    useEffect(() => {
        const cartTotal = carts.reduce((acc, items) => acc + parseInt(items.price * items.qun), 0)
        setTotalPrice(cartTotal)

    }, [carts,])
    const handkeMinusQuantity = (items, quantity) => {
        dispatch(changeQuantity({ ...items, qun: quantity - 1, }))
    }
    const handkePlusQuantity = (items, quantity) => {
        dispatch(changeQuantity({ ...items, qun: quantity + 1, }))
    }

    return (
        <div className=" w-full">
            <nav className="relative max-w-[1398px] mx-auto py-6  flex justify-between items-center ">
                <Link><img src={logo} alt="" /></Link>
                <ul className="hidden lg:flex gap-6 items-center">
                    {categorys.map((item, idx) => <li key={idx} onClick={() => handleCategoryFilter(item)}><Link>{item}</Link></li>)}

                    <li ><Link to='/all-products'>All Other Products</Link></li>
                    <li><Link>Repairs</Link></li>
                    <li><Link className="py-2 px-6 rounded-full border-2 border-[#0156FF] text-[#0156FF]">Our Deals</Link></li>
                </ul>
                <div className='hidden lg:flex items-center gap-6 '>
                    <FaSearch className="text-2xl" />
                    <button
                        onClick={() => setCartOpen(!cartOpen)}
                        className="relative">
                        <BsCart3 className="text-2xl" />
                        <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#0156FF] text-white flex justify-center items-center">{carts.length}</div>
                    </button>

                    {/* {
                        cartOpen && ( */}
                    <div className={`absolute z-50 top-full right-12 transition-all duration-300 ${cartOpen ? "opacity-100 visible z-50" : " opacity-0 invisible"}`}>
                        <div
                            className="relative w-screen max-w-sm mx-auto shadow-2xl bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
                            aria-modal="true"
                            role="dialog"
                            tabIndex="-1"
                        >
                            <button
                                onClick={() => setCartOpen(!cartOpen)}
                                className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
                                <span className="sr-only">Close cart</span>

                                <IoMdClose className='p-1  text-3xl ' />
                            </button>
                            <h2 className='text-center text-xl font-semibold '>My Cart</h2>
                            <p className='text-[#A2A6B0] text-sm font-normal text-center'> <span> {carts.length} </span> item in cart</p>
                            <Link to='/shoppingCart' className=" rounded-full border-2 border-[#0156FF] text-[#0156FF] flex gap-2 items-center justify-center py-2 mt-6 px-2">View or Edit Your Cart</Link>
                            <div className='divider'></div>
                            <div className="mt-4 space-y-6">
                                <ul className="space-y-4">
                                    {carts.map((item, idx) => <li key={idx} className="flex items-center gap-4">
                                        <div className='flex-1 flex gap-1 items-center'>
                                            
                                           
                                                <span
                                                    className="cursor-pointer inline-block text-sm text-gray-900   font-normal "
                                                    onClick={() => handkeMinusQuantity(item, item.qun)}
                                                >
                                                    <FaMinus />
                                                </span>
                                                <span className="inline-block px-2 text-sm text-gray-900 font-normal">{item.qun}</span>
                                                <span
                                                    className="cursor-pointer inline-block  text-sm text-gray-900 "
                                                    onClick={() => handkePlusQuantity(item, item.qun)}
                                                >
                                                    <FaPlus />
                                                </span>
                                          
                                        </div>
                                        <img
                                            src={item.image}
                                            alt=""
                                            className="size-16 rounded object-cover"
                                        />

                                        <div>
                                            <h3 className="text-[13px] text-gray-900 ">{item.title}</h3>
                                        </div>

                                        <div className="flex flex-1 flex-col items-end  gap-1">
                                            <button >
                                                <IoMdClose onClick={() => handleDelete(item.id)} className='p-1 rounded-full border text-xl transition text-gray-600 hover:text-red-600 border-gray-600 hover:border-red-600' />
                                            </button>
                                            <button >
                                                <GrEdit className='p-1 rounded-full border text-xl transition text-gray-600 hover:text-[#0156FF] border-gray-600 hover:border-[#0156FF]' />
                                            </button>
                                        </div>
                                    </li>)}


                                    <div className='divider'></div>
                                </ul>
                                <h2 className='text-center text-[13px]'>Subtotal: <span className='font-semibold text-[18px]'>${totalPrice}</span> </h2>

                                <div className="space-y-4 text-center">


                                    <Link to='/checkout' className=" rounded-full border-2 text-white bg-[#0156FF] flex gap-2 items-center justify-center py-2 mt-6 px-2">Go to Checkout</Link>

                                    <Link className=" rounded-full border-2  bg-[#FFB800] flex gap-2 items-center justify-center py-2 mt-6 px-2">Check out with</Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* )
                    } */}


                    <img
                        onClick={() => setusemenuOpen(!usemenuOpen)}
                        className='rounded-full transition-all duration-700'
                        referrerPolicy='no-referrer'
                        src={user && user.photoURL ? user.photoURL : avatarImg}
                        alt='profile'
                        height='36'
                        width='36'
                    />
                    {/* {
                        usemenuOpen && ( */}
                    <div className={`absolute z-50 top-full right-0 transition-all duration-300  ${usemenuOpen ? "opacity-100 visible z-50" : " opacity-0 invisible"}`}>
                        {user ? (
                            <>
                                <div

                                    className='px-4 py-3 bg-neutral-100 transition font-semibold cursor-pointer'
                                >
                                    my profile
                                </div>
                                <div
                                    onClick={logOut}
                                    className='px-4 py-3 bg-neutral-100 transition font-semibold cursor-pointer'
                                >
                                    Logout
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col gap-4 p-9 bg-slate-100">
                                    <Link
                                        to='/login'
                                        className='px-4 py-3 bg-neutral-300 transition font-semibold'
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to='/signup'
                                        className='px-4 py-3 bg-neutral-300 transition font-semibold'
                                    >
                                        Sign Up
                                    </Link>
                                </div>

                            </>
                        )}
                    </div>


                    {/* //     )
                    // } */}
                </div>


                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className=' p-2 md:py-1 md:px-2 border-[1px] border-neutral-200 lg:hidden flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    <AiOutlineMenu className="" />

                    {isOpen && (
                        <div className='absolute z-50 rounded-xl shadow-md w-[40vw] md:w-[30vw] bg-white overflow-hidden left-0 top-full text-sm'>
                            <div className='flex lg:hidden flex-col cursor-pointer'>
                                <Link
                                    to='/'
                                    className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                >
                                    Home
                                </Link>


                                <>
                                    <Link
                                        to='/about'
                                        className='block  px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                    >
                                        about
                                    </Link>

                                    <Link
                                        to='/service'
                                        className='block  px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                    >
                                        service
                                    </Link>
                                    <div
                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                                    >
                                        Logout
                                    </div>
                                </>

                                <>
                                    <Link
                                        to='/login'
                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to='/signup'
                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                    >
                                        Sign Up
                                    </Link>
                                </>

                            </div>
                        </div>
                    )}
                </div>

            </nav>
        </div>
    );
};

export default Navbar;