import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData()
    return (
        <div>
            <h1 className='text-3xl'>{course.name}</h1>
        </div>
    );
};

export default Course;