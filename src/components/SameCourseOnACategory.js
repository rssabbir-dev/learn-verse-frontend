import React, { useEffect, useState } from 'react';
// import required modules
import { serverURL } from '../routes/routes';
import SameCourseCard from './SameCourseCard';

const SameCourseOnACategory = ({ categoryID, courseID }) => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch(`${serverURL}/courses/${categoryID}`)
			.then((res) => res.json())
			.then((data) => {
				const expectSameCourseID = data.filter(
					(course) => course.id !== courseID
				);
				setCourses(expectSameCourseID);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [categoryID, courseID]);
	return (
		<div className='grid xl:grid-cols-4 md:grid-cols-2 place-items-center h-full gap-10'>
			{courses.map((course) => (
				<SameCourseCard key={course.id} course={course} />
			))}
		</div>
	);
};

export default SameCourseOnACategory;
