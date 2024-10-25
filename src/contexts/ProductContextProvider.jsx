import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';



export const ProductContext = createContext();
const ProductContextProvider = ({ children }) => {
    const [products, setProduct] = useState([]);
    const [categorys, setCategory] = useState([]);
    const [mobiles, setMobile] = useState([]);
    const [laptops, setLaptop] = useState([]);
    const [desktops, setDesktop] = useState([]);
    const [monitors, setMonitor] = useState([]);
    const [customBuilds, setCustomBuilds] = useState([]);

    useEffect(() => {
        fetch('fakedata.json')
            .then((res) => res.json())
            .then((data) => {
                setProduct(data)
                const mobile = [...data].filter(p => p.category == "mobile")
                setMobile(mobile)
                const laptoop = [...data].filter(p => p.category == 'laptop')
                setLaptop(laptoop)
                const desktop = [...data].filter(p => p.category == "desktop")
                setDesktop(desktop)
                const monitor = [...data].filter(p => p.category == 'monitor')
                setMonitor(monitor)
                const builds = [...data].filter(p => p.category == 'custom builds')
                setCustomBuilds(builds)
                setCategory([... new Set(data?.map(item => item.category))])

            })
    }, [])
    return (
        <ProductContext.Provider value={{ products, categorys, mobiles, laptops, desktops, monitors, customBuilds }}> {children} </ProductContext.Provider>
    );
};
ProductContextProvider.propTypes = {
    children: PropTypes.node,
}
export default ProductContextProvider;