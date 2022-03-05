// import './App.css';
import { useState } from 'react';
import GlobalStyle from './globalStyles';
import Header from './components/Header';
import EntryList from './components/EntryList';
import JournalEntries from './data/JournalEntries';
import Form from './components/Form';

function App() {
  const [entryContent, setEntryContent] = useState(JournalEntries);
  return (
    <>
      <GlobalStyle />
      <Header text="Travel App" />
      <div className="AppContainer">
        <Form />
        <EntryList content={entryContent} />
      </div>
    </>
  );
}

export default App;
