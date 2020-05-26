import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './Components/Nav'
import Home from './Components/Home/Home'
import Login from './Components/Login'
import Register from './Components/Register'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Register} />
        <Home exact path ='/home' component={Home} />
      </div>
    </Router>
  );
}

export default App;
