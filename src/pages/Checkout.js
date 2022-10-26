import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
	const course = useLoaderData();
	const { id, name, img, instructor_info, price } = course;
	const { instructor_name, instructor_img, graduate_from } = instructor_info;
	return (
		<div className='grid grid-cols-2 gap-20'>
			<h1 className='col-span-2 text-xl mb-4'>Checkout Page</h1>
			<div>
				<div className='card card-side bg-base-100 border border-primary'>
					<figure className=''>
						<img
							className='w-24 h-24 rounded m-4 object-cover'
							src={img}
							alt='Album'
						/>
					</figure>
					<div className='card-body'>
						<h2 className='card-title text-lg'>{name}</h2>
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
						<p>
							<span className='text-xl'>৳</span> {price}
						</p>
					</div>
				</div>
			</div>
			<div>
				<div>
					<div>
						<h3>Course Price</h3>
						<h3>৳ {price}</h3>
					</div>
					<div className='form-control w-full max-w-xs'>
						<label className='label'>
							<span className='label-text'>Apply Promo Code</span>
							<span className='label-text-alt'>Optional</span>
						</label>
						<input
							type='text'
							placeholder='Type here'
							className='input input-bordered w-full max-w-xs'
						/>
						<label className='label'>
							<span className='label-text-alt'></span>
							<button className='btn btn-sm'>Apply</button>
						</label>
					</div>
					<div>
						<h3>Total Price</h3>
						<h3>৳ {price}</h3>
					</div>
					<div>
						<button className='btn btn-primary btn-block'>Go To Payment</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
