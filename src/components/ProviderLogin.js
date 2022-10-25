import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const ProviderLogin = () => {
	const { signInWithProvider, setLoading } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from.pathname || '/';
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
				setLoading(false);
			});
	};
    const handleGitHubLogin = () => {
        const provider = new GithubAuthProvider();
		signInWithProvider(provider)
            .then((res) => {
                const user = res.user;
                console.log(user);
				toast.success('Login Success');
				navigate(from, { replace: true });
			})
			.catch((error) => {
				toast.error(error.message);
			})
			.finally(() => {
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
