import React from 'react';
import './App.css';
import ItemGallery from "./components/ItemGallery"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <ItemGallery />
      <Footer />
    </div>
  );
}

export default App;
