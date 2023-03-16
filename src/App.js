import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReviewPage from './components/Reviewpage'

import './assets/styles/App.scss';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/reviews" element={<ReviewPage />} />
      </Routes>
    </Router>
  );
}

export default App;
