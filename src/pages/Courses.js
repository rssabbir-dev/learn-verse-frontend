import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ResponsiveCourseCard from '../components/ResponsiveCourseCard';
import SideBar from '../components/SideBar';

const Courses = () => {
    const courses = useLoaderData();
    const paramsId = useParams();
    return (
        
        <div className='flex flex-col-reverse md:grid md:grid-cols-4 gap-10'>
			<div className='col-span-3'>
                <h1 className='text-3xl my-3'>{courses.length} Course are available in {paramsId.id === 'all' ? 'All Courses' : courses[0]?.category}</h1>
				<div className='grid gap-10'>
                    {courses.map((course) => (
                        <div key={course.id} className='shadow-xl rounded-2xl'>
                            <ResponsiveCourseCard
							course={course}
						/>
                        </div>
						
					))}
				</div>
			</div>
			<div className='col-span-1'>
				<SideBar />
			</div>
		</div>
	);
};

export default Courses;