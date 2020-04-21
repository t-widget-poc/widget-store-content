import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Camera from './Camera'
import Geocoding from './Geocoding'

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/camera' component={Camera} />
            <Route path='/geocoding' component={Geocoding} />
          </Switch>
        </div>
      </HashRouter  >
    )
  }
}



export default App;
