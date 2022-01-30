import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import './styles/style.scss'
import {Provider} from 'react-redux'
import { startSetExpenses } from './actions/expenses'
import {Login, Logout} from './actions/auth'
import AppRouter, {history} from './routers/AppRouter'
import store from './store/configureStore'

ReactDOM.render(
  <div className="d-flex vh-100 justify-content-center align-items-center">
    <div className="spinner-grow" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>,
 document.querySelector('#app')
)



const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    store.dispatch(Login(uid))
    store.dispatch(startSetExpenses()).then(()=> {
      ReactDOM.render(
          <Provider store={store}>
              <AppRouter/>
          </Provider>,
              document.querySelector('#app')
          )
    })
    if(history.location.pathname === '/'){
      history.push('/dashboard')
    }
  } else {
    // User is signed out
    store.dispatch(Logout())
    ReactDOM.render(
      <Provider store={store}>
          <AppRouter/>
      </Provider>,
          document.querySelector('#app')
      )
    history.push('/')
  }
});