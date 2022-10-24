import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

import { serverURL } from '../../App';

const MultiViewCourseCarousel = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch(`${serverURL}/courses`)
			.then((res) => res.json())
			.then((data) => setCourses(data))
			.catch((error) => {
				console.log(error);
			});
    }, []);
	return (
		<>
			<Swiper
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Navigation, Pagination, Autoplay]}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				className='grid'
			>
				{courses.map((course) => (
					<SwiperSlide className='h-full'>
						<div
							className='hero min-h-[60vh] rounded-lg'
							style={{
								backgroundImage: `url(${course.img})`,
							}}
						>
							<div className='hero-overlay bg-opacity-50 rounded-lg'></div>
							<div className='hero-content text-center text-neutral-content'>
								<div className='max-w-md bg-[#00000073] p-5 rounded-xl'>
									<h1 className='mb-5 text-5xl font-bold'>
										{course.name}
									</h1>
									<p className='mb-5'>
										Provident cupiditate voluptatem et in.
										Quaerat fugiat ut assumenda excepturi
										exercitationem quasi. In deleniti eaque
										aut repudiandae et a id nisi.
									</p>
									<button className='btn btn-primary'>
										Get Started
									</button>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default MultiViewCourseCarousel;
