import React from 'react';
import { Outlet } from 'react-router-dom';
import Footers from '../pages/Shared/Footer/Footers';
import Headers from '../pages/Shared/Headers/Headers';

const Root = () => {
    return (
        <>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footers></Footers>
        </>
    );
};

export default Root;