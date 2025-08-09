import Advantages from '../components/layouts/Advantages';
import Hero from '../components/layouts/Hero';
import Labs from '../components/layouts/Labs';
import WeHere from '../components/layouts/WeHere';

const AISolution = () => {
	return (
		<>
			<Hero
				title='Third Party AI Tools'
				subtitle='Harness the Power of Third-Party AI Tools'
				img_url='https://labsco2.com/images/4.png'
			/>

			<Labs
				img_url='https://labsco2.com/images/robot.png'
				content='CO2 Labs helps you harness the power of third-party AI tools to enhance your business operations and drive innovation. Our team is skilled in integrating and customizing AI'
			/>

			<Advantages
				contents={[
					{
						title: 'AI-Powered Insights',
						description:
							'Gain actionable insights through AI-powered data analysis and visualization tools.',
					},
					{
						title: 'Machine Learning Models',
						description:
							'Implement machine learning models to predict outcomes, optimize processes, and improve decision-making.',
					},
					{
						title: 'AI-Powered Insights',
						description:
							'Round-the-clock IT support to address any technical issues whenever they arise.',
					},
					{
						title: 'Natural Language Processing',
						description:
							'Utilize NLP tools to enhance customer interactions, automate content generation, and improve communication.',
					},
					{
						title: 'AI for Marketing',
						description:
							'Boost your marketing efforts with AI-driven personalization, customer segmentation, and predictive analytics.',
					},
					{
						title: 'Automation',
						description:
							'Leverage AI to automate routine tasks, freeing up valuable time and resources for more strategic activities.',
					},
					{
						title: 'Data Analysis',
						description:
							'Use advanced AI algorithms to analyze large datasets, uncovering valuable insights and trends.',
					},
				]}
			/>

			<WeHere
				img_url='https://labsco2.com/images/cta4.png'
				content='Unlock new possibilities with third-party AI tools integrated by CO2 Labs. Contact us to explore how AI can transform your business.'
			/>
		</>
	);
};

export default AISolution;
