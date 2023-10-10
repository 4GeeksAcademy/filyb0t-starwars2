import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { CharacterDetails } from "./components/CharacterDetails";
import { PlanetDetails } from "./components/PlanetDetails";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/characters/:uid" component={CharacterDetails} />
        <Route path="/planets/:uid" component={PlanetDetails} />
      </Switch>
    </Router>
  );
};

export default App;
