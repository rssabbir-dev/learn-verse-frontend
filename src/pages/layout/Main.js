import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavBar from '../../components/TopNavBar';

const Main = () => {
    return (
        <div className='w-11/12 mx-auto space-y-10'>
            <TopNavBar />
            <Outlet/>
        </div>
    );
};

export default Main;