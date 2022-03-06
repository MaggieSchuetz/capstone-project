// import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import GlobalStyle from './globalStyles';
import Header from './components/Header';
import EntryList from './components/EntryList';
import JournalEntries from './data/JournalEntries';
import Form from './components/Form';

function App() {
  const [entryContent, setEntryContent] = useState(JournalEntries);
  const addJournalEntry = newEntry => {
    newEntry.id = uuidv4();
    setEntryContent([newEntry, ...entryContent]);
  };

  return (
    <>
      <GlobalStyle />
      <Header text="Travel App" />
      <div className="AppContainer">
        <Form handleAdd={addJournalEntry} />
        <EntryList content={entryContent} />
      </div>
    </>
  );
}

export default App;
