import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";

// Import page components
import Home from "./components/Home";
import Features from "./components/Features";
import Demo from "./components/Demo";

const App = () => {
  return (
    <Router>
      <div>
        <Header title="Remote Application" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/features" component={Features} />
          <Route path="/demo" component={Demo} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
