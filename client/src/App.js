import React from 'react';
import { AlphaWordContainer } from "./Components/AplhaWordContainer";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/homepage">Home Page</Link>
        <Switch>
          <Route path="/homepage">
            <AlphaWordContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export { App }