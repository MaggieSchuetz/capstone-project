import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { LocationProvider } from './context/LocationContext';

import styled from 'styled-components';

import Header from './components/Header';
import EntryList from './components/EntryList';
import Form from './components/Form';
import SearchForm from './components/SearchForm';
import Gallery from './components/Gallery';
import Map from './components/Map';
import NavBar from './components/shared/NavBar';

function App() {
  const [entryEdit, setEntryEdit] = useState({
    item: {},
    edit: false,
  });
  const [entryContent, setEntryContent] = useState([]);
  const addJournalEntry = newEntry => {
    newEntry.id = uuidv4();
    setEntryContent([newEntry, ...entryContent]);
    navigate('/journalentries');
  };
  const [galleryContent, setGalleryContent] = useState([]);
  const handlePhotoAdd = newGallery => {
    newGallery.id = uuidv4();
    setGalleryContent([...newGallery, ...galleryContent]);
  };

  const deleteEntry = id => {
    if (window.confirm('Are you sure you want to delete this journal entry?')) {
      setEntryContent(entryContent.filter(item => item.id !== id));
    }
  };

  const deleteImage = url => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      setGalleryContent(galleryContent.filter(image => image.url !== url));
    }
  };

  //** */
  // const itemLocations = content.map(item => item.location);
  // console.log(itemLocations);
  //** */
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

  useEffect(() => {
    const entryContent = JSON.parse(localStorage.getItem('entryContent'));
    if (entryContent) {
      setEntryContent(entryContent);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('entryContent', JSON.stringify(entryContent));
  }, [entryContent]);

  useEffect(() => {
    const galleryContent = JSON.parse(localStorage.getItem('galleryContent'));
    if (galleryContent) {
      setGalleryContent(galleryContent);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('galleryContent', JSON.stringify(galleryContent));
  }, [galleryContent]);

  return (
    <LocationProvider>
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
                  entryContent={entryContent}
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
                  galleryContent={galleryContent}
                  deleteImage={deleteImage}
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
                  galleryContent={galleryContent}
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
          <Route
            exact
            path="/map"
            element={
              <>
                <Map
                  content={entryContent}
                  handleDelete={deleteEntry}
                  editJournalEntry={editJournalEntry}
                  galleryContent={galleryContent}
                />
              </>
            }
          />
        </Routes>

        <NavBar setEntryEdit={setEntryEdit} />
      </AppContainer>{' '}
    </LocationProvider>
  );
}

export default App;

const AppContainer = styled.div``;
