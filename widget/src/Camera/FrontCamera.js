import React from 'react'
import Camera from './Camera';
import CameraScript from './CameraScript';


class FrontCamera extends React.Component {
    render() {
        return (
            <>
                <Camera />
                <CameraScript />
            </>
        )
    }
}

export default FrontCamera;