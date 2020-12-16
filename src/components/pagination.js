import React from 'react'

const Pagination = ({ resultsPerPage, totalResults, paginate }) => {
    
    console.log(resultsPerPage, "resultsPerPage in Pagination");
    console.log(totalResults, "totalResults in Pagination");

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log(pageNumbers, "pageNumbers");
    return (
        <nav>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <p key={number} className='page-item'>
                        <a onClick={() => paginate(number)} className='page-link'>
                            {number}
                        </a>
                    </p>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination