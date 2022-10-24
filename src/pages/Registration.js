import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
	return (
		<div className='flex justify-center'>
			<div className='card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100'>
				<div className='card-body'>
					<h1 className='text-4xl font-bold opacity-30 select-none'>Register now!</h1>
					<div className='grid grid-cols-2 gap-5'>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>First Name</span>
							</label>
							<input
								type='text'
								placeholder='Kuddus'
								className='input input-bordered'
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Last Name</span>
							</label>
							<input
								type='text'
								placeholder='Ali'
								className='input input-bordered'
							/>
						</div>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Photo URL</span>
						</label>
						<input
							type='url'
							placeholder='Set Photo URL'
							className='input input-bordered'
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Email</span>
						</label>
						<input
							type='text'
							placeholder='you@example.com'
							className='input input-bordered'
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Password</span>
						</label>
						<input
							type='text'
							placeholder='Set Password'
							className='input input-bordered'
						/>
						<label className='label'>
							<Link
								to='reset-password'
								className='label-text-alt link link-hover'
							>
								Forgot password?
							</Link>
						</label>
					</div>
					<div className='form-control mt-6'>
						<button className='btn btn-primary'>Register Now</button>
					</div>
					<label className='text-sm text-center'>
						<span>Have An Account? </span>
						<Link to='/Login' className='link link-hover'>
							Login Now
						</Link>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Registration;