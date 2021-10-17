import Head from 'next/head';
import React from 'react';

interface Props {
	description?: string;
	title: string;
	children: React.ReactNode;
}

const siteName = 'Chat';

export const Layout = ({ description = '', title, children }: Props) => {
	return (
		<div>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content={description} />
				<meta
					property="og:image"
					content={`/assets/previews/${title.toLowerCase()}.png`}
				/>
				<meta name="og:title" content={`${siteName} | ${title}`} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<main>{children}</main>
		</div>
	);
};
