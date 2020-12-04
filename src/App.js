import logo from './logo.svg';
import './App.css';
import Main from './Components/Main.js';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {

  return (

    <Router>
      <div className="App">
        <Route exact path={["/", "/main", "/about"]}>
          <Main company={"iSoftians"} />
        </Route>
        <Route path="/stuff"}>
          <h1>
            This is page two
          </h1>
        </Route>
        <Route path="/poop">
          <h1>
            This is page three
          </h1>
        </Route>
      </div>
    </Router>
  );
}

export default App;
