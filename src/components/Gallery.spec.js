import { render, screen } from '@testing-library/react';
import Gallery from './Gallery.js';

const galleryContent = [
  {
    url: 'https://res.cloudinary.com/maggie-schuetz/image/upload/v1647947854/On%20the%20road%20to%20Mandalay/hczgxom6jkvgfdnan6if.jpg',
    tags: ['On the road to Mandalay'],
  },
];

describe('Gallery', () => {
  it('renders an image in the gallery', () => {
    render(<Gallery galleryContent={galleryContent} />);
    const img = screen.getByRole('img');

    expect(img).toBeInTheDocument();
  });
});
