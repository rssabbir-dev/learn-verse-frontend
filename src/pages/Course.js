import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import missingUserImg from '../assets/img/missing-user-img.png';
import { TiTick } from 'react-icons/ti';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';


import {
	MdOndemandVideo,
	MdOutlineHourglassTop,
	MdOutlinePeopleAlt,
	MdOutlineQuiz,
} from 'react-icons/md';
import ReactToPDF from '@kunwarji/react-to-pdf';
import { FaDownload } from 'react-icons/fa';
import SameCourseOnACategory from '../components/SameCourseOnACategory';
const Course = () => {
	const course = useLoaderData();
	//pdf Download ref
	const pdfDownloadRef = useRef();
	const {
		id,
		name,
		img,
		course_details,
		topics_cover,
		instructor_info,
		category_id,
	} = course;
	const { instructor_name, instructor_img, graduate_from } = instructor_info;
	const {
		enrolled,
		hour_require,
		sort_description,
		total_quiz,
		total_video,
	} = course_details;
	return (
		<>
			<div className='flex flex-col-reverse md:grid md:grid-cols-5 gap-10'>
				<div className='col-span-3 space-y-5' ref={pdfDownloadRef}>
					<div>
						<h1 className='text-4xl hidden md:block'>{name}</h1>
						<div className='hidden md:block'>
							<div className='divider'></div>
						</div>
						<p className='text-lg'>{sort_description}</p>
					</div>
					<div>
						<h4 className='text-2xl'>Instructor</h4>
						<div className='flex items-center gap-3 border border-primary p-5 rounded-lg'>
							<img
								className='rounded-full w-12'
								src={
									instructor_img
										? instructor_img
										: missingUserImg
								}
								alt=''
							/>
							<div>
								<p className='text-lg'>{instructor_name}</p>
								<p>Graduate From {graduate_from}</p>
							</div>
						</div>
					</div>
					<div className='border border-primary p-5 rounded-lg'>
						<ul className='space-y-3'>
							{topics_cover.map((topic, index) => (
								<li key={index} className='flex items-start'>
									<span className='mt-1'>
										<TiTick className='text-primary text-lg' />
									</span>{' '}
									<span> {topic}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='col-span-2 space-y-5 '>
					<div className='text-right'>
						{/* //React To PDF Download */}
						<ReactToPDF element={pdfDownloadRef}>
							{(toPdf) => (
								<button
									className='btn btn-sm btn-warning gap-2'
									type='button'
									onClick={toPdf}
								>
									Download PDF <FaDownload />
								</button>
							)}
						</ReactToPDF>
						{/* //React To PDF Download */}
					</div>
					<h1 className='text-4xl md:hidden'>{name}</h1>
					<div className='divider md:hidden'></div>
					<div className='border border-primary rounded-lg'>
						{/* //Zoom Img When Click */}
						<InnerImageZoom
							src={img}
							zoomSrc={img}
							className="rounded-t-lg"
						/>
						<div className='grid grid-cols-2 rounded-lg p-5 gap-5'>
							<div className='border border-primary p-2 rounded-lg'>
								<p className='font-bold select-none opacity-40'>
									Enrolled
								</p>
								<span className='flex items-center gap-1 text-primary'>
									<MdOutlinePeopleAlt />
									<span>{enrolled} Student</span>
								</span>
							</div>
							<div className='border border-primary p-2 rounded-lg'>
								<p className='font-bold select-none opacity-40'>
									Required Hour
								</p>
								<span className='flex items-center gap-1 text-primary'>
									<MdOutlineHourglassTop />
									<span>{hour_require} Hour</span>
								</span>
							</div>
							<div className='border border-primary p-2 rounded-lg'>
								<p className='font-bold select-none opacity-40'>
									Total Video
								</p>
								<span className='flex items-center gap-1 text-primary'>
									<MdOndemandVideo />
									<span>{total_video}</span>
								</span>
							</div>
							<div className='border border-primary p-2 rounded-lg'>
								<p className='font-bold select-none opacity-40'>
									Total Quiz
								</p>
								<span className='flex items-center gap-1 text-primary'>
									<MdOutlineQuiz />
									<span>{total_quiz}</span>
								</span>
							</div>
							<div className='col-span-2'>
								<Link to={`/checkout/${id}`}>
									<button className='btn btn-primary btn-block'>
										Get premium access
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='col-span-5'>
				<h1 className='text-3xl'>Smeller Course</h1>
				<div className='divider'></div>
				<SameCourseOnACategory courseID={id} categoryID={category_id} />
			</div>
		</>
	);
};

export default Course;
