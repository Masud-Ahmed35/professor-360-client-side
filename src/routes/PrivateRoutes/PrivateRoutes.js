import { Button, Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center my-10">
            <Button color="gray">
                <Spinner aria-label="Alternate spinner button example" size='xl' />
                <span className="pl-3 text-lg">
                    Loading.....
                </span>
            </Button>
        </div>
    }
    if (user && user?.uid) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace />
};

export default PrivateRoutes;