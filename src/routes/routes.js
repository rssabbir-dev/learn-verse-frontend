import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Main from '../pages/layout/Main';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Registration from '../pages/Registration';
import PrivateRoute from './PrivateRoute';

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
				path: '/registration',
				element: <Registration />,
			},
			{
				path: '/login',
				element: <Login />,
			},
		],
	},
]);
