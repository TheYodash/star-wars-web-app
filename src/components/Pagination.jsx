import * as React from 'react';
import { Link } from 'react-router-dom';
import { usePagination } from '../Context/PaginationContext';

const Pagination = ({ dataPerPage, totalData, paginate }) => {

  const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
        pageNumbers.push(i);
    }
    
const [currentPage, setCurrentPage] = React.useState(1);

const handleClick = (number) => {
    setCurrentPage(number);
    paginate(number);
};

return (
    <nav>
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <button 
                    key={number} 
                    className={`page-item ${currentPage === number ? 'active' : ''}`} 
                    onClick={() => handleClick(number)} >
                    <Link to='#' className='page-link'>
                        {number}
                    </Link>
                </button>
            ))}
        </ul>
    </nav>
);
};

export default Pagination;