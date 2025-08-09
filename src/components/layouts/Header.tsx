import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const services = [
	{
		name: 'Website Maintenance',
		description: 'Keep your website running smoothly and securely',
		icon: 'bx bx-slider',
		link: '/web-main',
		bgColor: 'bg-red-100 text-red-500',
	},
	{
		name: 'Website & App Development',
		description: 'Transform your online presence with our custom platform design solutions.',
		icon: 'bx bx-code-alt',
		link: '/web-dev',
		bgColor: 'bg-yellow-100 text-yellow-500',
	},
	{
		name: 'IT Support',
		description: 'Experience peace of mind with our reliable IT support services.',
		icon: 'bx bx-support',
		link: '/it-support',
		bgColor: 'bg-green-100 text-green-500',
	},
	{
		name: '3rd Party AI Solution',
		description: 'Leverage our expertise to find the best third-party services for your business.',
		icon: 'bx bxs-diamond',
		link: '/ai-solution',
		bgColor: 'bg-purple-100 text-purple-500',
	},
];

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();

	const handleScrollToSection = (sectionId: string) => {
		if (location.pathname !== '/') {
			// Jika tidak di home page, navigate ke home dulu
			navigate('/');
			// Tunggu sebentar untuk memastikan page sudah load, kemudian scroll
			setTimeout(() => {
				const element = document.getElementById(sectionId);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
				}
			}, 100);
		} else {
			// Jika sudah di home page, langsung scroll
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsScrolled(scrollTop > 0);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	// Scroll to top when route changes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	const handleWhatsAppClick = () => {
		window.open(
			'https://api.whatsapp.com/send/?phone=6581181595&text=Hi+Co2%2C+I+would+like+ask+about+your+services.&type=phone_number&app_absent=0',
			'_blank'
		);
	};

	return (
		<>
			<header
				className={`flex bg-white items-center justify-between top-0 z-20 lg:px-28 px-10 py-2 fixed w-screen transition-all duration-300 ease-in-out font-semibold ${
					isScrolled ? 'shadow-md' : ''
				}`}
			>
				<NavLink to='/'>
					<img
						src='https://labsco2.com/images/logo.png'
						alt='CO2 LABS Logo'
						className='cursor-pointer w-14'
					/>
				</NavLink>

				{/* NAVBAR - Desktop */}
				<nav className='lg:flex gap-10 hidden'>
					<span className='relative group'>
						<button className='cursor-pointer font-medium'>
							Our Services
							<i className='bx bx-chevron-down ml-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-180 arrow-icon'></i>
						</button>

						{/* Dropdown Menu */}
						<div className='absolute top-full left-0 mt-2 w-[50rem] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50'>
							<div className='grid grid-cols-2 gap-4 p-6'>
								{services.map((service, index) => (
									<NavLink
										key={index}
										to={service.link}
										className='flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors'
									>
										<div
											className={`w-1/4 h-full ${service.bgColor} rounded-lg flex items-center justify-center`}
										>
											<i className={`${service.icon} text-xl`}></i>
										</div>
										<div>
											<h3 className='font-semibold text-gray-800 text-sm'>{service.name}</h3>
											<p className='text-xs text-gray-600 mt-1'>{service.description}</p>
										</div>
									</NavLink>
								))}
							</div>
						</div>
					</span>

					<button
						className='cursor-pointer font-medium'
						onClick={() => handleScrollToSection('about')}
					>
						About Us
					</button>
					<button
						className='cursor-pointer font-medium'
						onClick={() => handleScrollToSection('portfolio')}
					>
						Portfolio
					</button>
					<button
						className='cursor-pointer font-medium'
						onClick={() => handleScrollToSection('contact')}
					>
						Contact
					</button>
				</nav>

				{/* CTA - Desktop */}
				<button
					className='cursor-pointer bg-primary text-white px-4 py-2 rounded hidden lg:block'
					onClick={handleWhatsAppClick}
				>
					<small>Get Started Today!</small>
				</button>

				{/* Hamburger Menu Button - Mobile */}
				<button
					className='lg:hidden flex flex-col justify-center items-center w-8 h-8 relative z-30'
					onClick={toggleMobileMenu}
				>
					<span
						className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-in-out ${
							isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
						}`}
					></span>
					<span
						className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-in-out my-1 ${
							isMobileMenuOpen ? 'opacity-0' : ''
						}`}
					></span>
					<span
						className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-in-out ${
							isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
						}`}
					></span>
				</button>
			</header>

			{/* Mobile Menu Overlay */}
			<div
				className={`fixed inset-0 bg-white bg-opacity-50 z-25 lg:hidden transition-opacity duration-300 ${
					isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
				}`}
				onClick={closeMobileMenu}
			></div>

			{/* Mobile Menu Slider */}
			<nav
				className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl z-30 lg:hidden transform transition-transform duration-300 ease-in-out ${
					isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<div className='px-4 pt-20'>
					{/* Close Button */}
					<button
						className='absolute top-6 left-6 w-8 h-8 flex items-center justify-center'
						onClick={closeMobileMenu}
					>
						<i className='bx bx-x text-5xl text-gray-600'></i>
					</button>

					{/* Mobile Menu Items */}
					<div className='space-y-2'>
						<div>
							<h3 className='block w-full text-left py-2 px-4 rounded-md text-gray-800 font-semibold bg-accent/40 '>
								Our Services
							</h3>
							<div className='space-y-3 pl-2'>
								{services.map((service, index) => (
									<NavLink
										key={index}
										to={service.link}
										className='flex items-center gap-3 py-2 hover:text-gray-800'
										onClick={closeMobileMenu}
									>
										<span className='w-1 h-1 bg-black rounded-full'></span>
										<span className='text-sm font-medium underline'>{service.name}</span>
									</NavLink>
								))}
							</div>
						</div>

						<button
							className='block w-full text-left py-2 px-4 rounded-md text-gray-800 font-semibold bg-accent/40 '
							onClick={() => {
								handleScrollToSection('about');
								closeMobileMenu();
							}}
						>
							About Us
						</button>

						<button
							className='block w-full text-left py-2 px-4 rounded-md text-gray-800 font-semibold bg-accent/40 '
							onClick={() => {
								handleScrollToSection('portfolio');
								closeMobileMenu();
							}}
						>
							Portfolio
						</button>

						<button
							className='block w-full text-left py-2 px-4 rounded-md text-gray-800 font-semibold bg-accent/40 '
							onClick={() => {
								handleScrollToSection('contact');
								closeMobileMenu();
							}}
						>
							Contact Us
						</button>

						<button
							className='w-full bg-primary text-white px-6 py-3 rounded mt-6'
							onClick={handleWhatsAppClick}
						>
							Get Started Today!
						</button>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
