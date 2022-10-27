import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider/AuthProvider';
import { serverURL } from '../routes/routes';
import ProviderLogin from './ProviderLogin';

const SideBar = () => {
	const { user } = useContext(AuthContext);
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
			<div className='space-y-5'>
				<div>
					<h4 className='text-2xl text-center divider'>
						All Category
					</h4>
					<div className='grid gap-5 grid-cols-2 md:grid-cols-1'>
						<Category
							category={{
								category: 'All Courses',
								category_img:
									'https://cdn-icons-png.flaticon.com/512/443/443635.png',
								category_id: 'all',
							}}
						/>
						{categories.map((category) => (
							<Category
								category={category}
								key={category.category_id}
							/>
						))}
					</div>
				</div>
				<div>
					<h4 className='text-2xl text-center divider'>
						Useful Link
					</h4>
					<ul className='grid gap-5'>
						<Link to='/profile'>
							<li className='rounded-md shadow hover:shadow-lg md:p-5 p-3'>
								Profile
							</li>
						</Link>
						<Link to='/blog'>
							<li className='rounded-md shadow hover:shadow-lg md:p-5 p-3'>
								Blog
							</li>
						</Link>
						<Link to='/faq'>
							<li className='rounded-md shadow hover:shadow-lg md:p-5 p-3'>
								FAQ
							</li>
						</Link>
						<Link to='/contact'>
							<li className='rounded-md shadow hover:shadow-lg md:p-5 p-3'>
								Contact Us
							</li>
						</Link>
					</ul>
				</div>
				{!user?.uid && (
					<div className='hidden xl:block'>
						<Link to='/login'>
							<button className='btn btn-block btn-primary'>
								Login
							</button>
						</Link>
						<h3 className='divider'>OR</h3>
						<ProviderLogin />
					</div>
				)}
			</div>
		</div>
	);
};

const Category = ({ category }) => {
	return (
		<Link to={`/courses/${category.category_id}`}>
			<div
				className='flex flex-col md:text-center lg:flex-row lg:text-left items-center md:gap-5 gap-3 rounded-lg shadow hover:shadow-lg md:p-5 p-3'
				data-theme='light'
			>
				<img className='w-10' src={category.category_img} alt='' />
				<h1>{category.category}</h1>
			</div>
		</Link>
	);
};

export default SideBar;
