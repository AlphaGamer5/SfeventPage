import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Grid  from '@material-ui/core/Grid'
// NAVIGATION
import Nav from "./components/Nav";
// PAGES
import Judgement from "./pages/Judgement/judgement";
import About from "./pages/About/About";
import Rules from "./pages/Rules/rules";

import "./index.css";
import Register from "./pages/register/register";


const App = () => (
    <div>
      <div className='left'>
         <Nav/>
      </div>
      <div className = 'right'>
      <div className="container">
        {/*<div className="card"><h2>Your content here</h2></div>*/}

        <Route exaxt path="/about" component={About} />
        <Route exaxt path="/rules" component={Rules} />
        <Route exaxt path="/judgement" component={Judgement} />
        <Route exact path="/register" component={Register} />
      </div>
      </div>
    </div>
);
render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
