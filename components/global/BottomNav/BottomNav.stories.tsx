import BottomNav from '.';

const Story = ({ children }) => <BottomNav>{children}</BottomNav>;

export const BottomNavStory = Story.bind({});
BottomNavStory.args = {
	children: 'Hey there!',
};

const storyExport = {
	title: 'Bottom Nav',
	component: BottomNav,
};

export default storyExport;
