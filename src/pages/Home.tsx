import { NavLink } from 'react-router-dom';

const services = [
	{
		title: 'Website Maintenance',
		description:
			'Keep your website running smoothly and securely with our comprehensive maintenance services. Prevent downtime,..',
		icon: 'bx bx-slider',
		link: '/web-main',
	},
	{
		title: 'Website & App Development',
		description:
			'Transform your online presence with our custom website design solutions. From stunning visuals to seamless user experiences, we’ve got you covered.',
		icon: 'bx bx-code',
		link: '/web-dev',
	},
	{
		title: 'IT Support',
		description:
			'Experience peace of mind with our reliable IT support services. From troubleshooting to server maintenance..',
		icon: 'bx bx-support',
		link: '/it-support',
	},
	{
		title: '3rd Party AI Solutions',
		description:
			'Leverage our expertise to find the best third-party services for your business. From hosting to plugins, we provid..',
		icon: 'bx bxs-diamond',
		link: '/ai-solutions',
	},
];

const approach = [
	{
		title: 'Assessment',
		subtitle: '& Insight Gathering',
		description:
			'Our process begins with an initial consultation to gather insights into your business needs and challenges. We work closely with your team to understand your objectives and gather all necessary information.',
		content: [
			'Initial consultation meetings',
			'Gathering business and technical requirements',
			'Conducting stakeholder interviews',
			'Understanding long-term business goals',
		],
	},
	{
		title: 'Customization',
		subtitle: '& Strategic Planning',
		description:
			'We then develop a strategic plan and design tailored solutions that address your specific needs. This involves detailed planning, resource allocation, and design of bespoke solutions that align with your goals.',
		content: [
			'Strategic planning sessions',
			'Solution design and prototyping',
			'Resource and timeline planning',
			'Risk assessment and mitigation planning',
		],
	},
	{
		title: 'Execution',
		subtitle: '& Lifecycle Management',
		description:
			'We execute the strategic plan and manage the entire solution lifecycle, from implementation to optimization. This ensures the solutions are effectively integrated and continuously deliver value',
		content: [
			'Implementation of the strategic plan',
			'Solution deployment and integration',
			'Lifecycle management and support',
			'Continuous performance evaluation and optimization',
		],
	},
];

const team = [
	{
		name: 'Jay Chen',
		position: 'CEO',
		image: './src/assets/JayChen.jpeg',
		description:
			'Jay began his career in the banking and finance sector, where he honed his skills and developed a deep understanding of the industry. Leveraging this foundation, he expanded into HR operations and outsourcing, successfully growing his businesses by delivering exceptional service to renowned international brands like Huawei, Coca-Cola, and GlaxoSmithKline. CO2 Labs provides a solutions based approach to champion human resource and outsourcing through strategic consultation and meticulously planned placements.',
	},
	{
		name: 'Alune',
		position: 'Development Project Manager',
		image: './src/assets/Alune.jpeg',
		description:
			'With a background in IT software development, quality testing and web design, she brings a deep understanding of the technical and strategic aspects of project management. Known for her meticulous planning, effective communication, and ability to navigate challenges, she has consistently delivered high-quality software solutions on time and within budget. Alune excels at fostering collaboration across cross-functional teams, ensuring that projects align with client objectives and business goals. Her dedication to excellence and passion for innovation make her a driving force behind the success of every project she leads.',
	},
	{
		name: 'Ron',
		position: 'Business Development Lead',
		image: './src/assets/Ron.jpeg',
		description:
			'With a strong background in business development for finance, logistics and real estate industries, Ron has successfully led initiatives that have significantly increased reach and increased revenue for both emerging and established companies. Known for his ability to identify new opportunities and forge lasting relationships, Ron excels in creating tailored solutions that meet client needs and align with business goals through thoughtful solutioning.',
	},
];

const portofolio = [
	{
		title: 'AOTC Cosmetics',
		img: 'https://labsco2.com/images/portfolio.png',
		link: '/portfolio/aotc-cosmetics',
	},
	{
		title: 'Nosh kitchen Website',
		img: 'https://labsco2.com/images/portfolio-1.png',
		link: '/portfolio/nosh-kitchen',
	},
	{
		title: 'Michelah Event Organizer Singapore',
		img: 'https://labsco2.com/images/portfolio-2.png',
		link: '/portfolio/michelah-event-organizer',
	},
	{
		title: 'Joywaltzstudio Academy',
		img: 'https://labsco2.com/images/portfolio-3.png',
		link: '/portfolio/project-four',
	},
	{
		title: 'Octopay Payment',
		img: 'https://labsco2.com/images/portfolio-4.png',
		link: '/portfolio/project-five',
	},
];

const howtoknow = ['linkedin', 'Instagram', 'Job Ads', 'Events and Seminars', 'other'];

const Home = () => {
	return (
		<>
			{/* HERO SECTION */}
			<section className='h-screen flex justify-between items-center lg:mb-0 mb-20'>
				<div className='lg:ml-28 ml-10 w-full'>
					<div className='lg:flex items-center justify-between box-border lg:w-2/3'>
						<div className='lg:w-2/3 lg:mr-0 mr-10 lg:order-1'>
							<h1 className='sm:text-5xl text-3xl sm:flex flex-col items-start aos-init aos-animate'>
								<div className='mb-4'>Where Code Meets </div>
								<span className='font-orbitron font-bold sm:text-5xl text-3xl bg-primary text-white px-5'>
									Creativity
								</span>
							</h1>
							<h6 className='my-5 aos-init aos-animate'>
								Harnessing the power of our Coding Collective to build solutions for your business
								needs.
							</h6>

							<button className='bg-primary text-white px-4 py-2 rounded mt-4 cursor-pointer'>
								<small className='font-semibold'>Get a free consult</small>
							</button>
						</div>

						{/* RIGHT CONTENT */}
						<div className='lg:order-2 flex justify-end items-center '>
							<img
								src='./src/assets/HeroHome.png'
								className='lg:w-96 sm:w-1/2 w-2/3 absolute md:right-40 right-20 rounded-xl shadow-md aos-init aos-animate'
								alt=''
							/>
							<img
								src='./src/assets/HeroElem.png'
								alt=''
								className='-z-10 lg:w-[400px] sm:w-1/2 w-2/3 lg:absolute right-0'
							/>
						</div>
					</div>
				</div>
			</section>
			{/* SERVICE */}
			<section className='bg-primary flex items-center justify-center py-40' id='services'>
				<div className='flex flex-col gap-5'>
					<h1 className='sm:text-center xl:text-left text-white sm:mx-0 mx-10 text-4xl font-bold'>
						Our Services
					</h1>
					<div className='flex flex-wrap gap-3 justify-center'>
						{services.map((service, index) => (
							<div
								key={index}
								className='card rounded-xl shadow-lg bg-white h-96 w-72 p-7 flex flex-col items-center justify-center card-animation text-center gap-2'
							>
								<div className='bg-accent w-20 h-20 flex justify-center items-center rounded-full mb-5'>
									<i className={`${service.icon} text-4xl`}></i>
								</div>
								<h2 className='text-lg font-bold'>{service.title}</h2>
								<p className='text-sm'>{service.description}</p>
								<NavLink to={service.link} className='text-primary mt-3 hover:text-blue-800'>
									<p className='font-semibold underline'>View More</p>
								</NavLink>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* APPROACH */}
			<section
				className='xl:h-screen h-full flex flex-col items-center mt-20 lg:px-28 px-10'
				id='approach'
			>
				<div className='text-center'>
					<h1 className='text-3xl font-bold'>ACE</h1>
					<p className='text-center max-w-2xl font-semibold'>
						Methodology for Strategic Consulting
					</p>
				</div>

				<div className='grid lg:grid-cols-3 grid-cols-1 gap-0 w-full max-w-6xl mt-10'>
					{approach.map((item, index) => (
						<div
							key={index}
							className={`relative group p-8 h-[10rem] flex flex-col cursor-pointer transition-all duration-500 ease-in-out ${
								index === 0 ? 'bg-[#e8e4dc]' : index === 1 ? 'bg-[#a8b5b8]' : 'bg-[#e8e4dc]'
							} hover:h-[30rem]`}
						>
							<h2 className='text-2xl font-bold mb-2'>{item.title}</h2>
							<h3 className='text-lg font-medium mb-6'>{item.subtitle}</h3>

							{/* Chevron positioned under subtitle when content is hidden */}
							<div className='opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out'>
								<div className='flex justify-center'>
									<i
										className={`text-3xl ${
											index === 0
												? 'text-[#a8b5b8]'
												: index === 1
												? 'text-[#e8e4dc]'
												: 'text-[#a8b5b8]'
										} bx bx-chevron-down transform transition-transform duration-300 ease-in-out`}
									></i>
								</div>
							</div>

							{/* Content that shows on hover */}
							<div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex-1 flex flex-col'>
								<p className='text-sm leading-relaxed mb-8'>{item.description}</p>

								<ul className='space-y-3 flex-1'>
									{item.content.map((point, idx) => (
										<li key={idx} className='flex items-start'>
											<span className='w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0'></span>
											<span className='text-sm'>{point}</span>
										</li>
									))}
								</ul>

								{/* Chevron at bottom when content is shown */}
								<div className='flex justify-center mt-4'>
									<i
										className={`text-3xl ${
											index === 0
												? 'text-[#a8b5b8]'
												: index === 1
												? 'text-[#e8e4dc]'
												: 'text-[#a8b5b8]'
										} bx bx-chevron-down transform transition-transform duration-300 ease-in-out rotate-180`}
									></i>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* ABOUT */}
			<section className='lg:h-screen flex justify-center mb-40' id='about'>
				<div className='flex items-center gap-15'>
					<span className='grid gap-5'>
						<h1 className='text-4xl font-bold text-right'>About US</h1>
						<p className='max-w-2xl text-right'>
							At CO2 Labs, we strive to provide simple yet powerful software solutions and expert
							consultation to help your business thrive in the digital world.
						</p>
					</span>

					<img
						src='./src/assets/AboutImg.png'
						alt='About Us'
						className='w-1/2 h-[30rem] rounded-lg '
					/>
				</div>
			</section>

			{/* OUR TEAM */}
			<section className='lg:px-28 px-10 py-20 flex flex-col justify-center' id='team'>
				<h1 className='text-4xl font-bold mb-4'>Our Team</h1>

				<div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
					{team.map((member, index) => (
						<div
							key={index}
							className='flex flex-col items-center relative group hover:scale-110 transition-transform duration-300 hover:z-30'
						>
							{/* Profile Image */}
							<div className='w-40 h-40 rounded-full overflow-hidden shadow-md absolute '>
								<img
									src={member.image}
									alt={member.name}
									className='w-full h-full object-cover transition-all duration-300'
								/>
							</div>

							{/* Card Content */}
							<div className='bg-white p-8 rounded-2xl shadow-lg text-center h-[20rem] mt-20 pt-20 border border-gray-100 group-hover:shadow-lg'>
								<h2 className='text-2xl font-bold  cursor-text'>{member.name}</h2>
								<p className='font-semibold text-gray-600 mb-2 cursor-text'>{member.position}</p>
								<p className='text-xs text-gray-700 leading-relaxed cursor-text'>
									{member.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* PORTOFOLIO */}
			<section
				className='bg-primary-500 lg:px-28 px-10 py-20 mt-20 text-white bg-primary'
				id='portfolio'
			>
				<h1 className='text-4xl font-bold mb-4'>Our Portofolio</h1>

				<div className='flex items-center justify-center gap-5'>
					{portofolio.map((item, index) => (
						<NavLink
							to={item.link}
							className='group relative block rounded-xl overflow-hidden focus:outline-none'
							key={index}
						>
							<div className='aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden'>
								<img
									src={item.img}
									alt={item.title}
									className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110'
								/>
								<div className='absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300'></div>
							</div>

							<div className='mt-2'>
								<h2 className='font-semibold group-hover:text-accent transition-colors duration-300 text-wrap'>
									{item.title}
								</h2>
							</div>
						</NavLink>
					))}
				</div>
			</section>

			{/* CONTACTS */}
			<section className='lg:mx-28 mx-10 flex flex-col gap-16 py-24'>
				<span className='flex justify-between items-center mb-4'>
					<h1 className='text-4xl font-bold'>Contact Us</h1>

					<div className='flex items-center gap-10'>
						<i className='bx bxs-map text-4xl'></i>
						<i className='bx bxs-envelope text-4xl'></i>
						<i className='bx bxs-phone text-4xl'></i>
					</div>
				</span>
				<div className='flex gap-20'>
					<div className='border grid gap-3 px-5 py-10 rounded-md border-gray-100 shadow-md flex-1'>
						<p className='font-semibold text-xl'>Hi there, how can we help?</p>
						<input
							type='text'
							placeholder='Your Name'
							className='rounded-md bg-gray-300 text-sm px-5 py-1 text-black/90'
						/>
						<input
							type='text'
							placeholder='Youremail@example.com'
							className='rounded-md bg-gray-300 text-sm px-5 py-1 text-black/90'
						/>
						<textarea
							name=''
							id=''
							placeholder='Ask Our About Services'
							className='rounded-md bg-gray-300 text-sm px-5 py-1 text-black/90'
						></textarea>

						<span className='grid gap-1'>
							<p className='font-semibold'>Hi there, how can we help?</p>
							<div className='flex gap-2'>
								{howtoknow.map((option, idx) => (
									<span key={idx} className='flex items-center gap-2'>
										<input type='radio' name='help' id={`help${idx}`} value={option} />
										<label htmlFor={`help${idx}`} className='text-sm'>
											{option.charAt(0).toUpperCase() + option.slice(1)}
										</label>
									</span>
								))}
							</div>
						</span>

						<button className='bg-primary text-white px-4 rounded-md w-fit'>
							<small>Send</small>
						</button>
					</div>

					{/* MAPS */}
					<div className='flex-1'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.807639!2d103.793557!3d1.2762578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b27c7a1b85f%3A0xd6085c5205635a1c!2sCoding%20Collective!5e0!3m2!1sen!2s!4v1625097600000!5m2!1sen!2s'
							width='100%'
							height='500'
							style={{ border: 0 }}
							allowFullScreen={true}
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
							className='rounded-md shadow-md'
						></iframe>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
