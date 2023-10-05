import React, { useContext } from 'react';
import { AuthContext } from '../AuthProviders/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
    if (loading) {
        return <div className='flex justify-center items-center h-[100vh]'>
            <p className='flex items-center text-3xl gap-4'>Loading<span className='loading loading-infinity loading-lg'></span></p>
        </div>
    }
    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>;
};

export default PrivateRoutes;