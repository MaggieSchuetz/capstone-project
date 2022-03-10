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
  const deleteEntry = id => {
    if (window.confirm('Are you sure you want to delete this journal entry?')) {
      setEntryContent(entryContent.filter(item => item.id !== id));
    }
  };

  const [entryEdit, setEntryEdit] = useState({
    item: {},
    edit: false,
  });

  const editEntry = item => {
    setEntryEdit({
      item,
      edit: true,
    });
  };

  return (
    <>
      <GlobalStyle />
      <Header text="Travel App" />
      <div className="AppContainer">
        <Form handleAdd={addJournalEntry} entryEdit={entryEdit} />
        <EntryList
          content={entryContent}
          handleDelete={deleteEntry}
          editEntry={editEntry}
        />
      </div>
    </>
  );
}

export default App;
