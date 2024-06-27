import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";


const Layout = () => {
    return (
        <div>
        
            {/* header */}
            <Navbar/>
            {/* main */}
            <Outlet/>
            {/* footer */}
            <Footer/>
        </div>
    );
};

export default Layout;