import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayCourses from '../components/DisplayCourses';
import ResponsiveCourseCard from '../components/ResponsiveCourseCard';
import SideBar from '../components/SideBar';

const Courses = () => {
    const courses = useLoaderData();
    return (
		<div className='grid grid-cols-4 gap-10'>
			<div className='col-span-3'>
				<div className='grid gap-10'>
					{courses.map((course) => (
						<ResponsiveCourseCard key={course.id} course={course} />
					))}
				</div>
			</div>
			<div className='col-span-1'>
				<SideBar />
			</div>
		</div>
	);
};

export default Courses;