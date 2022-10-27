import React from 'react';
import { Link } from 'react-router-dom';

const ResponsiveCourseCard = ({ course,rounded }) => {
	const { name, img, id, course_details,category,category_id } = course;
    return (
		<Link
			to={`/course/${id}`}
			className={`card md:card-side bg-base-100 ${rounded}`}
		>
			<figure className=''>
				<img
					className='lg:w-96 md:w-72 h-full object-cover'
					src={img}
					alt='Album'
				/>
			</figure>
			<div className='card-body'>
				<Link to={`/courses/${category_id}`}>
				<div className='badge badge-outline'>{category}</div>
				</Link>
				<h2 className='card-title'>{name}</h2>
				<p>{course_details.sort_description.slice(0, 100)}...</p>
				<div className='md:card-actions md:justify-end'>
					<Link to={`/course/${id}`}>
						<button className='btn btn-primary btn-block'>
							View Details
						</button>
					</Link>
				</div>
			</div>
		</Link>
	);
};

export default ResponsiveCourseCard;