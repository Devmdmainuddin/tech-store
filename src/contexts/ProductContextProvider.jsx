import { createContext, useEffect, useState } from "react";
import useAxiosCommon from "../hooks/useAxiosCommon";
import axios from "axios";
import PropTypes from 'prop-types';



export const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
    const [products, setProduct] = useState([]);
    const [menClothing, setMenClothing] = useState([]);
    const [womenClothing, setWomenClothing] = useState([]);
    const [electronics, setElectronics] = useState([]);
    const axiosCommon = useAxiosCommon()

    //  console.log(filteredProducts);
    // const filteredProducts = products.filter(product => product.category === "men's clothing" || products.category === "women's clothing")
    useEffect(() => {
        // fetch('http://localhost:4000/')
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
                const menClothings = [...data].filter(p => p.category == "men's clothing")
                setMenClothing(menClothings)
                const womenClothings = [...data].filter(p => p.category == "women's clothing")
                setWomenClothing(womenClothings)
                const electronic = [...data].filter(p => p.category == 'electronics')
                setElectronics(electronic)
            })
    }, [])
    return (
        <ProductContext.Provider value={{ products,electronics,menClothing,womenClothing }}> {children} </ProductContext.Provider>
    );
};
ProductContextProvider.propTypes = {
    children: PropTypes.node,
}
export default ProductContextProvider;