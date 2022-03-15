import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import Header from './components/Header';
import EntryList from './components/EntryList';
import JournalEntries from './data/JournalEntries';
import Form from './components/Form';
import NavBar from './components/shared/NavBar';

function App() {
  const [entryEdit, setEntryEdit] = useState({
    item: {},
    edit: false,
  });

  const [entryContent, setEntryContent] = useState(JournalEntries);
  const addJournalEntry = newEntry => {
    newEntry.id = uuidv4();
    setEntryContent([newEntry, ...entryContent]);
    setEntryEdit({
      item: {},
      edit: true,
    });
    navigate('/journalentries');
  };
  const deleteEntry = id => {
    if (window.confirm('Are you sure you want to delete this journal entry?')) {
      setEntryContent(entryContent.filter(item => item.id !== id));
    }
  };

  const navigate = useNavigate();

  const editJournalEntry = item => {
    setEntryEdit({
      item,
      edit: true,
    });
    navigate('/newentry');
  };

  const updateContent = (id, updItem) => {
    setEntryContent(
      entryContent.map(item =>
        item.id === id ? { ...item, ...updItem } : item
      )
    );

    navigate('/journalentries');
  };

  return (
    <AppContainer>
      <Header text="Travel Log" />
      <Routes>
        <Route
          exact
          path="/newentry"
          element={
            <>
              <Form
                handleAdd={addJournalEntry}
                entryEdit={entryEdit}
                updateContent={updateContent}
                setEntryEdit={setEntryEdit}
              />
            </>
          }
        />
        <Route
          exact
          path="/journalentries"
          element={
            <>
              <EntryList
                content={entryContent}
                handleDelete={deleteEntry}
                editJournalEntry={editJournalEntry}
              />
            </>
          }
        />
      </Routes>
      <NavBar />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
`;
