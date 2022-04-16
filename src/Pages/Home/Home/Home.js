import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import NavigationLink from '../NavigationLink/NavigationLink';
import './Home.css'

const Home = () => {

    return (
        <div>
            <Header></Header>
            <NavigationLink></NavigationLink>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;