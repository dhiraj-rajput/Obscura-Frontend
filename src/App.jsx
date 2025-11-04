import { useState } from 'react';
import Navigation from './components/Navigation';
import IntroPage from './pages/IntroPage';
import EncryptPage from './pages/EncryptPage';
import DecryptPage from './pages/DecryptPage';
import FileViewPage from './pages/FileViewPage';

function App() {
  const [currentPage, setCurrentPage] = useState('intro');
  const [viewFileId, setViewFileId] = useState('');

  return (
    <div className="min-h-screen bg-black">
      <Navigation 
        currentPage={currentPage === 'file-view' ? 'intro' : currentPage} 
        onNavigate={(page) => {
          setCurrentPage(page);
          setViewFileId('');
        }} 
      />

      {currentPage === 'intro' && <IntroPage onNavigate={setCurrentPage} />}
      {currentPage === 'encrypt' && <EncryptPage onFileEncrypted={(fileId) => {
        setViewFileId(fileId);
        setCurrentPage('file-view');
      }} />}
      {currentPage === 'decrypt' && <DecryptPage />}
      {currentPage === 'file-view' && <FileViewPage fileId={viewFileId} />}
    </div>
  );
}

export default App;
