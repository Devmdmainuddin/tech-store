import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Benefits from "../components/Benefits";


const SignUpPage = () => {
    return (
        <>
         
        <div className="max-w-[1398px] px-4 mx-auto">
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
    <div className="bg-[#F5F7FF] mt-14">
        <Benefits></Benefits>
        </div>
        </>
       
    );
};

export default SignUpPage;