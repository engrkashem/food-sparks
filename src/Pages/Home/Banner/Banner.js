import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='search-banner d-flex justify-content-center align-items-center'>
            <div className='search-container rounded-pill bg-white d-flex justify-content-between'>
                <input className='flex-grow-1 border-0 ps-4 rounded-pill' type="text" name="searchBox" id="search-field" placeholder='Search Your Platter' />
                <button className='btn btn-danger rounded-pill px-4'>Search</button>
            </div>
        </div>
    );
};

export default Banner;