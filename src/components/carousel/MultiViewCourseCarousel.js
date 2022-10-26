import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper';
import { serverURL } from '../../routes/routes';
import ResponsiveCourseCard from '../ResponsiveCourseCard';

const MultiViewCourseCarousel = () => {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		fetch(`${serverURL}/courses/all`)
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
				modules={[ Pagination, Autoplay]}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				className=''
			>
				{courses.map((course) => (
					<SwiperSlide key={course.id} className=''>
                        <ResponsiveCourseCard course={course} rounded='rounded-none'/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default MultiViewCourseCarousel;
