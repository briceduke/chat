import React, { ReactElement } from 'react';

interface Props {
	children: React.ReactNode;
}

export default function BtnPrimary(props: Props): ReactElement {
	return (
		<button
			className="border-primary border-2 py-2 px-4 rounded-xl text-bg bg-primary"
			{...props}
		>
			{props.children}
		</button>
	);
}
