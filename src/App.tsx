import React, { useState } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

function App() {
  const theme = createTheme()

  const [username, setUsername] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={()=><LandingPage setUsername={setUsername}/>}/>
            <Route path="/dashboard" component={()=><Dashboard username={username}/>}/>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
