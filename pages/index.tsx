import React from 'react';

import { Layout } from '../components/global/Layout';

const Home = () => {
	return (
		<Layout title="Home">
			<div className="h-screen">Hey!</div>
			<div className="h-full bg-primary">Hey!</div>
		</Layout>
	);
};

export default Home;
