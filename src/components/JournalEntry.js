import React from 'react';
import Card from './shared/Card';
import Gallery from './Gallery';
import styled from 'styled-components';
import { FaTrashAlt as DeleteIcon, FaEdit as EditIcon } from 'react-icons/fa';

function JournalEntry({
  item,
  handleDelete,
  editJournalEntry,
  galleryContent,
}) {
  const title = item.title;
  console.log(galleryContent);
  const filteredGallery = galleryContent.filter(object =>
    object.tags.join().includes(title)
  );
  return (
    <Card>
      <Date>{item.date}</Date>
      <h2>{item.title}</h2>
      <p>{item.text}</p>
      <Ul>
        {item.tags.map((tag, index) => (
          <li className="tag" aria-label="tag" key={index}>
            {tag}
          </li>
        ))}
      </Ul>
      <Gallery galleryContent={filteredGallery} title={item.title} />
      <IconButton
        type="button"
        alt="delete"
        className="delete"
        aria-label="deleteJournalEntry"
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        <DeleteIcon size={20} alt="delete" />
      </IconButton>
      <IconButton
        type="button"
        className="edit"
        aria-label="editJournalEntry"
        onClick={() => {
          editJournalEntry(item);
        }}
      >
        <EditIcon size={22} alt="edit" />
      </IconButton>
    </Card>
  );
}

const Date = styled.p`
  color: gray;
  position: absolute;
  top: 10px;
  right: 20px;
`;

const IconButton = styled.button`
  height: fit-content;
  width: fit-content;
  color: palevioletred;
  background-color: inherit;
  border: none;
  position: absolute;
  bottom: 15px;
  right: 20px;

  &.edit {
    right: 55px;
    color: cadetblue;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  > * {
    margin: 10px;
    background-color: cadetblue;
    color: snow;
    padding: 5px 10px;
    border-radius: 10px;
    height: fit-content;
  }
`;

export default JournalEntry;
