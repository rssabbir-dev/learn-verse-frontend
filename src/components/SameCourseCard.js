import React from 'react';
import { Link } from 'react-router-dom';

const SameCourseCard = ({ course }) => {
	const { img, name, id } = course;
	return (
		<Link
			to={`/course/${id}`}
			className='card card-compact w-full sm:w-96 md:w-80 lg:w-72 bg-base-100 border transition-all h-full'
		>
			<figure>
				<img src={img} alt='Shoes' />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{name}</h2>
			</div>
		</Link>
	);
};

export default SameCourseCard;
