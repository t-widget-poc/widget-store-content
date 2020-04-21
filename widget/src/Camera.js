import React from 'react'
import Webcam from "react-webcam";

class Camera extends React.Component {
    render() {
        const videoConstraints = {
            video: {
                width: { ideal: 1280 },
                height: { ideal: 720 }
            },
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