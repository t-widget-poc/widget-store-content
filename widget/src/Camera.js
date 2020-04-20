import React from 'react'
import Webcam from "react-webcam";

class Camera extends React.Component {
    render() {
        const videoConstraints = {
            facingMode: "user"
        };
        return (
            <>
                <Webcam videoConstraints={videoConstraints} />
            </>
        )
    }
}

export default Camera;