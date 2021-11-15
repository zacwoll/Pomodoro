import React from 'react';
import './App.css';
import { NavBar } from './features/navbar/NavBar';
import { Hero } from './features/hero/Hero';
import { Wiki } from './features/wiki/Wiki';
import { Footer } from './features/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Wiki />
      <Footer />
    </div>
  );
}

export default App;
