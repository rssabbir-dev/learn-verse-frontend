import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const ProviderLogin = () => {
	const { signInWithProvider, setLoading } = useContext(AuthContext);
	//get previous page url
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from.pathname || '/';
	//Handle Google Provider Login
	const handleGoogleLogin = () => {
		const provider = new GoogleAuthProvider();
		signInWithProvider(provider)
			.then(() => {
				toast.success('Login Success');
				navigate(from, { replace: true });
			})
			.catch((error) => {
				toast.error(error.message);
			})
			.finally(() => {
				//set Loading False
				setLoading(false);
			});
	};

	//Handle Github Provider Login
    const handleGitHubLogin = () => {
        const provider = new GithubAuthProvider();
		signInWithProvider(provider)
            .then(() => {
				toast.success('Login Success');
				//navigate user previous page where they are first visit
				navigate(from, { replace: true });
			})
			.catch((error) => {
				toast.error(error.message);
			})
			.finally(() => {
				//Set Loading False
				setLoading(false);
			});
    };
	return (
		<div className='space-y-3'>
			<button
				onClick={handleGoogleLogin}
				className='btn btn-block btn-outline btn-primary gap-3'
			>
				<FaGoogle className='text-2xl' />
				Continue With Google
			</button>
			<button onClick={handleGitHubLogin} className='btn btn-block gap-3'>
				<FaGithub className='text-2xl' />
				Continue With GitHub
			</button>
		</div>
	);
};

export default ProviderLogin;
