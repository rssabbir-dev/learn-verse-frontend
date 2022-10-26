import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { InfinitySpin } from 'react-loader-spinner';

const PrivateRoute = ({ children }) => {
	const location = useLocation();
	const { user, loading } = useContext(AuthContext);
	//show loading when data is not ready
	if (loading) {
        return (
			<div className='flex justify-center items-center h-screen'>
				<InfinitySpin width='200' color='#4fa94d' />
			</div>
		);
	}
	if (!user?.uid) {
		return <Navigate to='/login' state={{ from: location }} replace />;
	}
	return children;
};

export default PrivateRoute;
