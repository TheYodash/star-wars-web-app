import * as React from 'react';
import { pageNumbers } from '../constants/apiLinks';

const Pagination = ({ page, setPage, category }) => {
    const pageNumbersArray = Array.from({ length: pageNumbers[category] }, (_, i) => i + 1);
    return (
        <div className='pagination'>
            {pageNumbersArray.map((num) => (
                <button key={num} onClick={() => {setPage(num)
                    console.log(num);
                }} className={num === page ? 'active' : ''}>
                    {num}
                </button>
            ))}
        </div>
    );
}

export default Pagination;