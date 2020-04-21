import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Camera from './Camera'
import Geocoding from './Geocoding'
import Auth from './Auth/Auth'
import FrontCamera from './Camera/FrontCamera'


class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Auth} />
            <Route path='/camera' component={FrontCamera} />
            <Route path='/geocoding' component={Geocoding} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}



export default App;
