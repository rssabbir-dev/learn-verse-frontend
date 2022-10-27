import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../pages/Blogs';
import Checkout from '../pages/Checkout';
import Contact from '../pages/Contact';
import Course from '../pages/Course';
import Courses from '../pages/Courses';
import ElementError from '../pages/ElementError';
import ErrorPage from '../pages/ErrorPage';
import Faq from '../pages/Faq';
import Home from '../pages/Home';
import Main from '../pages/layout/Main';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Registration from '../pages/Registration';
import Success from '../pages/Success';
import PrivateRoute from './PrivateRoute';

//Server Site URL link for loading data
export const serverURL = 'https://learn-varse-backend.vercel.app';
export const routes = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
				errorElement: <ElementError />,
			},
			{
				path: '/profile',
				element: (
					<PrivateRoute>
						<Profile />
					</PrivateRoute>
				),
				errorElement: <ElementError />,
			},
			{
				path: '/checkout/:id',
				element: (
					<PrivateRoute>
						<Checkout />
					</PrivateRoute>
				),
				loader: ({ params }) => {
					return fetch(`${serverURL}/course/${params.id}`);
				},
				errorElement: <ElementError />,
			},
			{
				path: '/success/:id',
				element: <Success />,
				loader: ({ params }) => {
					return fetch(`${serverURL}/course/${params.id}`);
				},
				errorElement: <ElementError />,
			},
			{
				path: '/courses/:id',
				element: <Courses />,
				loader: ({ params }) => {
					return fetch(`${serverURL}/courses/${params.id}`);
				},
				errorElement: <ElementError />,
			},
			{
				path: '/course/:id',
				element: <Course />,
				loader: ({ params }) => {
					return fetch(`${serverURL}/course/${params.id}`);
				},
				errorElement: <ElementError />,
			},
			{
				path: '/blog',
				element: <Blogs />,
				loader: () => {
					return fetch(`${serverURL}/blogs`);
				},
				errorElement: <ElementError />,
			},
			{
				path: '/faq',
				element: <Faq />,
				loader: () => {
					return fetch(`${serverURL}/faq`);
				},
				errorElement: <ElementError />,
			},
			{
				path: '/contact',
				element: <Contact />,
				errorElement: <ElementError />,
			},
			{
				path: '/registration',
				element: <Registration />,
				errorElement: <ElementError />,
			},
			{
				path: '/login',
				element: <Login />,
				errorElement: <ElementError />,
			},
			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);
