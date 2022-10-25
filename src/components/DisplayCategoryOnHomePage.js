import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { serverURL } from '../routes/routes';

const DisplayCategoryOnHomePage = () => {
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
		<div className='space-y-10'>
			<div className='text-center space-y-5'>
				<h1 className='text-5xl'>We have everything you need to learn anything</h1>
				<p className='text-lg'>Choose your topic from our vast library to get started</p>
			</div>
			<div className='grid grid-cols-3 gap-10'>
				{categories.map((category) => (
					<Category category={category} key={category.category_id}></Category>
				))}
			</div>
		</div>
	);
};

const Category = ({ category }) => {
	return (
        <Link to={`/courses/${category.category_id}`}>
            <div className='flex items-center gap-5 shadow-lg p-5 rounded-lg'>
            <img className='w-20' src={category.category_img} alt="" />
			<h4 className='text-2xl'>{category.category}</h4>
		</div>
        </Link>
	);
};

export default DisplayCategoryOnHomePage;
