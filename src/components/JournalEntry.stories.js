import JournalEntry from './JournalEntry.js';

export default {
  title: 'components/JournalEntry',
  component: JournalEntry,
};

const Template = args => <JournalEntry {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    date: '2022-03-07',
    title: 'Working on Storybook',
    text: 'Writing tests',
  },
};
