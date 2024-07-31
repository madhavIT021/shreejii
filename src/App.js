import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Midsection from './components/Midsection';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
// import AgrochemicalProducts from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Midsection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products' element={<Products />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;