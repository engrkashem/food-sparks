import React from 'react';
import './Footer.css';
import logodark from '../../../images/logo-dark.png';

const Footer = () => {
    return (
        <footer className='bg-dark'>
            <div className='container'>
                <div className='row align-items-center justify-content-between'>
                    <div className=' col-12 col-md-6 '>
                        <img src={logodark} alt="" />
                    </div>
                    <div className='row  col-12 col-md-6'>
                        <div className='col-12 col-md-6'>
                            <button className='btn btn-link text-decoration-none d-block text-white'>About Online Food</button>
                            <button className='btn btn-link text-decoration-none d-block text-white'>Read Our Blog</button>
                            <button className='btn btn-link text-decoration-none d-block text-white'>Sign Up to Deliver</button>
                            <button className='btn btn-link text-decoration-none d-block text-white'>Add Your Restaurent</button>
                        </div>
                        <div className='col-12 col-md-6'>
                            <button className='btn btn-link text-decoration-none d-block text-white'>Get Help</button>
                            <button className='btn btn-link text-decoration-none d-block text-white'>Read FAQs</button>
                            <button className='btn btn-link text-decoration-none d-block text-white'>View All Cities</button>
                            <button className='btn btn-link text-decoration-none d-block text-white'>Restaurent Near Me</button>
                        </div>
                    </div>
                </div>
                <div className='row align-items-center justify-content-between py-4'>
                    <div className='col-12 col-md-8 order-2 order-md-1'>
                        <small className='text-white'>Copyright &copy; {new Date().getFullYear()} online Food</small>
                    </div>
                    <div className='col-12 col-md-4 order-1 order-md-2 '>
                        <button className='btn btn-link text-decoration-none text-white'><small>Privacy Policy</small></button>
                        <button className='btn btn-link text-decoration-none text-white'><small>Terms of Use</small></button>
                        <button className='btn btn-link text-decoration-none text-white'><small>Pricing</small></button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;