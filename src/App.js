import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/App.scss";

import Navigation from "./components/Navigation";

//pages
import Home from "./components/Pages/Home";
import Bookshelf from "./components/Pages/Bookshelf";
import Reviewpage from "./components/Pages/Reviewpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Bookshelf" element={<Bookshelf />} />
          <Route path="/Reviewpage" element={<Reviewpage />} />
        </Routes>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
