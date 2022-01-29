import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Home from './Screens/Home';
import Exp from './Screens/Experience';
import Contact from './Screens/Contact';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Skills" element={<Exp />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
