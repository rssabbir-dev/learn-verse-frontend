import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../pages/Blogs';
import Checkout from '../pages/Checkout';
import Course from '../pages/Course';
import Courses from '../pages/Courses';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import Main from '../pages/layout/Main';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Registration from '../pages/Registration';
import Success from '../pages/Success';
import PrivateRoute from './PrivateRoute';

export const serverURL = 'https://learn-varse-backend.vercel.app';
export const routes = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/profile',
				element: (
					<PrivateRoute>
						<Profile />
					</PrivateRoute>
				),
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
			},
			{
				path: '/success/:id',
				element: <Success />,
				loader: ({ params }) => {
					return fetch(`${serverURL}/course/${params.id}`);
				},
			},
			{
				path: '/courses/:id',
				element: <Courses />,
				loader: ({ params }) => {
					return fetch(`${serverURL}/courses/${params.id}`);
				},
			},
			{
				path: '/course/:id',
				element: <Course />,
				loader: ({ params }) => {
					return fetch(`${serverURL}/course/${params.id}`);
				},
			},
			{
				path: '/blog',
				element: <Blogs />,
				loader: () => {
					return fetch(`${serverURL}/blogs`)
				}
			},
			{
				path: '/registration',
				element: <Registration />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '*',
				element: <ErrorPage />,
			},
		],
	},
]);
