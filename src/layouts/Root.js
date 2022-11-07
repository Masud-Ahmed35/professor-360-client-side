import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Headers from '../pages/Shared/Headers/Headers';

const Root = () => {
    return (
        <>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default Root;