import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// THE 5 PAGES OF THE APP
import Landing from './pages/Landing';
import Upload from './pages/Upload';
import Loading from './pages/Loading';
import Editing from './pages/Editing';
import Download from './pages/Download';

function App() {
  return (
    <Router>
      <Routes>
        {/* ung connection ng pages,,, / lang ung isa kasi yon ung home */}
        <Route path="/" element={<Landing />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/edit" element={<Editing />} />
        <Route path="/download" element={<Download />} />

        {/* pag may error or sum, babalik s alanding page */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;