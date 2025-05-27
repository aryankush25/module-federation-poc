import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

// Import page components
import Home from "./components/Home";
import About from "./components/About";
import Counter from "./components/Counter";
import OrderDetail from "./components/OrderDetail";

// Dynamically import the remote header component using React.lazy
const RemoteHeader = React.lazy(() => import("remote/Header"));
const RemoteDemo = React.lazy(() => import("remote/Demo"));

const RemoteDemoComponent = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading Remote Demo...</div>}>
        <RemoteDemo />
      </Suspense>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Only show header on routes other than order-detail */}
        <Route
          exact
          path={["/", "/about", "/counter", "/remote"]}
          render={() => (
            <Suspense fallback={<div>Loading Header...</div>}>
              <RemoteHeader title="Host Application" />
            </Suspense>
          )}
        />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/counter" component={Counter} />
          <Route path="/remote" component={RemoteDemoComponent} />
          <Route path="/order-detail" component={OrderDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
