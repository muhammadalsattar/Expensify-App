import { getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";
import { provider } from "../firebase/firebase";

const auth = getAuth();

const Login = (uid)=> ({
  type: 'LOGIN',
  uid
})

const startLogin = ()=>{
  return ()=>{
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
}

const Logout = ()=>({
  type: 'LOGOUT'
})

const startLogout = ()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
    console.log('An error happened.')
  });
}

export {startLogin, startLogout, Login, Logout}