import React from 'react';
import Card from './shared/Card';

function JournalEntry({ item }) {
  return (
    <Card>
      <div className="text-display">
        <p>{item.date}</p>
        <h2>{item.title}</h2>
        <p>{item.text}</p>
      </div>
    </Card>
  );
}

export default JournalEntry;
