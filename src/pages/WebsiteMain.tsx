import Hero from '../components/layouts/Hero';
import Labs from '../components/layouts/Labs';
import Advantages from '../components/layouts/Advantages';
import WeHere from '../components/layouts/WeHere';

const WebsiteMain = () => {
	return (
		<>
			<Hero
				title='Website Maintenance'
				subtitle='Comprehensive Website Maintenance Services (WAMS)'
				img_url='https://labsco2.com/images/1.png'
			/>

			<Labs
				img_url='https://labsco2.com/images/toolbox.png'
				content='Your website is a vital part of your business, and keeping it in top shape is essential. CO2 Labs offers reliable website maintenance solutions to ensure your site remains secure, up-to-date, and performing at its best.'
			/>

			<Advantages
				contents={[
					{
						title: 'Regular Updates',
						description:
							' We keep your website up to date with the latest software and plugin updates to ensure compatibility and security.',
					},
					{
						title: 'Security Monitoring',
						description:
							'Our team monitors your site 24/7 to detect and prevent any security threats, protecting your data and reputation.',
					},
					{
						title: 'Performance Optimization',
						description:
							'We regularly analyze and optimize your site’s performance to ensure fast loading times and a seamless user experience.',
					},
					{
						title: 'Content Management',
						description:
							'Need to update content or add new features? Our team is here to help with timely content updates and enhancements.',
					}
				]}
			/>

			<WeHere
				img_url='https://labsco2.com/images/cta1.png'
				content='Partner with CO2 Labs for reliable website maintenance and enjoy peace of mind knowing
							your site is in expert hands. Contact us today to learn more about our services.'
			/>
		</>
	);
};

export default WebsiteMain;
