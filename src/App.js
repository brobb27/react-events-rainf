import React from 'react'
import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

function App() {
  return (
    <div id="webPage">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
