import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../components/Footer';
import TopNavBar from '../../components/TopNavBar';

const Main = () => {
	//Scroll TO top of the page when route got changed
	const useScrollToTop = () => {
		const { pathname } = useLocation();

		useEffect(() => {
			window.scrollTo(0, 0);
		}, [pathname]);
	};

	useScrollToTop();
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
