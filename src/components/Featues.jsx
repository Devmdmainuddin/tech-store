
const Featues = () => {
    return (
        <div className="bg-[url(/bg.jpg)] pt-[76px] pb-[104px] bg-cover bg-center bg-no-repeat">
            <h2 className="text-center text-[38px] font-medium text-white">Featues</h2>
            <p className="mt-7 text-white mx-auto w-[418px] text-center text-lg font-light leading-snug">The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.</p>
            <div className="max-w-[1398px] mx-auto  flex flex-wrap  mt-[60px]">
                <div className="w-full md:w-1/2 lg:w-1/4 px-4">
                    <div className="max-w-xs mx-auto pb-10 lg:pb-5 text-center ">
                        <div className="flex mx-auto mb-5 items-center justify-center w-[111px] h-[111px] bg-black rounded-full">
                            <img src="/intell.png" alt="" className="w-[100px] h-[100px]  " />
                        </div>

                        <p className="text-gray-500 leading-snug">Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 px-4 ">
                    <div className="max-w-xs mx-auto pb-10 lg:pb-5 text-center ">
                        <div className="flex mx-auto mb-5 items-center justify-center w-[111px] h-[111px] bg-black rounded-full">
                            <img src="/rtx.png" alt="" className="w-[100px] h-[100px]  " />
                        </div>

                        <p className="text-gray-500 leading-snug">The new GeForce® RTX SUPER™ Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 px-4 ">
                    <div className="max-w-xs mx-auto text-center">
                        <div className="flex mx-auto mb-5 items-center justify-center w-[111px] h-[111px] bg-black rounded-full ">
                            <img src="/ssd.png" alt="" className="w-[100px] h-[100px]  " />
                        </div>

                        <p className="text-gray-500 leading-snug">Unleash the full potential with the latest SSD technology, the NVM Express. 6 times faster than traditional SATA SSD.</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 px-4 ">
                    <div className="max-w-xs mx-auto text-center">
                        <div className="flex mx-auto items-center justify-center w-[111px] h-[111px] bg-black rounded-full ">
                            <img src="/ddr.png" alt="" className="w-[100px] h-[100px]  " />
                        </div>

                        <p className="text-gray-500 leading-snug">Featuring the latest 10th Gen Intel® Core™ processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featues;