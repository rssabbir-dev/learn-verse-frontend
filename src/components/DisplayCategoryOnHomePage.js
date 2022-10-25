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
				<h1 className='text-5xl'>Learn anything</h1>
				<p className='text-lg'>Choose your topic from our vast library to get started</p>
			</div>
			<div className='grid md:grid-cols-3 gap-10'>
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
            <div className='flex md:flex-col items-center gap-3 lg:gap-5 shadow-md hover:shadow-xl transition-all p-5 rounded-lg h-full'>
            <img className='w-12 lg:w-20' src={category.category_img} alt="" />
			<h4 className='text-xl lg:text-2xl'>{category.category}</h4>
		</div>
        </Link>
	);
};

export default DisplayCategoryOnHomePage;
