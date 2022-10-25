import React from 'react';
import { Link } from 'react-router-dom';

const ResponsiveCourseCard = ({ course }) => {
    const { name, img,id } = course;
    return (
		<div className='card md:card-side bg-base-100'>
			<figure className=''>
				<img
					className='lg:w-96 md:w-72 h-full object-cover'
					src={img}
					alt='Album'
				/>
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{name}</h2>
				<p>Click the button to listen on Spotiwhy app.</p>
				<div className='card-actions justify-end'>
					<Link to={`/course/${id}`}>
						<button className='btn btn-primary'>
							View Details
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ResponsiveCourseCard;