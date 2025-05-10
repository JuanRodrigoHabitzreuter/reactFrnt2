import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterOwner from './RegisterOwner';
import OccupiedSpace from './OccupiedSpaces';
import FreeSpace from './FreeSpaces';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register-owner" element={<RegisterOwner />} />
        <Route path="/edit-owner/:placa" element={<RegisterOwner />} />
        <Route path="/occupied-spaces" element={<OccupiedSpace />} />
        <Route path="/free-spaces" element={<FreeSpace />} />
        <Route path="/" element={<OccupiedSpace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

