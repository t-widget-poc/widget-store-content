import React, { Component } from 'react'


class Camera extends React.Component {
    render() {
        return (
            <>
                <div>
                    <video id="camera" width="300" height="200"></video>
                </div>
                <div>
                    <canvas id="picture" width="300" height="200"></canvas>
                </div>
                <form>
                    <button type="button" id="shutter">シャッター</button>
                </form>
                <div>
                    <audio id="se" preload="auto">
                        <source src="camera-shutter1.mp3" type="audio/mp3" />
                    </audio>
                </div>
            </>
        )
    }
}
export default Camera;