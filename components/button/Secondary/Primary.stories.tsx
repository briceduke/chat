import BtnSecondary from '.';

const Story = ({ children }) => <BtnSecondary>{children}</BtnSecondary>;

export const ButtonStory = Story.bind({});
ButtonStory.args = {
	children: 'Hey there!',
};

const storyExport = {
	title: 'Btn Secondary',
	component: BtnSecondary,
};

export default storyExport;
