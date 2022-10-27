import React from 'react';
import { Link } from 'react-router-dom';

const SameCourseCard = ({ course }) => {
	const { img, name, id, instructor_info } = course;
	const { instructor_img, instructor_name } = instructor_info;
	return (
		<Link
			to={`/course/${id}`}
			className='card card-compact w-full sm:w-96 md:w-80 lg:w-72 bg-base-100 border transition-all h-full'
		>
			<figure>
				<img src={img} alt='Shoes' />
			</figure>
			<div className='card-body justify-between'>
				<h2 className='card-title'>{name}</h2>
				<div className='flex items-center gap-4'>
					<div
						className='w-7 rounded-full ring
                             ring-primary ring-offset-base-100 ring-offset-2'
					>
						<img
							className='rounded-full border border-primary'
							src={instructor_img}
							alt=''
						/>
					</div>
					<div>
						<p className='text-xs'>Instructor</p>
						<p className='text-sm'>{instructor_name}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default SameCourseCard;
