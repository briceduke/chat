import Head from 'next/head';
import React from 'react';

import BottomNav from '../BottomNav';

interface Props {
	description?: string;
	title: string;
	children: React.ReactNode;
}

const siteName = 'Chat';

export const Layout = ({ description = '', title, children }: Props) => {
	return (
		<div className="bg-transparent">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content={description} />
				<meta
					property="og:image"
					content={`/assets/previews/${title.toLowerCase()}.png`}
				/>
				<meta name="og:title" content={`${siteName} | ${title}`} />
				<meta name="twitter:card" content="summary_large_image" />
				<title>{`${siteName} | ${title}`}</title>
			</Head>
			<main className="h-screen">
				<div className="h-screen pb-10vh overflow-scroll bg-bg">{children}</div>
				<div className="w-screen flex justify-center">
					<BottomNav />
				</div>
			</main>
		</div>
	);
};
