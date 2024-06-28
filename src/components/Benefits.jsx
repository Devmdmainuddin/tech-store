import Vector from '/Vector.png'
import Vectora from '/Vectora.png'
import Vectorl from '/Vectorl.png'


const Benefits = () => {
    return (
        <section className="py-12 ">
         <div className="max-w-[1055px] mx-auto ">
                    <div className="flex justify-center items-center gap-x-[114px] -mb-12">
                        <div className="w-full md:w-[265px] p-4 mb-12 hover:shadow-xl">
                            <div className="text-center">
                                <span className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-[#0156FF] mb-3">
                                    <img src={Vector} alt="" />
                                </span>
                                <h4 className="text-lg  font-bold mb-1">Product Support</h4>
                                <span className="text-sm font-normal">Up to 3 years on-site warranty available for your peace of mind.</span>
                            </div>
                        </div>
                        <div className="w-full md:w-[265px] p-4 mb-12 hover:shadow-xl">
                            <div className="text-center">
                                <span className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-[#0156FF] mb-3">
                                <img src={Vectora} alt="" />
                                </span>
                                <h4 className="text-lg  font-bold  mb-1">Personal Account</h4>
                                <span className="text-sm font-normal">With big discounts, free delivery and a dedicated support specialist.</span>
                            </div>
                        </div>
                        <div className="w-full md:w-[265px] p-4 mb-12 hover:shadow-xl">
                            <div className="text-center">
                                <span className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-[#0156FF] mb-3">
                                <img src={Vectorl} alt="" />
                                </span>
                                <h4 className="text-lg  font-bold mb-1">Amazing Savings</h4>
                                <span className="text-sm font-normal">Up to 70% off new Products, you can be sure of the best price.</span>
                            </div>
                        </div>
                    
                    </div>
                </div>
        </section>
    );
};

export default Benefits;