import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Trending from "./pages/Trending/Trending";
import Transaction from "../src/pages/Transaction/Transaction";
import ToggledNav from "./components/ToggledNav/ToggledNav";

function App() {
  return (
    <div className="app-container">
      <ToggledNav />
      <div className="app">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/trending">
            <Trending />
          </Route>
          <Route path="/transaction">
            <Transaction />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
