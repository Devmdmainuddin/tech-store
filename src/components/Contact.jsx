import { CiClock2 } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";


const Contact = () => {
    return (
        <div>
            <ul className="flex flex-wrap items-center mb-10 xl:mb-0">
                <li className="mr-6">
                    <Link className="flex items-center text-sm font-medium transition-all duration-300  hover:text-gray-500" href="#">
                        <span>Home</span>
                        <IoIosArrowForward />
                    </Link>
                </li>
                <li className="mr-6">
                    <Link className="text-sm font-medium text-[#A3A3A3] transition-all duration-300  hover:text-gray-700" href="#">
                        <span>Contact Us</span>
                    </Link>
                </li>


            </ul>
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <div className="flex justify-between gap-16">
                <div>

                    
                    <p className="mt-3 font-light max-w-[718px]">We love hearing from you, our Shop customers.
                        Please contact us and we will make sure to get back to you as soon as we possibly can.</p>
                    <form action="" className=" mt-6 justify-center items-center">
                        <div className="flex justify-between">
                            <div>
                                <label htmlFor="fname">Your Name *</label>
                                <input type="text" name="fname" id="fname" className="w-full p-2 border border-[#A2A6B0] outline-none mt-2" placeholder="type your name here" />
                            </div>
                            <div>
                                <label htmlFor="Email">Your Email *</label>
                                <input type="email" name="Email" id="Email" className="w-full p-2 border border-[#A2A6B0] outline-none mt-2" placeholder="type your email here" />
                            </div>


                        </div>
                        <div className="flex flex-col mt-3">
                            <label htmlFor="number">Your Phone Number</label>
                            <input type="number" name="number" id="number" className="p-2 border border-[#A2A6B0] outline-none mt-2" /></div>


                        <div className="flex flex-col mt-3">
                            <label htmlFor="message">What’s on your mind? *</label>

                            <textarea name="message" id="" className="p-2 border mt-3 h-[236px] resize-none"></textarea >
                        </div>

                        <button className="mt-4 inline-block py-3 px-10  text-[14px]  text-white font-semibold text-center bg-blue-600   rounded-full" href="#">Submit</button>




                    </form>
                </div>
                <div className=" max-w-[411px] h-[404px] p-5 bg-slate-100">
                    <div className="flex gap-3 ">
                        <IoLocationOutline className="text-2xl" />
                        <div>
                            <h2 className="text-lg font-semibold ">Address:</h2>
                            <p> 1234 Street Adress City Address, 1234 </p>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                        <IoCallOutline className="text-2xl" />
                        <div>
                            <h2 className="text-lg font-semibold ">Phone:</h2>
                            <p> (00)1234 5678 </p>
                        </div>
                    </div>
                    <div className="flex gap-3  mt-4">
                        <CiClock2 className="text-2xl" />
                        <div>
                            <h2 className="text-lg font-semibold ">We are open:</h2>
                            <p> Monday - Thursday: 9:00 AM - 5:30 PM
                                Friday 9:00 AM - 6:00 PM
                                Saturday: 11:00 AM - 5:00 PM</p>
                        </div>
                    </div>
                    <div className="flex gap-3  mt-4">
                        <TfiEmail className="text-2xl" />
                        <div>
                            <h2 className="text-lg font-semibold ">E-mail:</h2>
                            <p> shop@email.com</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Contact;