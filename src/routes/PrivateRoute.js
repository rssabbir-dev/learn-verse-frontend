import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext);
    //show loading when data is not ready
    if (loading) {
        return <h3 className='text-3xl'>Loading....</h3>
    }
    if (!user?.uid) {
        return <Navigate to='/login' state={{from:location}} replace />
    }
    return children;
};

export default PrivateRoute;