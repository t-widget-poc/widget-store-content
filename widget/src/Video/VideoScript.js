import React, { Component } from 'react'
import ScriptTag from 'react-script-tag'

class VideoScript extends React.Component {
    render() {
        return (<ScriptTag isHydrating={false} type="text/javascript" src="./videoscript.js" />)
    }
}

export default VideoScript