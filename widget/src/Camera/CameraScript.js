import React, { Component } from 'react'
import ScriptTag from 'react-script-tag'

class CameraScript extends React.Component {
    render() {
        return (<ScriptTag isHydrating={false} type="text/javascript" src="./camerascript.js" />)
    }
}

export default CameraScript