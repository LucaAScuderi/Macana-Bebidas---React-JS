import {HomeView} from './components/HomeView/HomeView'
import {NavBar} from './components/NavBar/NavBar'
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import {Poke} from './ejemplos/Poke/Poke'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';






function App() {

  
  return (
    <>

    <BrowserRouter>
      <NavBar brand="Macana Bebidas"/>
        
      {/*  */}

      <Switch>
        <Route exact path="/">
          <ItemListContainer /> 
        </Route>

        <Route exact path="/productos/">
          <ItemListContainer /> 
        </Route>

        <Route exact path="/contacto">
          <h1>Contacto</h1>
        </Route>

        <Route  path="/cart">
          <h1>Carrito</h1>
        </Route>

      </Switch>
    </BrowserRouter>
    
    
      
    </>
  );
}

export default App; 
