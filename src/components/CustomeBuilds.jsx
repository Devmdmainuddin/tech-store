import { useContext } from "react";
import SingleBanner from "./banner/SingleBanner";
import Products01 from "./card/Products01";
import Container from "./shared/Container";
import CustomeImg from '/cus.jpg'
import { ProductContext } from "../contexts/ProductContextProvider";

const CustomeBuilds = () => {
    const { customBuilds } = useContext(ProductContext)
    return (
        <div>
            <Container>
            <div className="my-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner to='/all-products'  image={CustomeImg} categoreys='Custome Builds'></SingleBanner>
                                {customBuilds.slice(0, 5).map((item, idx) =>
                                    <Products01 key={idx} item={item}></Products01>
                                )}
                            </div>
            </Container>
        </div>
    );
};

export default CustomeBuilds;