import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import AppDesign from "./components/pages/AppDesign";
import Contact from "./components/pages/Contact";
import GraphicDesign from "./components/pages/GraphicDesign";
import Home from "./components/pages/Home";
import Location from "./components/pages/Location";
import WebDesign from "./components/pages/WebDesign";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/web-design" component={WebDesign} />
        <Route exact path="/graphic-design" component={GraphicDesign} />
        <Route exact path="/app-design" component={AppDesign} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/location" component={Location} />
      </Switch>
    </Router>
  );
}

export default App;
