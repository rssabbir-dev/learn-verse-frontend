import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className='flex justify-center'>
			<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
				<div className='card-body'>
					<h1 className='text-4xl font-bold opacity-30 select-none'>
						Login now!
					</h1>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Email</span>
						</label>
						<input
							type='text'
							placeholder='email'
							className='input input-bordered'
						/>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Password</span>
						</label>
						<input
							type='text'
							placeholder='password'
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
						<button className='btn btn-primary'>Login</button>
					</div>
					<label className='text-sm text-center'>
						<span>Don't Have Account? </span>
						<Link to='/registration' className='link link-hover'>
							Create New
						</Link>
					</label>
				</div>
			</div>
		</div>
	);
};

export default Login;
