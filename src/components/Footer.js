import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { serverURL } from '../routes/routes';

const Footer = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		fetch(`${serverURL}/category`)
			.then((res) => res.json())
			.then((data) => setCategories(data))
			.catch((error) => {
				console.log(error);
			});
	}, []);
	return (
		<div>
			<footer className='footer p-10 bg-base-200 text-base-content'>
				<div>
					<span className='footer-title'>All Category</span>
					{categories.map((category) => (
						<Link
							className='link link-hover'
							to={`${serverURL}/courses/${category.category_id}`}
						>
							{category.category}
						</Link>
					))}
				</div>
				<div>
					<span className='footer-title'>Useful Link</span>
					<Link className='link link-hover' to='/profile'>
						Profile
					</Link>
					<Link className='link link-hover' to='/blog'>
						Blog
					</Link>
					<Link className='link link-hover' to='/faq'>
						FAQ
					</Link>
					<Link className='link link-hover' to='/contact'>
						Contact Us
					</Link>
				</div>
				<div>
					<span className='footer-title'>Legal</span>
					<Link className='link link-hover'>Terms of use</Link>
					<Link className='link link-hover'>Privacy policy</Link>
					<Link className='link link-hover'>Cookie policy</Link>
				</div>
				<div>
					<span className='footer-title'>Newsletter</span>
					<div className='form-control w-80'>
						<label className='label'>
							<span className='label-text'>
								Enter your email address
							</span>
						</label>
						<form
							onSubmit={(e) => {
								e.preventDefault();
								toast.success('Thanks for subscribe');
								e.target.reset();
							}}
							className='relative'
						>
							<input
								type='email'
								placeholder='username@site.com'
								className='input input-bordered w-full pr-16'
								required
							/>
							<button className='btn btn-primary absolute top-0 right-0 rounded-l-none'>
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</footer>
			<div className='footer footer-center p-4 bg-base-300 text-base-content'>
				<div>
					<p>Copyright © 2022 - All right reserved by LearnVerse</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
