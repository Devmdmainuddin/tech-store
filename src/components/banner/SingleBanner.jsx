import { Link } from "react-router-dom";


const SingleBanner = ({image,to,categoreys}) => {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(to right bottom, #00000080, #13131880), url(${image})`,
      };
    //  style={backgroundStyle}
    return (
        <div style={backgroundStyle} className={`  bg-no-repeat bg-cover bg-center flex justify-end items-center flex-col`}>
            <h2 className="text-white">{categoreys}</h2>
            <Link to={to} className="text-white mt-16 mb-8">See All Products</Link>
            
        </div>
    );
};

export default SingleBanner;