import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar brand="Macana Bebidas" />

        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>

          <Route exact path="/productos/:categoryId">
            <ItemListContainer />
          </Route>

          <Route exact path="/detail/:itemId">
            <ItemDetailContainer />
          </Route>

          <Route exact path="/contacto">
            <h1>Contacto</h1>
          </Route>

          <Route path="/cart">
            <h1>Carrito</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
