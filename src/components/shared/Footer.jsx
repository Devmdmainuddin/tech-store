import paypal from '/paypal.jpg'
import maestro from '/maestro.jpg'
import visa from '/visa.jpg'
import discover from '/discover.jpg'
import american from '/american-express.jpg'
import { FaSquareFacebook } from 'react-icons/fa6'
import { FaInstagramSquare } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
         
         <div className="bg-[#020203] text-white">
            <div className="max-w-[1398px] mx-auto flex justify-between py-12 px-6">
                <div>
                    <h2 className=" text-white text-4xl font-medium">Sign Up To Our Newsletter.</h2>
                    <p className="mt-[9px]">Be the first to hear about the latest offers.</p>
                </div>

                <div className="lg:flex mb-4">
                    <input className="py-3 px-6 xl:px-9 mb-2 lg:mb-0 xl:mb-0 xl:mr-2 w-full lg:w-auto bg-transparent placeholder-darkBlueGray-400 border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded-md" type="email" placeholder="Enter you Email" />
                    <button className="inline-block py-3 px-10  text-[14px]  text-white font-semibold text-center bg-blue-600   rounded-full" href="#">Subscribe</button>
                </div>

            </div>
            <div className="max-w-[1398px] mx-auto flex flex-wrap  mb-9 px-6">
                <div className="w-full md:w-1/2 lg:w-1/5 p-8">
                    <h3 className="mb-6 text-gray-300 font-medium">Information</h3>
                    <ul>
                         <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">About Us</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">About Zip</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Privacy Policy</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Search</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Pricing</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Terms</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Orders and Returns</a></li>
                        <li><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/5 p-8">
                    <h3 className="mb-6 text-gray-300 font-medium">PC Parts</h3>
                    <ul>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">CPUS</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Add On Cards</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Hard Drives (Internal)</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Graphic Cards</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Keyboards / Mice</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Cases / Power Supplies / Cooling</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">RAM (Memory)</a></li>
                        <li><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Software</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Speakers / Headsets</a></li>
                        <li><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Motherboards</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/5 p-8">
                    <h3 className="mb-6 text-gray-300 font-medium">Support</h3>
                    <ul>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Weekly Demos</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Contact Us</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Report a Bug</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Report an Outage</a></li>
                        <li><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Request a New Feature</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/5 p-8">
                    <h3 className="mb-6 text-gray-300 font-medium">Use Cases</h3>
                    <ul>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">For Teams</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">For Blog Writers</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">For Social Media Managers</a></li>
                        <li><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">For Email Marketers</a></li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/5 p-8">
                    <h3 className="mb-6 text-gray-300 font-medium">Partners</h3>
                    <ul>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">About Partners</a></li>
                        <li className="mb-2.5"><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Partner Desktop</a></li>
                        <li><a className="inline-block text-lg font-medium text-white hover:text-opacity-60 transition duration-300" href="#">Our Partners</a></li>
                    </ul>
                </div>
            </div>
            <div className='max-w-[1398px] mx-auto h-[1px] bg-slate-400 px-6 '></div>
            <div className="max-w-[1398px] mx-auto flex justify-between py-12 px-6">
                <div className="flex gap-2">
                    <FaSquareFacebook />
                    <FaInstagramSquare />
                    </div>


                <div className="flex gap-2">
                    <img src={paypal} alt="" />
                    <img src={maestro} alt="" />
                    <img src={visa} alt="" />
                    <img src={discover} alt="" />
                    <img src={american} alt="" />

                </div>
                <p>Copyright © 2020 Shop Pty. Ltd.</p>
            </div>
        </div>
        </>
       
    );
};

export default Footer;