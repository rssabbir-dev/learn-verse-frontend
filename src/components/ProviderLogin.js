import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';

const ProviderLogin = () => {
	return (
		<div className='space-y-3'>
			<button className='btn btn-block btn-primary gap-3'>
				<FaFacebook className='text-2xl' />
				Continue With Facebook
			</button>
			<button className='btn btn-block gap-3'>
				<FaGithub className='text-2xl' />
				Continue With GitHub
			</button>
		</div>
	);
};

export default ProviderLogin;
