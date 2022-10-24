import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Registration = () => {
	const { createUser, updateUserProfile, sendVerifyEmailCode } =
	useContext(AuthContext);
	const navigate = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const firstName = form.firstName.value;
		const lastName = form.lastName.value;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;
		const fullName = firstName + ' ' + lastName;
		handleCreateUser(email, password, fullName, photoURL);
	};

	const handleCreateUser = (email, password, name, photo) => {
		createUser(email, password)
			.then((res) => {
				handleUpdateUserProfile(name, photo);
				sendVerifyEmailCode()
					.then(() => {
						toast.success('Registration Success, Now Verify Your Email');
						navigate('/login')
					})
					.catch((error) => {
						toast.error(error.message)
					});
				const user = res.user;
				console.log(user);
			})
			.catch((error) => {
				console.log(error);
				toast.error(error.message);
			});
	};
	const handleUpdateUserProfile = (name, photo) => {
		const profileData = { displayName: name, photoURL: photo };
		updateUserProfile(profileData)
			.then(() => {
				console.log('update name and photo');
			})
			.catch((error) => {
				console.log(error);
				toast.error(error.message);
			});
	};
	return (
		<div className='flex justify-center'>
			<div className='card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100'>
				<form onSubmit={handleSubmit} className='card-body'>
					<h1 className='text-4xl font-bold opacity-30 select-none'>
						Register now!
					</h1>
					<div className='grid grid-cols-2 gap-5'>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>First Name</span>
							</label>
							<input
								type='text'
								placeholder='Kuddus'
								className='input input-bordered'
								name='firstName'
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
								name='lastName'
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
							name='photoURL'
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
							name='email'
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
							name='password'
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
						<button className='btn btn-primary'>
							Register Now
						</button>
					</div>
					<label className='text-sm text-center'>
						<span>Have An Account? </span>
						<Link to='/Login' className='link link-hover'>
							Login Now
						</Link>
					</label>
				</form>
			</div>
		</div>
	);
};

export default Registration;
