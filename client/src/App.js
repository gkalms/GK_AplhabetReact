import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AlphaWordContainer } from "./Components/AlphaWordContainer";
import { Letsplay } from "./Components/Play";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/homepage">Home Page</Link>
        <Link to="/playing">Alphabet</Link>
        <Switch>
          <Route path="/homepage">
            <AlphaWordContainer />
          </Route>
          <Route path="/playing">
            <Letsplay />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export { App }