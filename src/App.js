import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/styles/App.scss";

//components
import Navigation from "./components/Navigation";

// import Reader from './components/Reader';

//pages
import Homepage from "./components/Homepage";
import Bookshelf from "./components/Pages/Bookshelf";
import Reviewpage from "./components/Pages/Reviewpage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Navigation />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/Bookshelf" element={<Bookshelf />} />
            <Route path="/Review" element={<Reviewpage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
