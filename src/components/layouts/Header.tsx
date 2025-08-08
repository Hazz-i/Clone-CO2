import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<>
			<header className='flex lg:flex-row flex-row-reverse items-center justify-between top-0 z-20 lg:px-28 px-10 py-2 fixed w-screen transition-all duration-300 ease-in-out shadow-custom-drop font-semibold'>
				<NavLink to='/'>
					<img src='./src/assets/logo.png' alt='CO2 LABS Logo' className='cursor-pointer w-14' />
				</NavLink>

				{/* NAVBAR */}
				<nav className='lg:flex gap-10 hidden'>
					<span className='relative group'>
						<button className='cursor-pointer font-generalsans font-medium'>
							Our Services
							<i className='bx bx-chevron-down ml-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-180 arrow-icon'></i>
						</button>
						<div className='absolute left-0 right-0 hidden h-0 group-hover:h-1 bg-primary transition-all duration-300 ease-in-out'></div>
					</span>
					<button className='cursor-pointer font-generalsans font-medium'> About Us</button>
					<button className='cursor-pointer font-generalsans font-medium'>Portofolio</button>
					<button className='cursor-pointer font-generalsans font-medium'> Contact</button>
				</nav>

				{/* CTA */}
				<button className='cursor-pointer bg-primary text-white px-4 py-2 rounded'>
					<small>Get Started Today!</small>
				</button>
			</header>
		</>
	);
};

export default Header;
