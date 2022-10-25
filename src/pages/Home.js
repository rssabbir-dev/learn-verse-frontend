import React from 'react';
import MultiViewCourseCarousel from '../components/carousel/MultiViewCourseCarousel';
import DisplayCourses from '../components/DisplayCourses';

const Home = () => {
    return (
		<div className='space-y-24'>
			<MultiViewCourseCarousel />

            <div className='space-y-10'>
                <h1 className='text-3xl text-center sm:divider'>Explore Latest Courses</h1>
				<DisplayCourses />
			</div>
		</div>
	);
};

export default Home;