import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ProviderLogin from '../components/ProviderLogin';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Login = () => {
	const { loginUser, setLoading } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from.pathname || '/';
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		if (password.length < 6) {
			return toast.error('Password at least have 6 character')
		}
		handleLoginUser(email, password);
	};
	// Handle User Email Password Login
	const handleLoginUser = (email, password) => {
		loginUser(email, password)
			.then((res) => {
				const user = res.user;
				if (user.emailVerified) {
					toast.success('Login Success');
					navigate(from, { replace: true });
				} else {
					toast.error('Verify Email Before Login');
				}
			})
			.catch((error) => {
				toast.error(error.message);
			})
			.finally(() => {
				setLoading(false);
			});
	};
	return (
		<div className='flex justify-center'>
			<div className='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
				<div className='card-body'>
					<h1 className='text-4xl font-bold opacity-30 select-none'>
						Login now!
					</h1>
					<form onSubmit={handleSubmit}>
						<div className='form-control'>
							<label className='label'>
								<span className='label-text'>Email</span>
							</label>
							<input
								type='email'
								placeholder='email'
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
								placeholder='password'
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
							<button className='btn btn-primary'>Login</button>
						</div>
						<label className='text-sm text-center'>
							<span>Don't Have Account? </span>
							<Link
								to='/registration'
								className='link link-hover'
							>
								Create New Account
							</Link>
						</label>
					</form>
					<h1 className='divider'>OR</h1>
					<div>
						<ProviderLogin />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
