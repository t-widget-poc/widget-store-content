import React from 'react'

class Geocoding extends React.Component {
    clickHandler(e) {
        navigator.geolocation.getCurrentPosition(successCallback);
        
        function successCallback (position) {
            let geo_text = "緯度:" + position.coords.latitude + "\n";
            geo_text += "経度:" + position.coords.longitude + "\n";
            geo_text += "位置精度:" + position.coords.accuracy + "\n";
            let date = new Date(position.timestamp);
            geo_text += "取得時刻:" + date.toLocaleString() + "\n";

            alert(geo_text);
        };
    }
    render() {
        const click = (e) => this.clickHandler(e)
        let label = '位置情報取得ボタン'
        return (
            <button onClick={click}>{label}</button>
        )
    }
}
export default Geocoding;