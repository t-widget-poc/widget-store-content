import React from 'react'

class Video extends React.Component {
    render() {
        return (
            <div>
                <video id="video" autoPlay playsInline></video>
            </div>
        )
    }
}

export default Video