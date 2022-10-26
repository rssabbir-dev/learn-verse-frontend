import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';
import TopNavBar from '../../components/TopNavBar';

const Main = () => {
	return (
		<div className='space-y-20'>
			<div className='w-11/12 mx-auto space-y-10'>
				<TopNavBar />
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Main;
