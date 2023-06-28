import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Projects from './Component/Projects';
import Me from './Component/Me';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/me" element={<Me />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
