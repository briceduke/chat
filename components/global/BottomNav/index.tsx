import React, { ReactElement } from 'react';

interface Props {}

export default function BottomNav({}: Props): ReactElement {
	return (
		<div className="bg-dark w-bnav h-10vh bottom-bnavb fixed rounded-xl"></div>
	);
}
