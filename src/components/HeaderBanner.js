import React from 'react';
import MultiViewCourseCarousel from './carousel/MultiViewCourseCarousel';
import headerBannerImg from '../assets/img/banner-explore-courses.jpg'
import { Link } from 'react-router-dom';

const HeaderBanner = () => {
    return (
		<div>
			<div
				className='hero min-h-[40vh]'
				style={{
					backgroundImage: `url(${headerBannerImg})`,
				}}
			>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center text-neutral-content'>
					<div className='max-w-md'>
						<h1 className='mb-5 text-5xl font-bold'>LearnVerse</h1>
						<p className='mb-5 text-2xl'>Scale Your Ability</p>
						<Link to='courses/all'>
							<button className='btn btn-primary'>
								Get Started
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div>
				<MultiViewCourseCarousel />
			</div>
		</div>
	);
};

export default HeaderBanner;