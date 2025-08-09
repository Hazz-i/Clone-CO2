import { useEffect } from 'react';

type Props = {
	title: string;
	subtitle: string;
	img_url: string;
};

const Hero = ({ title, subtitle, img_url }: Props) => {
	// Scroll to top when route changes
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<section className='h-screen flex justify-between items-center lg:mb-0 mb-20'>
			<div className='lg:ml-28 ml-10 w-full'>
				<div className='flex flex-col lg:flex-row items-center justify-between box-border lg:w-2/3'>
					<div className='lg:w-2/3 lg:mr-0 mr-10 lg:order-1 order-2'>
						<div className='com -mb-11 -ml-11'>
							<img src='https://labsco2.com/images/com.png' alt='' />
						</div>
						<h1 className='sm:text-5xl text-3xl sm:flex flex-col items-start' data-aos='fade-right'>
							<div className='mb-4 font-orbitron font-bold'>{title} </div>
						</h1>
						<h6 className='my-5 font-semibold' data-aos='fade-right'>
							“{subtitle}”
						</h6>

						<button className='bg-primary text-white w-[10rem] h-1 rounded cursor-pointer'></button>
					</div>

					{/* RIGHT CONTENT */}
					<div className='lg:order-2 flex justify-end items-center order-1'>
						<img
							src={img_url}
							className='lg:w-96 sm:w-1/2 w-2/3 absolute md:right-40 right-20 rounded-xl shadow-md'
							data-aos='fade-left'
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
	);
};

export default Hero;
