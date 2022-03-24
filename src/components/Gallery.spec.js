import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

describe('Gallery_expandButton', () => {
  it('renders an expand button in the gallery', () => {
    render(<Gallery galleryContent={galleryContent} />);
    const expandButton = screen.getByLabelText('expandGallery');

    expect(expandButton).toBeInTheDocument();
  });
});

describe('Gallery_expand_functionality', () => {
  it('expands the gallery when the button is clicked', () => {
    const galleryState = 'normal';
    render(
      <Gallery galleryContent={galleryContent} galleryState={galleryState} />
    );
    const img = screen.getByRole('img');
    const expandButton = screen.getByLabelText('expandGallery');
    userEvent.click(expandButton);
    expect(img).toHaveClass('large');
  });
});
