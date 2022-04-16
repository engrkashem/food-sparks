import React from 'react';
import CustomLink from '../../Shared/CustomLink/CustomLink';
import './NavigationLink.css'

const NavigationLink = () => {

    return (
        <div className='link-container'>
            <div className='link'>
                <CustomLink to={'/home/breakfast'}>Breakfast</CustomLink>
            </div>
            <div className="link">
                <CustomLink to={'/home/lunch'}>Lunch</CustomLink>
            </div>
            <div className="link">
                <CustomLink to={'/home/dinner'}>Dinner</CustomLink>
            </div>
        </div>
    );
};

export default NavigationLink;