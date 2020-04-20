import React, { Component } from 'react'
import firebase from '../firebase/firebase'

class Auth extends Component {
    state = {
        user: null
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user })
        })
    }
    //componentDidMountはrenderが実行された後に行われる。データの受け渡しが可能な状態になったら下記のコードが実行されていく。
    //onAuthstateChangeでuserにログインしたユーザーの情報を与える

    login() {
        const provider = new firebase.auth.GoogleAuthProvider()
        firebase.auth().signInWithRedirect(provider)
    }
    //signInWithRedirectでGoogleのログインページに接続して、Google プロバイダ オブジェクトのインスタンスを作成する。
    logout() {
        firebase.auth().signOut()
    }
    handleToCameraPage = () => {
        this.props.history.push('/camera')
    }
    handleToGeoCodingPage = () => {
        this.props.history.push('/geocoding')
    }

    render() {
        return (
            <div className="Auth">
                {this.state.user ? (
                    <>
                        <h1 className="UserName">{this.state.user && this.state.user.displayName}のマイページ</h1>
                        <div><button onClick={this.handleToCameraPage}>カメラ起動</button></div>
                        <div><button onClick={this.handleToGeoCodingPage}>位置情報取得</button></div>
                    </>
                    // displayNameでログインした人のGoogleアカウントに登録されている名前を表示する
                ) : (
                        <h1 className="Name">ログイン画面</h1>
                        //ログインしていない人用の表示
                    )}
                {this.state.user ? (
                    <button onClick={this.logout}>Google Logout</button>
                    //ユーザーがログインしている時はlogoutボタンを表示する
                ) : (
                        <button onClick={this.login}>Google Login</button>
                        //ユーザーがいない時はloginボタンを表示する
                    )}
            </div>
        )
    }
}

export default Auth