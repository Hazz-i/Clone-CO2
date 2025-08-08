import { Link } from 'react-router-dom';

const footerList = [
	{
		title: 'Services',
		links: [
			{ name: 'Web Maintenance', href: '/web-main' },
			{ name: 'Web & App Development', href: '/web-dev' },
			{ name: 'IT Service', href: '/it-support' },
			{ name: '3rd Party AI Solution', href: '/ai-solution' },
		],
	},
	{
		title: 'About',
		links: [
			{ name: 'Our Approach', href: '/#approach' },
			{ name: 'Our Team', href: '/#team' },
			{ name: 'Our Portfolio', href: '/#portfolio' },
		],
	},
	{
		title: 'Contact',
		links: [
			{ icon: 'bx bxs-phone', text: '+65-8118-1595' },
			{ icon: 'bx bx-envelope', text: 'info@co2labs.com' },
			{ icon: 'bx bx-map', text: '100D Pasir Panjang Road' },
		],
	},
];

const Footer = () => {
	return (
		<footer className='bg-[#141516] lg:px-28 px-10 text-white pt-20 pb-10'>
			<div className='grid w-full gap-8'>
				{/* Desktop Layout */}
				<div className='hidden lg:flex items-center justify-between'>
					<span className='grid font-bold'>
						<h1 className='text-xl'>Let's Grow With CO2 Labs</h1>
						<p className='text-sm mb-5'>Get Exclusive Updates From Us</p>

						<div className='flex items-center'>
							<input
								type='text'
								className='bg-white rounded-l-full placeholder:text-gray-500 font-normal text-sm py-2 px-4 flex-1 text-gray-500'
								placeholder='Youremail@example.com'
							/>
							<button className='bg-[#eab308] text-black rounded-r-full px-6 py-2 text-sm cursor-pointer'>
								Subscribe
							</button>
						</div>
					</span>

					<div className='flex items-start justify-center'>
						{footerList.map((list, index) => (
							<div key={index} className='ms-10'>
								<h2 className='font-bold mb-2'>{list.title}</h2>
								<ul className='text-sm'>
									{list.links.map((link, idx) => (
										<li key={idx} className='mb-1 text-gray-400'>
											{typeof link === 'string' ? (
												<span className='flex items-center'>
													<span className='w-1 h-1 bg-gray-400 rounded-full mr-3'></span>
													{link}
												</span>
											) : 'icon' in link ? (
												<span className='flex items-center'>
													<span className='w-1 h-1 bg-gray-400 rounded-full mr-3'></span>
													<i className={link.icon + ' text-lg mr-3'}></i>
													{link.text}
												</span>
											) : link.href?.startsWith('/#') ? (
												<a
													href={link.href}
													className='text-gray-400 hover:text-white flex items-center transition-colors'
													onClick={(e) => {
														e.preventDefault();
														const id = link.href.replace('/#', '');
														const element = document.getElementById(id);
														if (element) {
															element.scrollIntoView({ behavior: 'smooth' });
														}
													}}
												>
													<span className='w-1 h-1 bg-gray-400 rounded-full mr-3'></span>
													{link.name}
												</a>
											) : (
												<Link
													to={link.href}
													className='text-gray-400 hover:text-white flex items-center transition-colors'
												>
													<span className='w-1 h-1 bg-gray-400 rounded-full mr-3'></span>
													{link.name}
												</Link>
											)}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* Mobile Layout */}
				<div className='lg:hidden grid gap-8'>
					{/* Newsletter Section */}
					<span className='grid font-bold'>
						<h1 className='text-xl'>Let's Grow With CO2 Labs</h1>
						<p className='text-sm mb-5'>Get Exclusive Updates From Us</p>

						<div className='flex items-center'>
							<input
								type='text'
								className='bg-white rounded-l-full placeholder:text-gray-500 font-normal text-sm py-2 px-4 flex-1 text-gray-500'
								placeholder='Youremail@example.com'
							/>
							<button className='bg-[#eab308] text-black rounded-r-full px-6 py-2 text-sm cursor-pointer'>
								Subscribe
							</button>
						</div>
					</span>

					{/* Services, About, Contact Sections */}
					{footerList.map((list, index) => (
						<div key={index}>
							<h2 className='font-bold mb-2'>{list.title}</h2>
							<ul className='text-sm'>
								{list.links.map((link, idx) => (
									<li key={idx} className='mb-1 text-gray-400'>
										{typeof link === 'string' ? (
											<span className='flex items-center'>
												<span className='w-1 h-1 bg-gray-400 rounded-full mr-3'></span>
												{link}
											</span>
										) : 'icon' in link ? (
											<span className='flex items-center'>
												<i className={link.icon + ' text-lg mr-3'}></i>
												{link.text}
											</span>
										) : link.href?.startsWith('/#') ? (
											<a
												href={link.href}
												className='text-gray-400 hover:text-white flex items-center transition-colors'
												onClick={(e) => {
													e.preventDefault();
													const id = link.href.replace('/#', '');
													const element = document.getElementById(id);
													if (element) {
														element.scrollIntoView({ behavior: 'smooth' });
													}
												}}
											>
												<span className='w-1 h-1 bg-gray-400 rounded-full mr-3'></span>
												{link.name}
											</a>
										) : (
											<Link
												to={link.href}
												className='text-gray-400 hover:text-white flex items-center transition-colors'
											>
												<span className='w-1 h-1 bg-gray-400 rounded-full mr-3'></span>
												{link.name}
											</Link>
										)}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Footer Bottom - Same for both desktop and mobile */}
				<div className='flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0'>
					<small className='text-gray-400'>&copy;2024 CO2 Labs. All Right Reserved</small>

					<span className='flex items-center gap-10 text-gray-400'>
						<small className='hover:text-white cursor-pointer'>FAQ</small>
						<small className='hover:text-white cursor-pointer'>Terms & Policy</small>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
