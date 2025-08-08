import { Outlet } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import AOS from 'aos';

function App() {
	// Initialize AOS (Animate On Scroll) library
	AOS.init();
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
