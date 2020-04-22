import React from 'react'
import Video from './Video';
import VideoScript from './VideoScript';

class FrontVideo extends React.Component {
    render() {
        return (
            <>
                <Video />
                <VideoScript />
            </>
        )
    }
}

export default FrontVideo;