import React from 'react';
import Banner from '../Banner/Banner';
import './Header.css';


const Header = () => {
    return (
        <div>
            <div className='bg-image'>
                <Banner></Banner>
            </div >
        </div>
    );
};

export default Header;