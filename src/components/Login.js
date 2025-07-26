import React from 'react'
import {signInWithPopup} from 'firebase/auth';
import {auth, provider} from '../firebase';

function Login() {

    const loginInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            console.log(result);
        })
    };

  return (
    <div>
        <p>ログインして始める</p>
        <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login