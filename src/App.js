import React from "react";
// COMPONENTS
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
//VIEWS
import Electronics from "./views/Electronics/Electronics"
import Home from "./views/Home/Home";
import Jewelery from "./views/Jewelery/Jewelery"
import MenCloth from "./views/MenCloth/MenCloth"
import WomenCloth from "./views/WomenCloth/WomenCloth"
import ItemDetail from "./views/ItemDetail/ItemDetail";


// REACT-ROUTER-DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";


function App() {
  return (
    <Router>
    <div className="App__container">
      <Header />
      <Nav />
      <Switch>
        <Route path='/'  exact component={Home} />
        <Route path='/electronics' component={Electronics} />
        <Route path="/jewelery" component={Jewelery} />
        <Route path="/MenCloth" component={MenCloth} />
        <Route path='/womencloth' component={WomenCloth} />
        <Route path='/detail/:id' component={ItemDetail} />

      </Switch>
    </div>
    </Router>
  );
}

export default App;
