import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ReviewPage from './components/Reviewpage'
// import Reader from './components/Reader';

import SearchBook from './components/SearchBook';

import './assets/styles/App.scss';

function App() {

  return (<>

    <SearchBook />

    {/* // <Router>
    //   <Routes>
    //     <Route path="/reviews" element={<ReviewPage />} />
    //     <Route path="/reader" element={<Reader />} />
    //   </Routes>
    // </Router> */}
  
    </>);
}

export default App;
