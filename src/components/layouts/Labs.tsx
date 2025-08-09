type Props = {
	img_url: string;
	content: string;
};

const Labs = ({ img_url, content }: Props) => {
	return (
		<section className='bg-primary lg:px-28 px-10 lg:h-screen flex flex-col justify-center gap-5 lg:py-0 py-10'>
			<div className='flex flex-col'>
				<h1
					className='sm:text-9xl text-8xl aos-init aos-animate font-orbitron font-bold text-white/50 lg:-mb-[3.6rem] -mb-[2.5rem]'
					data-aos='fade-up'
				>
					C02
				</h1>
				<h1
					className='sm:text-center lg:text-left text-white sm:mx-0 mx-10 text-3xl lg:text-5xl font-bold font-orbitron'
					data-aos='fade-up'
				>
					C02 LABS
				</h1>
			</div>

			<div className='flex lg:flex-row flex-col justify-between items-center py-10'>
				<div className='bg-linear-to-b from-white/20 to-transparent rounded-lg flex items-end justify-center md:w-[500px] w-full px-20 py-10'>
					<img src={img_url} alt='' data-aos='fade-up' />
				</div>
				<h6
					className='lg:text-end lg:w-1/2 text-center font-semobold text-lg text-white'
					data-aos='fade-up'
				>
					{content}
				</h6>
			</div>
		</section>
	);
};

export default Labs;
