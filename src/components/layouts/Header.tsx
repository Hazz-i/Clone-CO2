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

	return (
		<>
			<header
				className={`flex lg:flex-row bg-white flex-row-reverse items-center justify-between top-0 z-20 lg:px-28 px-10 py-2 fixed w-screen transition-all duration-300 ease-in-out font-semibold ${
					isScrolled ? 'shadow-md' : ''
				}`}
			>
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
						className='cursor-pointer font-generalsans font-medium'
						onClick={() => handleScrollToSection('about')}
					>
						About Us
					</button>
					<button
						className='cursor-pointer font-generalsans font-medium'
						onClick={() => handleScrollToSection('portfolio')}
					>
						Portfolio
					</button>
					<button
						className='cursor-pointer font-generalsans font-medium'
						onClick={() => handleScrollToSection('contact')}
					>
						Contact
					</button>
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
