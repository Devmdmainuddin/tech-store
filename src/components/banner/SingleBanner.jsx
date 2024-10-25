import { Link } from "react-router-dom";


const SingleBanner = ({image,to,categoreys,className}) => {
    const backgroundStyle = {
        backgroundImage: `linear-gradient(to right bottom, #00000080, #13131880), url(${image})`,
      };
    //  style={backgroundStyle}
    return (
        <div style={backgroundStyle} className={` w-[232px] h-[346px] bg-no-repeat bg-cover bg-center flex justify-end items-center flex-col ${className}`}>
            <h2 className="text-white">{categoreys}</h2>
            <Link to={to} className="text-white mt-16 mb-8">See All Products</Link>
            
        </div>
    );
};

export default SingleBanner;