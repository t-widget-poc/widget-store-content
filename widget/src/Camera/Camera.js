import React from 'react'


class Camera extends React.Component {

    constraints = {
        audio: false,
        video: {
            width: 300,
            height: 200,
            facingMode: "user"   // フロントカメラを利用する
            // facingMode: { exact: "environment" }  // リアカメラを利用する場合
        }
    }
 
    componentDidMount() {
        const video = document.querySelector("#camera");
        navigator.mediaDevices.getUserMedia(this.constraints)
            .then((stream) => {
                video.srcObject = stream;
            })
            .catch((err) => {
                console.log(err);
            });
    }


    clickHandler(e) {
        const video = document.querySelector("#camera");
        const canvas = document.querySelector("#picture");
        const ctx = canvas.getContext("2d");
        const se = document.querySelector('#se');
        // 演出的な目的で一度映像を止めてSEを再生する
        video.pause();  // 映像を停止
        se.play();      // シャッター音
        setTimeout(() => {
            video.play();    // 0.5秒後にカメラ再開
        }, 500);
        // canvasに画像を貼り付ける
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    }
    
    render() {
        return (
            <>
                <div>
                    <video id="camera" width="300" height="200" autoPlay></video>
                </div>
                <div>
                    <canvas id="picture" width="300" height="200"></canvas>
                </div>
                <div>
                    <audio id="se" preload="auto">
                        <source src="camera-shutter1.mp3" type="audio/mp3" />
                    </audio>
                </div>
                <button onClick={this.clickHandler}>シャッター</button>
            </>
        )
    }
}
export default Camera;