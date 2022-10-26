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
				{user?.uid && (
					<div>
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
				className='flex md:flex-col md:text-center lg:flex-row lg:text-left items-center gap-5 rounded-lg shadow-lg p-5'
				data-theme='light'
			>
				<img className='w-10' src={category.category_img} alt='' />
				<h1>{category.category}</h1>
			</div>
		</Link>
	);
};

export default SideBar;