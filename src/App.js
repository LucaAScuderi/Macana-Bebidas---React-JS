import {HomeView} from './components/HomeView/HomeView'
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {Poke} from './ejemplos/Poke/Poke'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  
  return (
    <>
      <NavBar brand="Macana Bebidas"/>
      <Poke />
      <ItemListContainer />
      
    </>
  );
}

export default App;
