import React from 'react';
import Navber from '../../Componanats/Header/Navber';
import { Outlet } from 'react-router';
import Footer from '../../Componanats/Footter/Footer';


const Root = () => {
    return (
        <div>
            <Navber></Navber>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;