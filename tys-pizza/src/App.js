import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './privateRoute'
import NavBar from './Components/Nav'
import Home from './Components/Home/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import {Provider} from 'react-redux'
import rootReducer from './Redux/Reducers'
// thunk helps add asynchronous API calls
import thunk from "redux-thunk";
// logger will console.log the actions
import logger from "redux-logger";
import { createStore, applyMiddleware } from 'redux';

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

function App() {
  return (
    <Router>
    <Provider store={store}>
      <div className="App">
        <NavBar />
        <Route exact path='/' component={Login} />
        <Route exact path='/register' component={Register} />
        <PrivateRoute exact path ='/home' component={Home} />
      </div>
    </Provider>
    </Router>
  );
}

export default App;
