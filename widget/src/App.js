import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom'
import Geocoding from './GeoCoding/Geocoding'
import Auth from './Auth/Auth'
import Camera from './Camera/Camera'


class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Switch>
            <Route exact path='/' component={Auth} />
            <Route path='/camera' component={Camera} />
            <Route path='/geocoding' component={Geocoding} />
          </Switch>
        </div>
      </HashRouter>
    )
  }
}



export default App;
