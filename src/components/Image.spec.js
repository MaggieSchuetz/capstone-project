import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Image from './Image.js';

const filteredGallery = [
  {
    url: 'https://res.cloudinary.com/maggie-schuetz/image/upload/v1647947854/On%20the%20road%20to%20Mandalay/hczgxom6jkvgfdnan6if.jpg',
    tags: ['On the road to Mandalay'],
  },
];

describe('Image', () => {
  it('renders a default Image', () => {
    render(
      <Image src={filteredGallery.url} galleryContent={filteredGallery} />
    );

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
  });
});

describe('Image_deleteButton', () => {
  it('renders a delete button on the image', () => {
    render(
      <Image src={filteredGallery.url} galleryContent={filteredGallery} />
    );
    const deleteButton = screen.getByRole('button');

    expect(deleteButton).toBeInTheDocument();
  });
});

describe('Image_delete', () => {
  it('deletes an image when deleteButton is clicked', () => {
    const deleteImage = jest.fn();
    render(
      <Image
        src={filteredGallery.url}
        galleryContent={filteredGallery}
        deleteImage={deleteImage}
      />
    );
    const deleteButton = screen.getByRole('button');
    userEvent.click(deleteButton);
    expect(deleteImage).toHaveBeenCalled();
  });
});
