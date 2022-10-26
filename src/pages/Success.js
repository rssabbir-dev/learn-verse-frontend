import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { GiJeweledChalice } from 'react-icons/gi';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const Success = () => {
    const {user} = useContext(AuthContext)
    const course = useLoaderData();
    return (
        <div className='justify-center items-center flex flex-col gap-5'>
            <GiJeweledChalice className='text-8xl text-primary'/>
            <h1 className='text-5xl text-primary mb-10'>Congratulation</h1>
            <img className='w-36 rounded-xl' src={course?.img} alt="" />
            <p>You Successfully Enrolled {course?.name} Course!</p>
            <p>Thanks For Believe Us {user?.displayName}</p>
        </div>
    );
};

export default Success;