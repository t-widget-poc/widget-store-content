import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Camera from 'Camera'
import geocoding from 'Geocoding'
function index() {
    <BrowserRouter>
        <div>
            <Route exact path='/index' component={Index} />
            <Route path='/camera' component={Camera} />
            <Route path='/friends' component={geocoding} />
        </div>
    </BrowserRouter>
    
}

const Index = () => (
    <div>
        <h2>Home</h2>
        <p>Welcome to ようこそ</p>
    </div>
)

export default LoginSucces;