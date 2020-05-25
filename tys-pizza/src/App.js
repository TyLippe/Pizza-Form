import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './Components/Nav'
import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Home />
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
      </div>
    </Router>
  );
}

export default App;
