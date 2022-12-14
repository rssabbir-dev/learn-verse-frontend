import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
	const { id, name, price, category, img, course_details } = course;
	return (
		<Link
			to={`/course/${id}`}
			className='card card-compact w-full sm:w-96 md:w-80 lg:w-72 bg-base-100 shadow-lg hover:shadow-xl transition-all h-full hover:-translate-y-1'
		>
			<figure>
				<img src={img} alt='Shoes' />
			</figure>
			<div className='card-body'>
				<div className='badge badge-outline'>{category}</div>
				<h2 className='card-title'>{name}</h2>
				<p>{course_details.sort_description.slice(0, 100)}...</p>
				<div className='card-actions justify-end items-center'>
					<p className='text-xl text-primary'>
						<span className='text-2xl'>৳ </span>
						{price}
					</p>
					<button className='btn btn-ghost text-primary'>
						View Details
					</button>
				</div>
			</div>
		</Link>
	);
};

export default CourseCard;
