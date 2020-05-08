import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./home/pages/Home";
import Cafe from "./cafe/pages/Cafe";
import Community from "./community/pages/Community";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cafe" exact>
          <Cafe />
        </Route>
        <Route path="/community" exact>
          <Community />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
