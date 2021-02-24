import React, { useEffect, useState } from 'react';
import './App.css';
import ItemGallery from "./components/ItemGallery"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Service from "./components/Service"

export default function App() {

  const [items, setItems] = useState([]);

  useEffect(() => {  
    new Service().fetchItems().then(o => {
        console.log("items length:", o.length);
        setItems(o);
    });
  }, []);


  return (
    <div className="App">
      <Header />
      <ItemGallery items={items} />
      <Footer />
    </div>
  );
}
