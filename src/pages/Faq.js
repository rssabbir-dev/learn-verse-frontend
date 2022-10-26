import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Faq = () => {
	const faqs = useLoaderData();

	return (
		<>
			<h1 className='text-3xl text-center'>Some Frequently Asked Question</h1>
			<div className='divider'></div>
			{faqs.map((faq) => (
				<div key={faq.id}
					tabIndex={0}
					className='collapse collapse-arrow border border-base-300 bg-base-100 rounded-box'
				>
					<input type='checkbox' className='peer' />

					<div className='collapse-title text-xl font-medium'>
						{faq.name}
					</div>
					<div className='collapse-content'>
						<p>
							{faq.description}
						</p>
					</div>
				</div>
			))}
		</>
	);
};

export default Faq;
