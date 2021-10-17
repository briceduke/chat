import BtnPrimary from '.';

const Story = ({ children }) => <BtnPrimary>{children}</BtnPrimary>;

export const ButtonStory = Story.bind({});
ButtonStory.args = {
	children: 'Hey there!',
};

const storyExport = {
	title: 'Btn Primary',
	component: BtnPrimary,
};

export default storyExport;
