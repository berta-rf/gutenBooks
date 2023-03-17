import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReviewPage from './components/Reviewpage'
import Homepage from './components/Homepage';
// import Reader from './components/Reader';
// import SearchBook from './components/SearchBook';

import './assets/styles/App.scss';


function App() {

  return (<>

    <Router>

     <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path="/reviews" element={<ReviewPage />} />

        {/* <Route path="/reader" element={<Reader />} /> */}
      </Routes>
    </Router>
  
    </>);
}

export default App;
