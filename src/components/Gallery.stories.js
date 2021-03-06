import Gallery from './Gallery.js';

export default {
  title: 'components/Gallery',
  component: Gallery,
};

const Template = args => <Gallery {...args} />;

export const Default = Template.bind({});
Default.args = {
  galleryContent: [
    {
      url: 'https://res.cloudinary.com/maggie-schuetz/image/upload/v1647947854/On%20the%20road%20to%20Mandalay/hczgxom6jkvgfdnan6if.jpg',
      tags: ['On the road to Mandalay'],
    },
  ],
};
