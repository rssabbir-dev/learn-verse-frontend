import React from 'react';

const BlogCard = ({ blog }) => {
	const { name, description } = blog;
	return (
		<div className='shadow-xl p-5 rounded-xl space-y-3'>
			<h1 className='text-2xl'>{name}</h1>
			<p>{description}</p>
		</div>
	);
};

export default BlogCard;
