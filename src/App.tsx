import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={()=><LandingPage/>}/>
          <Route path="/dashboard" component={()=><Dashboard/>}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
