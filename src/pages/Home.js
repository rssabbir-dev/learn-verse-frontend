import React from 'react';
import DisplayCategoryOnHomePage from '../components/DisplayCategoryOnHomePage';
import DisplayCourses from '../components/DisplayCourses';
import HeaderBanner from '../components/HeaderBanner';

const Home = () => {
	return (
		<div className='space-y-24'>
            <HeaderBanner />
            <div>
                <DisplayCategoryOnHomePage/>
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
