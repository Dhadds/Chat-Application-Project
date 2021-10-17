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
import Toast from './components/Feedback/Toast';
import SubmissionBackdrop from './components/Feedback/SubmissionBackdrop';

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
      <Toast />
      <SubmissionBackdrop />
    </BrowserRouter>
  );
}

export default App;
