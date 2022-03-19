import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import Header from './components/Header';
import EntryList from './components/EntryList';
import JournalEntries from './data/JournalEntries';
import GalleryEntries from './data/GalleryEntries';
import Form from './components/Form';
import SearchForm from './components/SearchForm';
import Gallery from './components/Gallery';
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
    // setEntryEdit({
    //   item: {},
    //   edit: true,
    // });
    navigate('/journalentries');
  };
  const [galleryContent, setGalleryContent] = useState(GalleryEntries);
  const handlePhotoAdd = newGallery => {
    newGallery.id = uuidv4();
    setGalleryContent([newGallery, ...galleryContent]);
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
        <Route path="*" element={<Navigate to="/newEntry" replace />} />
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
                handlePhotoAdd={handlePhotoAdd}
              />
            </>
          }
        />
        <Route
          exact
          path="/journalEntries"
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
        <Route
          exact
          path="/searchTags"
          element={
            <>
              <SearchForm
                content={entryContent}
                handleDelete={deleteEntry}
                editJournalEntry={editJournalEntry}
              />
            </>
          }
        />
        <Route
          exact
          path="/gallery"
          element={
            <>
              <Gallery galleryContent={galleryContent} />
            </>
          }
        />
      </Routes>
      <NavBar setEntryEdit={setEntryEdit} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div``;
