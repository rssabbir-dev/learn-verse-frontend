import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ResponsiveCourseCard from '../components/ResponsiveCourseCard';
import SideBar from '../components/SideBar';
import Spinner from '../components/Spinner';
import { serverURL } from '../routes/routes';

const Courses = () => {
	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(true);
	const paramsId = useParams();
	useEffect(() => {
		fetch(`${serverURL}/courses/${paramsId.id}`)
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				setCourses(data);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, [paramsId]);
	if (loading) {
		return <Spinner />;
	}
	return (
		<div className='flex flex-col md:grid md:grid-cols-4 gap-10'>
			<div className='col-span-3'>
				<h1 className='text-3xl my-3'>
					{courses.length} Course are available in{' '}
					{paramsId.id === 'all'
						? 'All Courses'
						: courses[0]?.category}
				</h1>
				<div className='grid gap-10'>
					{courses.map((course) => (
						<div
							key={course.id}
							className='shadow-md hover:shadow-xl transition-all rounded-2xl'
						>
							<ResponsiveCourseCard course={course} />
						</div>
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
