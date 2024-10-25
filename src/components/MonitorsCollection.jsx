import { useContext } from "react";
import SingleBanner from "./banner/SingleBanner";
import Products01 from "./card/Products01";
import Container from "./shared/Container";
import { ProductContext } from "../contexts/ProductContextProvider";
import monitor from '/monitor.jpg'

const MonitorsCollection = () => {
    const { monitors } = useContext(ProductContext)
    return (
        <div>
            <Container>
            <div className="my-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner to='/all-products'  image={monitor} categoreys='Gaming Monitors'></SingleBanner>
                                {monitors.slice(0, 5).map((item, idx) =>
                                    <Products01 key={idx} item={item}></Products01>
                                )}
                            </div>
            </Container>
        </div>
    );
};

export default MonitorsCollection;