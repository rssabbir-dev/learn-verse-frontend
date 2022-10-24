import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/routes';
export const serverURL = 'http://localhost:5000';

function App() {
	return (
		<div>
			<RouterProvider router={routes} />
		</div>
	);
}

export default App;
