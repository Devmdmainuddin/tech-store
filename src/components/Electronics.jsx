import { useContext } from "react";
import Products01 from "./card/Products01";
import { ProductContext } from "../contexts/ProductContextProvider";
import SingleBanner from "./banner/SingleBanner";
import builds from '/custome_builds.jpg'
const Electronics = () => {
    const { electronics} = useContext(ProductContext)
    return (
        <div>
            <section className="electronicsProduct">
                <div className="max-w-[1398px] mx-auto px-6  my-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                    <SingleBanner image={builds} categoreys='electronics'></SingleBanner>
                    {electronics.slice(0,5).map((item,idx) =>
                       <Products01 key={idx} item={item}></Products01>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Electronics;