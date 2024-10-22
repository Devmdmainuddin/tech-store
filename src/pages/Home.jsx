import { Link } from "react-router-dom";
import HeroBanner from "../components/banner/HeroBanner";
import SingleBanner from "../components/banner/SingleBanner";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { ImStarHalf } from "react-icons/im";
import { FiBarChart2 } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import 'react-tabs/style/react-tabs.css';
import monitor from '/monitor.jpg'
import zip from '/zip.png'
import { BsCart } from "react-icons/bs";
import Partnar from "../components/Partnar";
import Blogs from "../components/Blogs";
import Testimonials from "../components/Testimonials";
import Benefits from "../components/Benefits";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContextProvider";
import NewProducts from "../components/Home/NewProducts";
import Electronics from "../components/Electronics";
import MensCollection from "../components/MensCollection";
import WomensCollection from "../components/WomensCollection";

const Home = () => {
    const {  womenClothing } = useContext(ProductContext)

    return (
        <>
            <HeroBanner></HeroBanner>
            <NewProducts></NewProducts>
            <section className="banner-1">
                <div className="max-w-[1398px] px-6 mx-auto bg-[#F5F7FF] py-6 flex justify-center items-center gap-6">
                    <img src={zip} alt="" /> <div className="w-[2px] h-3 bg-slate-500"></div> <h2>own it now, up to 6 months interest free learn more</h2>
                </div>
            </section>
            <Electronics></Electronics>
            <MensCollection></MensCollection>    
            <WomensCollection> </WomensCollection>
            <div className="px-6">
                <Partnar></Partnar>
            </div>
            <div className="px-6">
                <Blogs></Blogs>
            </div>
            <div className="px-6 max-w-[1398px] mx-auto">
                <Testimonials></Testimonials>
            </div>

            <Benefits></Benefits>

        </>
    );
};

export default Home;