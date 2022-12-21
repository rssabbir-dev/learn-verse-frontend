import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DisplayCategoryOnHomePage from '../components/DisplayCategoryOnHomePage';
import DisplayCourses from '../components/DisplayCourses';
import HeaderBanner from '../components/HeaderBanner';
import Spinner from '../components/Spinner';
import { serverURL } from '../routes/routes';

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		setLoading(true);
		fetch(`${serverURL}/category`)
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				setCategories(data);
			})
			.catch((error) => {
				console.log(error);
				setLoading(false);
			});
	}, [setLoading]);
	if (loading) {
		return <Spinner />;
	}
	return (
		<div className='space-y-24'>
			<HeaderBanner />
			<div>
				<DisplayCategoryOnHomePage categories={categories} />
			</div>
			<div className='space-y-10'>
				<h1 className='text-3xl text-center sm:divider'>
					Explore Latest Courses
				</h1>
				<DisplayCourses />
			</div>
		</div>
	);
};

export default Home;
