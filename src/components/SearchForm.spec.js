import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchForm from './SearchForm.js';

const content = [
  {
    id: 1,
    date: '12-03-2015',
    title: 'Trekking in Bukit Lawang',
    text: "After a restless night (due to the paper-thin mattress that seemed to be crawling  with bugs), it was, for once, not difficult to get out of  bed early. We drenched ourselves in DEET and double-checked whether we had everything we'd need for three days in the jungle. After about an hour, we saw a baby orangutan swinging high above our heads! It was an amazing experience.",
    tags: ['tag1', 'tag2'],
  },

  {
    id: 2,
    date: '14-07-2014',
    title:
      'How to lock yourself out of your fanny pack while being chained to it',
    text: 'Who would have thought that I would learn how to pick a lock two weeks into my trip? Somehow on the night bus, I managed to unlock the small lock on my fanny pack, unintentionally change the code, and lock ALL MY VALUABLES (including my phone) INSIDE it, which also meant that I could not take it off. Thankfully, I still had my tablet and someone was kind enough to allow me to use their wifi to look up videos on how to pick these kinds of locks. It is surprisingly easy, which does not bode well for future hostel stays, but I was grateful for it in that moment.',
    tags: ['tag5', 'tag2'],
  },

  {
    id: 3,
    date: '08-11-2016',
    title: 'On the road to Mandalay',
    text: 'There were only two hostels in the city, and somehow I managed to choose the one no one else on my flight was staying in. I shared a taxi with the others, but once we got downtown, I was on my own. I decided to start walking towards the other edge of town until I could figure out what to do, when suddenly a car pulled up next to me...',
    tags: ['tag1', 'tag2'],
  },
];

const filteredGallery = [
  {
    url: 'https://res.cloudinary.com/maggie-schuetz/image/upload/v1647947854/On%20the%20road%20to%20Mandalay/hczgxom6jkvgfdnan6if.jpg',
    tags: ['On the road to Mandalay'],
  },
];

describe('SearchForm', () => {
  it('renders the search form', () => {
    render(<SearchForm content={content} galleryContent={filteredGallery} />);
    const searchField = screen.getByLabelText('Search Tags:');

    expect(searchField).toBeInTheDocument();
  });
});

describe('SearchForm_match', () => {
  it('renders journal entries with tags that match the search', () => {
    const onChange = jest.fn();
    render(
      <SearchForm
        content={content}
        onChange={onChange}
        galleryContent={filteredGallery}
      />
    );
    const searchField = screen.getByLabelText('Search Tags:');
    userEvent.type(searchField, 'tag1');

    const journalEntry = screen.getByText('Trekking in Bukit Lawang');
    expect(journalEntry).toBeInTheDocument();
  });
});

describe('SearchForm_noMatch', () => {
  it('renders a message that no tags match the search', () => {
    render(<SearchForm content={content} galleryContent={filteredGallery} />);
    const searchField = screen.getByLabelText('Search Tags:');
    userEvent.type(searchField, 'asdfgh');
    const message = screen.getByText(
      'Sorry, there are no tags that match your search.'
    );
    expect(message).toBeInTheDocument();
  });
});
