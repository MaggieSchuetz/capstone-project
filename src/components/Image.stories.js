import Image from './Image.js';

export default {
  title: 'components/Image',
  component: Image,
};

const Template = args => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: {
    url: 'https://res.cloudinary.com/maggie-schuetz/image/upload/v1647947490/Trekking%20in%20Bukit%20Lawang/ayzz5n6ty07at3okmfjc.jpg',
    tags: ['Trekking in Bukit Lawang'],
  },
};
