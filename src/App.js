import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from "./components/Navigation";
import ReviewPage from './components/Reviewpage';
import Bookshelf from "./components/Pages/Bookshelf";
import SearchBook from './components/SearchBook';

import "./assets/styles/App.scss";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Navigation />}>
            <Route path="/" element={<SearchBook />} />
            <Route path="/Bookshelf" element={<Bookshelf />} />
            <Route path="/Review" element={<ReviewPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;