import React, { ReactElement } from 'react';

interface Props {
	children: React.ReactNode;
}

export default function BtnSecondary(props: Props): ReactElement {
	return (
		<button
			className="w-30 border-primary border-2 py-2 px-4 rounded-xl text-primary"
			{...props}
		>
			{props.children}
		</button>
	);
}
