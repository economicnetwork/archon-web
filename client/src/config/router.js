import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import '../App.css';

import Home from '../pages/Home'

class RouterComponent extends Component {
    render () {
        return (
          <div className="App">
            <Switch>
              <Route path='/' exact component = { Home } />
              <Route path='*' exact component = { Home } />
            </Switch>
          </div>
        )
    }
}

export default RouterComponent;
