import Advantages from '../components/layouts/Advantages';
import Hero from '../components/layouts/Hero';
import Labs from '../components/layouts/Labs';
import WeHere from '../components/layouts/WeHere';

const ITSupport = () => {
	return (
		<>
			<Hero
				title='IT Support Services'
				subtitle='Comprehensive IT Support Solutions'
				img_url='https://labsco2.com/images/3.png'
			/>

			<Labs
				img_url='https://labsco2.com/images/itsup.png'
				content='At CO2 Labs, we understand that effective IT support is crucial for your business success. Our comprehensive IT support solutions are tailored to meet the unique needs of your organization, providing you with peace of mind.'
			/>

			<Advantages
				contents={[
					{
						title: '24/7 Support',
						description:
							'Round-the-clock IT support to address any technical issues whenever they arise.',
					},
					{
						title: 'Proactive Maintenance',
						description:
							'Regular maintenance and updates to prevent problems and ensure your systems run smoothly.',
					},
					{
						title: 'IT Consulting',
						description:
							'Expert advice and strategic planning to help you make informed decisions about your IT infrastructure.',
					},
					{
						title: 'Cybersecurity Services',
						description:
							'Protect your business from cyber threats with our partner third party security solutions, including firewalls, antivirus, and threat detection.',
					},
				]}
			/>

			<WeHere
				img_url='https://labsco2.com/images/cta3.png'
				content='Trust CO2 Labs for dependable IT support that empowers your business. Reach out to us today to discover how we can support your IT needs.'
			/>
		</>
	);
};

export default ITSupport;
