import React from "react";

import Header from "./components/Main/Header";
import Footer from "./components/Main/Footer";

import Home from "./components/Home";
import Men from "./components/Men_Section";
import Women from "./components/Women_Section";
import Cap from "./components/Caps_Section";
import Cup from "./components/Cups_Section";
import MobileCovers from "./components/MobileCovers_Section";
import Cart from "./components/Cart/Cart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/men_section" component={Men} />
          <Route path="/women_section" component={Women} />
          <Route path="/cap_section" component={Cap} />
          <Route path="/cup_section" component={Cup} />
          <Route path="/mobileCovers_section" component={MobileCovers} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}
