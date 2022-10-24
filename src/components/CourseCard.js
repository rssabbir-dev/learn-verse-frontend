import React from 'react';

const CourseCard = ({ course }) => {
    const { id, name, price, category, img } = course;
    return (
		<div className='card card-compact w-full sm:w-96 md:w-80 lg:w-72 bg-base-100 shadow-xl'>
			<figure>
				<img src={img} alt='Shoes' />
			</figure>
			<div className='card-body'>
                <h2 className='card-title'>{name}</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className='card-actions justify-end'>
					<button className='btn btn-primary'>Buy Now</button>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;