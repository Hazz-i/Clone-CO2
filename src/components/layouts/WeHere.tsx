type Props = {
	img_url: string;
	content: string;
};

const WeHere = ({ img_url, content }: Props) => {
	const handleWhatsAppClick = () => {
		window.open(
			'https://api.whatsapp.com/send/?phone=6581181595&text=Hi+Co2%2C+I+would+like+ask+about+your+services.&type=phone_number&app_absent=0',
			'_blank'
		);
	};

	return (
		<section className='lg:mx-28 mx-10 md:h-screen flex items-center md:my-0 my-20'>
			<div className='md:flex items-center'>
				<div className='lg:h-96 bg-gray-100 lg:mr-14 mr-10 lg:w-4'></div>
				<div className='lg:flex md:flex-row rounded-xl shadow-xl flex flex-col items-center'>
					<img
						src={img_url}
						alt=''
						className='object-cover md:w-96 h-96 w-full md:rounded-s-xl md:rounded-e-none rounded-t-xl'
					/>

					<div className='flex flex-col gap-5 xl:px-20 lg:px-10 md::p-0 p-10'>
						<h3 className='font-extrabold text-3xl'>We're Here For You</h3>
						<h6 className='lg:text-xl text-base'>{content}</h6>
						<button
							className='flex items-center self-start bg-yellow-300 text-black rounded-md py-2 px-4 shadow-md hover:bg-yellow-400 transition-colors cursor-pointer'
							onClick={handleWhatsAppClick}
						>
							Get a Free Quote
							<i className='bx bx-right-arrow-alt ml-2'></i>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WeHere;
