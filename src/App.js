import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; 
import Home from './Components/Home';
import About from './Components/About'; 
import Movie from './Components/Movie';

function App() {
  const mtitle = "Movies";
  return (
    <Router>
      <Navbar title={mtitle} />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Movie/:id" element={<Movie/>} />
      </Routes>
    </Router>
  );
}

export default App;
