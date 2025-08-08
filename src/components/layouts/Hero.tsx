const Hero = () => {
	return (
		<section className='flex items-center justify-between h-screen'>
			<div className='flex flex-col items-start justify-center lg:px-28 px-10'>
				<h1>
					Where Code Meets <br />
					<span className='bg-primary text-white px-2'>Creativity</span>
				</h1>
				<p>
					Harnessing the power of our Coding Collective to build solutions for your business needs.
				</p>

				<button className='bg-primary text-white px-4 py-2 rounded mt-4 cursor-pointer'>
					<small className='font-semibold'>Get a free consult</small>
				</button>
			</div>

			<p>Your partner in innovative solutions.</p>
		</section>
	);
};

export default Hero;
