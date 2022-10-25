import React, { useEffect, useState } from 'react';
import { serverURL } from '../routes/routes';
import CourseCard from './CourseCard';

const DisplayCourses = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch(`${serverURL}/courses/all`)
			.then((res) => res.json())
			.then((data) => setCourses(data))
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
				{courses.map((course) => (
					<CourseCard key={course.id} course={course} />
				))}
			</div>
		</div>
	);
};

export default DisplayCourses;
