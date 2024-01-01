import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Switch>
        {".\pages\RegistrationPage.jsx"}
        <Route path="/login" component={LoginPage} />

        {/* Route for Register component */}
        <Route path="/register" component={Register} />

        {/* Route for Home component */}
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
