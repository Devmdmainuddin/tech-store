import Vector from '/Vector.png'
import Vectora from '/Vectora.png'
import Vectorl from '/Vectorl.png'


const Benefits = () => {
    return (
        <section className="">
         <div className="max-w-[1055px] mx-auto">
                    <div className="flex md:flex-row flex-col justify-center items-center py-[25px] gap-y-5 lg:gap-x-[130px] ">
                        <div className="w-full md:w-[265px] p-4 hover:shadow-xl text-center">
                                <div className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-[#0156FF] mb-3">
                                    <img src={Vector} alt="" />
                                </div>
                                <h4 className="text-lg  font-bold mb-1">Product Support</h4>
                                <p className="text-sm font-normal">Up to 3 years on-site warranty available for your peace of mind.</p>
                        </div>
                        <div className="w-full md:w-[265px] p-4 text-center hover:shadow-xl">
                           
                                <div className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-[#0156FF] mb-3">
                                <img src={Vectora} alt="" />
                                </div>
                                <h4 className="text-lg  font-bold  mb-1">Personal Account</h4>
                                <p className="text-sm font-normal">With big discounts, free delivery and a dedicated support specialist.</p>
                          
                        </div>
                        <div className="w-full md:w-[265px] p-4 text-center hover:shadow-xl">
                          
                                <div className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-[#0156FF] mb-3">
                                <img src={Vectorl} alt="" />
                                </div>
                                <h4 className="text-lg  font-bold mb-1">Amazing Savings</h4>
                                <p className="text-sm font-normal">Up to 70% off new Products, you can be sure of the best price.</p>
                         
                        </div>
                    
                    </div>
                </div>
        </section>
    );
};

export default Benefits;