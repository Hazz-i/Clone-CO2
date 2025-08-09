import Hero from '../components/layouts/Hero';
import Labs from '../components/layouts/Labs';
import Advantages from '../components/layouts/Advantages';
import WeHere from '../components/layouts/WeHere';

const WebDev = () => {
	return (
		<>
			<Hero
				title='Website & App Development'
				subtitle='Innovative Website & App Development Solutions'
				img_url='https://labsco2.com/images/2.png'
			/>

			<Labs
				img_url='https://labsco2.com/images/uiux.png'
				content='CO2 Labs provides innovative website and app development solutions tailored to help your
					business thrive in the digital age. Our experienced team leverages the latest technologies
					to create dynamic and engaging digital experiences.'
			/>

			<Advantages
				contents={[
					{
						title: 'Website Design & Development',
						description:
							'Our holistic approach to web development ensures a seamless blend of aesthetics and functionality, creating a powerful online presence for your brand.',
					},
					{
						title: 'Mobile App Development',
						description:
							'We develop mobile apps that offer excellent performance, intuitive user interfaces, and robust functionality, available for both iOS and Android platforms.',
					},
					{
						title: 'E-commerce Solutions',
						description:
							'We build scalable e-commerce platforms that provide a seamless shopping experience, boosting your online sales and customer satisfaction.',
					},
					{
						title: 'UX/UI Design',
						description:
							'Our user-centric design process focuses on creating intuitive and engaging interfaces that enhance user satisfaction and loyalty.',
					},
					{
						title: 'Integration Services',
						description:
							'We seamlessly integrate third-party services and APIs to enhance the functionality of your website or app.',
					},
				]}
			/>

			<WeHere
				img_url='https://labsco2.com/images/cta2.png'
				content='Let CO2 Labs transform your digital presence with our top-tier website and app development services. Contact us to start your project today.'
			/>
		</>
	);
};

export default WebDev;
