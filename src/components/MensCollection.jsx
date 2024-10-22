
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Container from "./shared/Container";
import SingleBanner from "./banner/SingleBanner";
import laptopsimg from '/laptops.jpg'
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContextProvider";
import Products01 from "./card/Products01";
const MensCollection = () => {
    const { menClothing } = useContext(ProductContext)
    return (
        <div>
            <Container>
            <section className="mensCollection">
            <Tabs>
                    <TabList className=" flex gap-6 md:gap-16 items-center justify-start flex-wrap text-xl py-6 ">
                        <Tab className='text-[#838383] text-2xl font-josefin font-semibold outline-0 transition-all duration-300 border-b-[3px] border-white '>Cloting</Tab>
                        <Tab className='text-[#838383] text-2xl font-josefin font-semibold outline-0 transition-all duration-300 border-b-[3px] border-white '>shoes</Tab>
                        <Tab className='text-[#838383] text-2xl font-josefin font-semibold outline-0 transition-all duration-300 border-b-[3px] border-white '>Muslim Wear</Tab>
                        <Tab className='text-[#838383] text-2xl font-josefin font-semibold outline-0 transition-all duration-300 border-b-[3px] border-white '>Accessories</Tab>
                        <Tab className='text-[#838383] text-2xl font-josefin font-semibold outline-0 transition-all duration-300 border-b-[3px] border-white '>Bags</Tab>
                        <Tab className='text-[#838383] text-2xl font-josefin font-semibold outline-0 transition-all duration-300 border-b-[3px] border-white '>Watches</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="my-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner to='/all-products' image={laptopsimg} categoreys='men Clothing'></SingleBanner>
                            {menClothing.slice(0,5).map((item,idx )=>
                                  <Products01 key={idx} item={item}></Products01>
                            )}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="my-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner to='/all-products' image={laptopsimg} categoreys='men Clothing'></SingleBanner>
                            {menClothing.slice(0,5).map((item,idx )=>
                                  <Products01 key={idx} item={item}></Products01>
                            )}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="my-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner to='/all-products' image={laptopsimg} categoreys='men Clothing'></SingleBanner>
                            {menClothing.slice(0,5).map((item,idx )=>
                                  <Products01 key={idx} item={item}></Products01>
                            )}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="my-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner to='/all-products' image={laptopsimg} categoreys='men Clothing'></SingleBanner>
                            {menClothing.slice(0,5).map((item,idx )=>
                                  <Products01 key={idx} item={item}></Products01>
                            )}

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="my-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner to='/all-products' image={laptopsimg} categoreys='men Clothing'></SingleBanner>
                            {menClothing.slice(0,5).map((item,idx )=>
                                  <Products01 key={idx} item={item}></Products01>
                            )}

                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="my-6 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6">
                            <SingleBanner to='/all-products' image={laptopsimg} categoreys='men Clothing'></SingleBanner>
                            {menClothing.slice(0,5).map((item,idx )=>
                                  <Products01 key={idx} item={item}></Products01>
                            )}

                        </div>
                    </TabPanel>



                </Tabs>
            </section>
            
            </Container>
        </div>
    );
};

export default MensCollection;