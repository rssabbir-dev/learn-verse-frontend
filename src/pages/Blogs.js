import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BlogCard from '../components/BlogCard';

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div className='grid gap-10'>
            {
                blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)
            }
        </div>
    );
};

export default Blogs;