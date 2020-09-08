import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import NotFound from './components/NotFound';
import MovieDetails from './components/MovieDetails';
import CompanyDetails from './components/CompanyDetails';

// route
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom'
  
  const Root = () => {
    return(
      <Router>
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route path="/movie/:id" component={MovieDetails}></Route>
          <Route path="/company/:name" component={CompanyDetails}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Router>
    )
  }

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
