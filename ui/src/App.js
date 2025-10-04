import React from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import Header from './components/header';
import Footer from './components/footer';
import { SignUp } from './features/session/SignUp';
import { Items } from './features/items/Items';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Items />} />
          <Route path="*" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
