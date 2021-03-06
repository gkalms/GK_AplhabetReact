import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { Container} from "./Test/container.test";

const AppTest = () => {
  return (
    <Router>
      <div>
        <Link to="/playing">Alphabet</Link>
        <Switch>
         <Route path="/playing">
            <Container />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export { AppTest }