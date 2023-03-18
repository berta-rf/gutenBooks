import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReviewPage from './components/Reviewpage'
import SearchBook from './components/SearchBook';
// import Reader from './components/Reader';

import './assets/styles/App.scss';

//components
import Navigation from "./components/Navigation";

//pages
//import Homepage from "./components/Homepage";
import Bookshelf from "./components/Pages/Bookshelf";
import Reviewpage from "./components/Pages/Reviewpage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Navigation />}>
            <Route path="/" element={<SearchBook />} />
            <Route path="/Bookshelf" element={<Bookshelf />} />
            <Route path="/Review" element={<Reviewpage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
