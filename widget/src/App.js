import React from 'react';
import './App.css';
import { HashRouter , Route } from 'react-router-dom'
import Camera from './Camera'
import Geocoding from './Geocoding'

function App() {
  return (
    <HashRouter  >
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/camera' component={Camera} />
        <Route path='/geocoding' component={Geocoding} />
      </div>
    </HashRouter  >
  );
}
const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
  </div>
)


export default App;
