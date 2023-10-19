// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CharacterDetails from "./components/CharacterDetails";
import PlanetDetails from "./components/PlanetDetails";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/characters/:id" component={CharacterDetails} />
          <Route path="/planets/:id" component={PlanetDetails} />
          {}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
