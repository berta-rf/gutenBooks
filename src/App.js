import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/styles/App.scss";

//components
// import SearchBook from "./components/Pages/SearchBook";
import Navigation from "./components/Navigation";

// import Reader from './components/Reader';

//pages
import Home from "./components/Pages/Home";
import Bookshelf from "./components/Pages/Bookshelf";
// import Homepage from "./components/Pages/Homepage";
import Reviewpage from "./components/Pages/Reviewpage";

function App() {
  return (
    <div>
      {/* <Navigation /> */}
      <Navigation />
    </div>
  );
}

export default App;
