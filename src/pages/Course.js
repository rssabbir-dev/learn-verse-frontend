import React, { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import missingUserImg from '../assets/img/missing-user-img.png';
import { TiTick } from 'react-icons/ti';

import {
	MdOndemandVideo,
	MdOutlineHourglassTop,
	MdOutlinePeopleAlt,
	MdOutlineQuiz,
} from 'react-icons/md';
import ReactToPDF from '@kunwarji/react-to-pdf';
import { FaDownload } from 'react-icons/fa';
const Course = () => {
	const course = useLoaderData();
    console.log(course);
    const refVar = useRef();
	const { name, img, course_details, topics_cover, instructor } = course;
	const {
		enrolled,
		hour_require,
		sort_description,
		total_quiz,
		total_video,
	} = course_details;
	return (
		<div className='flex flex-col-reverse md:grid md:grid-cols-5 gap-10'>
			<div className='col-span-3 space-y-5' ref={refVar}>
				<div>
					<h1 className='text-4xl hidden md:block'>{name}</h1>
					<div className='hidden md:block'>
						<div className='divider'></div>
					</div>
					<p className='text-lg'>{sort_description}</p>
				</div>
				<div>
					<h4 className='text-2xl'>Instructor</h4>
					<div className='flex items-center gap-3 border p-5 rounded-lg'>
						<img
							className='rounded-full w-12'
							src={missingUserImg}
							alt=''
						/>
						<div>
							<p className='text-lg'>{instructor}</p>
							<p>Graduate From Dhaka University</p>
						</div>
					</div>
				</div>
				<div className='border p-5 rounded-lg'>
					<ul className='space-y-3'>
						{topics_cover.map((topic,index) => (
							<li key={index} className='flex items-start'>
								<span className='mt-1'>
									<TiTick className='text-customPrimary text-lg' />
								</span>{' '}
								<span> {topic}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className='col-span-2 space-y-5 '>
				<div className='text-right'>
					<ReactToPDF element={refVar}>
						{(toPdf) => (
							<button className='btn btn-sm btn-warning gap-2' type='button' onClick={toPdf}>
								Download PDF <FaDownload/>
							</button>
						)}
					</ReactToPDF>
				</div>
				<h1 className='text-4xl md:hidden'>{name}</h1>
				<div className='divider md:hidden'></div>
				<div className='border rounded-lg'>
					<img src={img} alt='' />
					<div className='grid grid-cols-2 border rounded-lg p-5 gap-5'>
						<div className='border p-2 rounded-lg'>
							<p className='font-bold select-none opacity-40'>
								Enrolled
							</p>
							<span className='flex items-center gap-1 text-customPrimary'>
								<MdOutlinePeopleAlt />
								<span>{enrolled} Student</span>
							</span>
						</div>
						<div className='border p-2 rounded-lg'>
							<p className='font-bold select-none opacity-40'>
								Required Hour
							</p>
							<span className='flex items-center gap-1 text-customPrimary'>
								<MdOutlineHourglassTop />
								<span>{hour_require} Hour</span>
							</span>
						</div>
						<div className='border p-2 rounded-lg'>
							<p className='font-bold select-none opacity-40'>
								Total Video
							</p>
							<span className='flex items-center gap-1 text-customPrimary'>
								<MdOndemandVideo />
								<span>{total_video}</span>
							</span>
						</div>
						<div className='border p-2 rounded-lg'>
							<p className='font-bold select-none opacity-40'>
								Total Quiz
							</p>
							<span className='flex items-center gap-1 text-customPrimary'>
								<MdOutlineQuiz />
								<span>{total_quiz}</span>
							</span>
						</div>
						<button className='btn btn-block col-span-2 bg-customPrimary border-customPrimary hover:bg-transparent hover:text-customPrimary hover:border-customPrimary'>
							Get premium access
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Course;
