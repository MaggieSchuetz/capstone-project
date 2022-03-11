import React from 'react';
import JournalEntry from './JournalEntry';

function EntryList({ content, handleDelete, editEntry }) {
  if (!content || content.length === 0) {
    return <p>You don't have any journal entries yet.</p>;
  }
  return (
    <div>
      {content.map(item => (
        <JournalEntry
          key={item.id}
          item={item}
          handleDelete={handleDelete}
          editEntry={editEntry}
        />
      ))}
    </div>
  );
}

export default EntryList;
