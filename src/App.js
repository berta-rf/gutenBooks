import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReviewPage from './components/Reviewpage'


import './assets/styles/App.scss';

import Reader from './components/Reader';


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/reader" element={<Reader />} />
      </Routes>
    </Router>
  
  );
}

export default App;
