type Props = {
	contents: {
		title: string;
		description: string;
	}[];
};

const Advantages = ({ contents }: Props) => {
	return (
		<section className='mt-20 mb-10 lg:mx-28 mx-5'>
			<div className='flex justify-start items-start lg:justify-center lg:items-start flex-col gap-10 lg:flex-row'>
				<div className='flex gap-2 lg:w-3/4'>
					<div className='w-1.5 bg-black lg:hidden'></div>
					<h2 className='font-orbitron text-4xl font-semibold'>
						OUR <br /> ADVANTAGES
					</h2>
				</div>

				<div className='lg:col lg:col-right'>
					{contents.map((item, index) => (
						<div key={index} className='items mb-5'>
							<div className='flex items-center gap-10 mb-4'>
								<div className='rounded-full sm:-ml-2 -ml-1 bg-gray-400 sm:w-5 w-1 sm:h-5 h-1 sm:p-0 p-2'></div>
								<h3 className='font-extrabold text-3xl'>{item.title}</h3>
							</div>

							<div className='flex gap-10'>
								<div className='bg-gray-400 w-1'></div>
								<div className='bg-white shadow-xl p-5 rounded-lg font-bold'>
									{item.description}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Advantages;
