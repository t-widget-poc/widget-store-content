import React from 'react'
import { render } from '@testing-library/react';

class Camera extends React.Component {
    render() {
        const medias = {
            audio: false,
            video: {
                facingMode: "user"
            }
        };
        const video = document.getElementById("video");
        const promise = navigator.mediaDevices.getUserMedia(medias);

        promise.then(successCallback)
            .catch(errorCallback);


        function successCallback(stream) {
            video.srcObject = stream;
        };

        function errorCallback(err) {
            alert(err);
        };
        return (
            <video id="video" autoplay playsinline></video>
        )
    }
}

export default Camera;