import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Main from '../pages/layout/Main';
import Login from '../pages/Login';
import Registration from '../pages/Registration';

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
                path: '/registration',
                element:<Registration/>
			},
			{
				path: '/login',
				element:<Login/>
			}
		],
	},
]);
