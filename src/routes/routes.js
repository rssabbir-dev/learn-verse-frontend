import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Main from '../pages/layout/Main';
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
            }
		],
	},
]);
