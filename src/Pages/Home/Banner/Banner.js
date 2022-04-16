import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='search-banner'>
            <h1 className='text-center mb-3'>Feel Hungry..? Think <span className='fw-bold text-danger'>FOOD SPARKS !!</span></h1>
            <div className=' row '>
                <div className='search-container col-sm-6 rounded-pill bg-white'>
                    <div className=' d-flex justify-content-between'>
                        <input className='border-0 ps-4 rounded-pill flex-grow-1' type="text" name="searchBox" id="search-field" placeholder='Search Your Platter' />
                        <button className='btn btn-danger rounded-pill px-4'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;