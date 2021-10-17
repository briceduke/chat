import React, { ReactElement } from 'react';

interface Props {
	children: React.ReactNode;
}

export default function BtnPrimary({ children }: Props): ReactElement {
	return (
		<button className="w-30 bg-blue-600 py-2 px-4 rounded-xl text-white">
			{children}
		</button>
	);
}
