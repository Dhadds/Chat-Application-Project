import React from 'react';
import './App.css';
import { 
  BrowserRouter,
  Switch,
  Route,
 } from 'react-router-dom';
import LoginRoute from './routes/LoginRoute/LoginRoute';
import CreateAccountRoute from './routes/CreateAccountRoute/CreateAccountRoute';
import MainRoute from './routes/MainRoute/MainRoute';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route 
          path="/login"
          component={LoginRoute}
          exact
        />
        <Route 
          path="/createAccount"
          component={CreateAccountRoute}
          exact
        />
        <Route
          path="/"
          component={MainRoute}
          exact
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
