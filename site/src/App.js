import React, { useState, Fragment } from 'react';
import './App.css';
import ItemGallery from "./components/ItemGallery"
import Header from "./components/Header"
import Footer from "./components/Footer"
import {ItemsContextProvider} from "./state/context";



export default function App() {

  return (
    <Fragment>
      <Header />
      <ItemsContextProvider>
        <ItemGallery />
      </ItemsContextProvider>
      <Footer />
    </Fragment>
  );
}
