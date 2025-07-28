import React from 'react';
import BirthdayMessage from './components/BirthdayMessage';
import Surprise from './components/Surprise';
import Footer from './components/Footer';
import './App.css';
import '@fontsource/dancing-script';


function App() {
  return (
    <div className="app-container">
      <BirthdayMessage />
      <Surprise />
      <Footer />
    </div>
  );
}

export default App;
