import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import ProviderLogin from '../components/ProviderLogin';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Registration = () => {
	const { createUser, updateUserProfile, sendVerifyEmailCode } =
		useContext(AuthContext);
	const navigate = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photoURL = form.photoURL.value;
		const email = form.email.value;
		const password = form.password.value;
		if (password.length < 6) {
			toast.error('Password at least have 6 character');
			form.password.value = '';
			return;
		}
		handleCreateUser(email, password, name, photoURL, form);
	};

	const handleCreateUser = (email, password, name, photo, form) => {
		createUser(email, password)
			.then((res) => {
				handleUpdateUserProfile(name, photo);
				sendVerifyEmailCode()
					.then(() => {
						toast.success(
							'Registration Success, Now Verify Your Email'
						);
						navigate('/login');
					})
					.catch((error) => {
						toast.error(error.message);
					});

				form.reset();
			})
			.catch((error) => {
				form.reset();
				toast.error(error.message);
			});
	};

	//Handle User Profile Name, and Photo Update
	const handleUpdateUserProfile = (name, photo) => {
		const profileData = { displayName: name, photoURL: photo };
		updateUserProfile(profileData)
			.then(() => {
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};
	return (
		<div className='flex justify-center'>
			<div className='card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100'>
				<div className='card-body'>
					<form onSubmit={handleSubmit}>
						<h1 className='text-4xl font-bold opacity-30 select-none'>
							Register now!
						</h1>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Full Name</span>
							</label>
							<input
								type='text'
								placeholder='Kuddus Ali'
								className='input input-bordered'
								name='name'
								required
							/>
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
								placeholder='your@example.com'
								className='input input-bordered'
								name='email'
								required
								autoComplete='username'
							/>
						</div>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Password</span>
							</label>
							<input
								type='password'
								placeholder='Set Password'
								className='input input-bordered'
								name='password'
								required
								autoComplete='current-password'
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
					<div>
						<h1 className='divider'>OR</h1>
						<ProviderLogin />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Registration;
