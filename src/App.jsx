import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

// Lazy load pages for performance
const IntroPage = lazy(() => import('./pages/IntroPage'));
const EncryptPage = lazy(() => import('./pages/EncryptPage'));
const DecryptPage = lazy(() => import('./pages/DecryptPage'));
const FileViewPage = lazy(() => import('./pages/FileViewPage'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
      <p className="text-cyan-500/50 font-mono text-sm animate-pulse">Loading Obscura...</p>
    </div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Obscura - Secure File Encryption</title>
        <meta name="description" content="Zero-knowledge file encryption using steganography. Securely encrypt files and hide keys in images." />
      </Helmet>
      <Navigation />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/encrypt" element={<EncryptPage />} />
          <Route path="/decrypt" element={<DecryptPage />} />
          <Route path="/file/:fileId" element={<FileViewPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
