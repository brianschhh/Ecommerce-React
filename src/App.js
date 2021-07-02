import React from "react";
import { CartProvider } from "./CartContex";
// COMPONENTS
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
//VIEWS
import Electronics from "./views/Electronics/Electronics";
import Home from "./views/Home/Home";
import Jewelery from "./views/Jewelery/Jewelery";
import MenCloth from "./views/MenCloth/MenCloth";
import WomenCloth from "./views/WomenCloth/WomenCloth";
import ItemDetail from "./views/ItemDetail/ItemDetail";
import Cart from "./views/Cart/Cart";

// REACT-ROUTER-DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Header />
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/electronics" component={Electronics} />
            <Route path="/jewelery" component={Jewelery} />
            <Route path="/MenCloth" component={MenCloth} />
            <Route path="/womencloth" component={WomenCloth} />
            <Route path="/detail/:id" component={ItemDetail} />
            <Route path="/Cart" component={Cart} />
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
