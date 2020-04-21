import React from 'react'
import Webcam from "react-webcam";
import Video from './Video';
import CameraScript from './CameraScriptpt';

class FrontCamera extends React.Component {
    render() {
        return (
            <>
                <div><video id="video" autoPlay playsinline></video></div>
                <CameraScript />
            </>
        )
    }
}

export default FrontCamera;