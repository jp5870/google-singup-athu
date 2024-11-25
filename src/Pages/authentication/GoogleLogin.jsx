import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth } from '../../Redux/FireBase';

const GoogleLogin = () => {

    function googleAuth() {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((res) => {
                const result = GoogleAuthProvider.credentialFromResult(res)
                console.log(result)
                console.log(result.accessToken)
                console.log(res.user)  //// access all data like name, email, profile
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <button onClick={googleAuth}>signin with google</button>
        </div>
    )
}

export default GoogleLogin
