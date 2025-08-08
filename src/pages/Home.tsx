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
		icon: 'bx bxs-git-merge',
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
			<section
				className='bg-primary flex items-center justify-center py-40 flex-col gap-5'
				id='services'
			>
				<h1 className='sm:text-center xl:text-left text-white sm:mx-0 mx-10'>Our Services</h1>
				<div className='flex flex-wrap gap-3 justify-center'>
					{services.map((service, index) => (
						<div
							key={index}
							className='card rounded-xl shadow-custom-drop bg-white h-96 w-72 p-7 flex flex-col items-center justify-center card-animation text-center gap-2'
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
			</section>

			{/* APPROACH */}
			<section className='xl:h-screen h-full flex flex-col items-center gap-10 mt-20' id='approach'>
				<h1 className='text-3xl font-bold'>Our Approach</h1>
				<p className='text-center max-w-2xl'>
					At our company, we believe in a collaborative approach to problem-solving. Our team works
					closely with clients to understand their unique challenges and develop tailored solutions
					that drive results.
				</p>
			</section>

			{/* ABOUT */}
			<section className='lg:h-screen flex items-center mb-40' id='about'>
				<div className='lg:ml-28 ml-10 w-full'>
					<div className='lg:flex items-center justify-between box-border lg:w-2/3'>
						<div className='lg:w-2/3 lg:mr-0 mr-10'>
							<h1 className='sm:text-5xl text-3xl sm:flex flex-col items-start aos-init aos-animate'>
								<div className='mb-4'>About Us</div>
								<span className='font-orbitron font-bold sm:text-5xl text-3xl bg-primary text-white px-5'>
									Who We Are
								</span>
							</h1>
							<h6 className='my-5 aos-init aos-animate'>
								We are a team of passionate developers and designers dedicated to creating
								innovative solutions that empower businesses to thrive in the digital age.
							</h6>
						</div>

						{/* RIGHT CONTENT */}
						<div className='flex justify-end items-center '>
							<img
								src='./src/assets/AboutUs.png'
								className='lg:w-[500px] sm:w-1/2 w-2/3 rounded-xl shadow-md aos-init aos-animate'
								alt=''
							/>
						</div>
					</div>
				</div>
			</section>

			{/* OUT TEAM */}
			<section className='lg:mx-28 lg:my-0 my-20 flex flex-col justify-center' id='team'>
				<h1 className='text-3xl font-bold text-center mb-10'>Our Team</h1>
				<p className='text-center max-w-2xl mx-auto mb-10'>
					Our team is composed of skilled professionals with diverse backgrounds and expertise, all
					working together to deliver exceptional results for our clients.
				</p>
			</section>

			{/* PORTOFOLIO */}
			<section
				className='bg-primary-500 lg:px-28 px-10 py-20 mt-20 text-bgbase'
				id='portfolio'
			></section>
		</>
	);
};

export default Home;
