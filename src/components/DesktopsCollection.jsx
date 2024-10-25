import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import SingleBanner from "./banner/SingleBanner";
import Container from "./shared/Container";
import destopsimg from '/desktops.jpg'
import Products01 from "./card/Products01";
import { ProductContext } from "../contexts/ProductContextProvider";
import { useContext } from "react";

const DesktopsCollection = () => {
    const { desktops } = useContext(ProductContext)
    return (
        <div>
            <Container>
                <div className="flex gap-1 relative">
                    <div>
                   
                    </div>
                    <div>
                    <Tabs>
                        <TabList className=" flex gap-6 md:gap-16 items-center justify-start flex-wrap text-xl py-6 ">
                            <Tab className='text-[#838383] text-2xl font-josefin font-semibold outline-0 transition-all duration-300 border-b-[3px] border-white '>MSI Infinute Series</Tab>
                            <Tab className='text-[#838383] text-2xl font-josefin font-semibold outline-0 transition-all duration-300 border-b-[3px] border-white '>MSI Triden</Tab>
                            <Tab className='text-[#838383] text-2xl font-josefin font-semibold outline-0 transition-all duration-300 border-b-[3px] border-white '>MSI GL Series</Tab>
                            <Tab className='text-[#838383] text-2xl font-josefin font-semibold outline-0 transition-all duration-300 border-b-[3px] border-white '>MSI Nightblade</Tab>

                        </TabList>

                        <TabPanel >
                            <div className="my-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner to='/all-products'  image={destopsimg} categoreys='MSI Desktops'></SingleBanner>
                                {desktops.slice(0, 5).map((item, idx) =>
                                    <Products01 key={idx} item={item}></Products01>
                                )}
                            </div>
                        </TabPanel>
                        <TabPanel >
                            <div className="my-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                                <SingleBanner to='/all-products' image={destopsimg} categoreys='MSI Laptops'></SingleBanner>
                                {desktops.slice(0, 5).map((item, idx) =>
                                    <Products01 key={idx} item={item}></Products01>
                                )}
                            </div>
                        </TabPanel>
                        <TabPanel >
                            <div className="my-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                                <SingleBanner to='/all-products' image={destopsimg} categoreys='MSI Laptops'></SingleBanner>
                                {desktops.slice(0, 5).map((item, idx) =>
                                    <Products01 key={idx} item={item}></Products01>
                                )}
                            </div>
                        </TabPanel>
                        <TabPanel >
                            <div className="my-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                                <SingleBanner to='/all-products' image={destopsimg} categoreys='MSI Laptops'></SingleBanner>
                                {desktops.slice(0, 5).map((item, idx) =>
                                    <Products01 key={idx} item={item}></Products01>
                                )}

                            </div>
                        </TabPanel>




                    </Tabs>
                    </div>


                </div>
            </Container>
        </div>
    );
};

export default DesktopsCollection;