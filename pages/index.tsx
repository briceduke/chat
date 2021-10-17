import React from 'react';

import BtnPrimary from '../components/button/Primary';
import BtnSecondary from '../components/button/Secondary';
import { Layout } from '../components/global/Layout';

const Home = () => {
	return (
		<Layout title="Home">
			<div className="h-screen flex justify-center items-center">
				<div className="mr-2">
					<BtnPrimary>Register</BtnPrimary>
				</div>
				<BtnSecondary>Login</BtnSecondary>
			</div>
			<div className="h-full bg-primary">Hey!</div>
		</Layout>
	);
};

export default Home;
