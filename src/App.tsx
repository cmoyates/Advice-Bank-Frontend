import { useContext } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import NotFoundPage from './pages/NotFoundPage';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { userContext } from './Context';

function App() {
  const theme = createTheme({
    palette: {
      black: {
        main: '#000000',
        contrastText: '#fff',
      },
      white: {
        main: '#ffffff',
        contrastText: '#000',
      },
    }
  });

  const context = useContext(userContext);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={()=>{return (context && context.userObject) ? <Redirect to="/dashboard"/> : <LandingPage/>}}/>
            <Route exact path="/dashboard" component={()=><Dashboard userData={context?.userObject || null}/>}/>
            <Route exact path="/404" component={()=><NotFoundPage/>}/>
            {/*<Redirect to="/404"/>*/}
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;