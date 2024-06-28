import { FaStar } from 'react-icons/fa';
import productImg from '/product.jpg'
import { ImStarHalf } from 'react-icons/im';
import { useEffect, useState } from 'react';
const SingleCards = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        fetch('fakedata.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    return (
        <div className="w-[800px] mx-auto grid grid-cols-1">

            {
                products.map(product =>
                    <>
                        <div className='flex justify-between items-center hover:shadow-xl p-6'>
                            <div >
                                <img src={productImg} alt="" />
                                <div className="flex my-3 text-[#E9A426]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <ImStarHalf />
                                </div>
                            </div>
                            <div>
                                <h2>{product.model}</h2>
                                <p className='mt-5'>{product.description}</p>
                                <div className='flex gap-4 mb-2 mt-5'>
                                    <span className="font-bold  line-through text-[#666666]">${product.price}</span>
                                    <span className=" text-lg font-semibold">${product.discount_price}</span>
                                </div>
                            </div>
                        </div>

                    </>

                )
            }

            <div>

            </div>
            <div>

            </div>

        </div>
    );
};

export default SingleCards;