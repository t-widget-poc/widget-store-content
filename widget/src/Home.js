import React from 'react'
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'

class Home extends React.Component {
    handleToCameraPage = () => {
        this.props.history.push('/camera')
    }
    handleToGeoCodingPage = () => {
        this.props.history.push('/geocoding')
    }
    render() {
        return (
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/camera'>カメラ</Link></li>
                </ul>
                <button onClick={this.handleToCameraPage}>
                    カメラ起動
                </button>
                <button onClick={this.handleToGeoCodingPage}>
                    位置情報取得
                </button>
            </div>
        )
    }
}

export default withRouter(Home)