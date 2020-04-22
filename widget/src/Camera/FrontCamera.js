import React from 'react'
import Video from './Video';
import CameraScript from './CameraScript';

class FrontCamera extends React.Component {
    render() {
        return (
            <>
                <Video />
                <CameraScript />
            </>
        )
    }
}

export default FrontCamera;