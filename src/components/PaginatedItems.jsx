import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
// import Products from '../components/card/Products';
import SingleCards from './SingleCards';
import Products01 from './card/Products01';


// Helper function to calculate and return the product range text
// const getProductRangeText = (itemOffset, endOffset, totalItems) => {
//     return `Products from ${itemOffset + 1} to ${endOffset > totalItems ? totalItems : endOffset} of ${totalItems}`;
// };


function Items({ currentItems, activeMulti }) {


    return (
        <>
            {currentItems &&
                currentItems.map((item, key) => (

                    <div key={key}>
                        {activeMulti ? (
                            <Products01 item={item}></Products01>
                        ) : (
                            <SingleCards product={item}></SingleCards>
                        )}
                    </div>
                ))}
        </>
    );
}

function PaginatedItems({ itemsPerPage, item, activeMulti, setRangeData }) {


    const items = item;

    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = items?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items?.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items?.length;
        setItemOffset(newOffset);
    };
    useEffect(() => {
        setRangeData({ itemOffset, endOffset, totalItems: items?.length });
    }, [itemOffset, endOffset, items]);

    return (
        <>
            <Items currentItems={currentItems} activeMulti={activeMulti} />
            <div className='w-full flex justify-between items-center mt-[50px] flex-wrap gap-y-4'>
                <ReactPaginate
                    breakLabel="..."
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}

                    nextClassName="hidden"
                    previousClassName="hidden"


                    renderOnZeroPageCount={null}

                    containerClassName="pagination flex gap-x-4"

                    pageClassName="page-item text-[#767676] lg:w-9 w-5 lg:h-9 h-5 border border-[#F0F0F0] hover:bg-[#262626] hover:text-white"

                    pageLinkClassName="page-link w-full h-full flex justify-center items-center  text-sm font-normal"

                    activeClassName="active text-white bg-[#262626]"
                />
                <p className='lg:text-xs lg:leading-7 leading-5 text-[#767676]'>
                    {/* {getProductRangeText(itemOffset, endOffset, items?.length)} */}
                </p>
                {/* <p className='lg:text-xs lg:leading-7 leading-5 text-[#767676]'>Products from {itemOffset + 1} to {endOffset > items?.length ? items?.length : endOffset} of {items?.length}</p> */}
            </div>
        </>
    );
}
PaginatedItems.propTypes = {
    itemsPerPage: PropTypes.number,
    item: PropTypes.array,


}
export default PaginatedItems