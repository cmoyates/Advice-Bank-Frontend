import React, { useContext } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { myContext } from './Context';
import { User } from './types/maintypes';

function App() {
  const theme = createTheme()

  const userObject = useContext(myContext) as User;

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={()=>{return (userObject) ? <Redirect to="/dashboard"/> : <LandingPage/>}}/>
            <Route path="/dashboard" component={()=><Dashboard userData={userObject}/>}/>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;