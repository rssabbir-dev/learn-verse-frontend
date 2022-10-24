import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './routes/routes';
export const serverURL = 'http://localhost:5000';

function App() {
	return (
		<div>
			<RouterProvider router={routes} />
			<Toaster/>
		</div>
	);
}

export default App;
