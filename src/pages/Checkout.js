import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Checkout = () => {
	const course = useLoaderData();
	const { id, name, img, instructor_info, price } = course;
	const { instructor_name, instructor_img } = instructor_info;
	const { user } = useContext(AuthContext);
	const handleSubmit = (event) => {
		event.preventDefault();
	};
	return (
		<div className='md:grid grid-cols-2 gap-20'>
			{/* Payment Gateway Modal Start Here */}
			<input type='checkbox' id='my-modal-3' className='modal-toggle' />
			<div className='modal'>
				<div className='modal-box relative'>
					<label
						htmlFor='my-modal-3'
						className='btn btn-sm btn-circle absolute right-2 top-2'
					>
						✕
					</label>
					<div className='flex justify-center'>
						<div className='card flex-shrink-0 w-full max-w-sm'>
							<div className='card-body'>
								<h1 className='text-4xl font-bold opacity-30 select-none'>
									Payment Gateway
								</h1>
								<form onSubmit={handleSubmit}>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Name
											</span>
										</label>
										<input
											type='text'
											placeholder='name'
											className='input input-bordered'
											name='name'
											defaultValue={user?.displayName}
											disabled
										/>
									</div>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Email
											</span>
										</label>
										<input
											type='email'
											placeholder='email'
											className='input input-bordered'
											name='email'
											defaultValue={
												user?.email
													? user?.email
													: user.providerData[0].email
											}
											disabled
										/>
									</div>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Total
											</span>
										</label>
										<input
											type='text'
											placeholder='total'
											className='input input-bordered'
											name='total'
											defaultValue={price + ' Taka'}
											disabled
										/>
									</div>
									<Link to={`/success/${id}`}>
										<button className='btn btn-primary btn-block mt-4'>
											Pay Now
										</button>
									</Link>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Payment Gateway Modal End Here */}
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
				<div className='space-y-5'>
					<div className='flex justify-between items-center text-2xl'>
						<h3>Course Price</h3>
						<h3>৳ {price}</h3>
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Apply Promo Code</span>
							<span className='label-text-alt'>Optional</span>
						</label>
						<input
							type='text'
							placeholder='Type here'
							className='input input-bordered w-full'
						/>
						<label className='label'>
							<span className='label-text-alt'></span>
							<button className='btn btn-sm'>Apply</button>
						</label>
					</div>
					<div className='flex justify-between items-center text-2xl'>
						<h3>Total Price</h3>
						<h3>৳ {price}</h3>
					</div>
					<div>
						<label
							htmlFor='my-modal-3'
							className='btn btn-primary btn-block'
						>
							Go To Payment
						</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
