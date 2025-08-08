import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import WebDev from './pages/WebDev';
import WebsiteMain from './pages/WebsiteMain';
import AISolution from './pages/AISolution';
import ITSupport from './pages/ITSupport';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'it-support', element: <ITSupport /> },
			{ path: 'web-dev', element: <WebDev /> },
			{ path: 'web-main', element: <WebsiteMain /> },
			{ path: 'ai-solution', element: <AISolution /> },
			{ path: '*', element: <NotFound /> },
		],
	},
]);

export default router;
