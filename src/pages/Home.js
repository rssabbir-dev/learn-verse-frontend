import React from 'react';
import MultiViewCourseCarousel from '../components/carousel/MultiViewCourseCarousel';
import DisplayCourses from '../components/DisplayCourses';

const Home = () => {
    return (
        <div className='space-y-10'>
            <MultiViewCourseCarousel />
            <DisplayCourses/>
        </div>
    );
};

export default Home;