import { Link } from "react-router-dom";
import SingleCard from "../SingleCard";
import Container from "../shared/Container";


const NewProducts = () => {
    return (
        <div> 
            <Container>
            <div className="flex justify-between items-center mt-[33px] ">
                    <h2 className="text-[22px] font-semibold">New Products</h2>
                    <Link Link to='/all-products' className="text-[#0156FF] text-[13px] font-normal">See All New Products</Link>
                </div>
                    <SingleCard></SingleCard>
            </Container>
            
        </div>
    );
};

export default NewProducts;