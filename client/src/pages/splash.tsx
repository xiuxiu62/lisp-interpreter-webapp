import React from 'react';
import { Grid, Center, Heading } from '@chakra-ui/react';
import { ComponentGridItem, Navigator } from './components';

const Title = () => (
	<Center>
		<Heading as="h1" size="4xl" margin="1rem">
			Splash page
		</Heading>
	</Center>
);

const About = (): React.ReactElement => (
	<Grid
		templateRows="repeat(4, 1fr)"
		templateColumns="repeat(5, 1fr)"
		margin="0.5rem"
		gap="1rem"
	>
		<ComponentGridItem r={4} c={1} />
		<ComponentGridItem r={1} c={3} component={<Title />} />
		<ComponentGridItem r={1} c={1} component={<Navigator />} />
		<ComponentGridItem r={3} c={3} />
		<ComponentGridItem r={3} c={1} />
	</Grid>
);

export default About;
