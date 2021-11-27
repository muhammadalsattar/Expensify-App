import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import {Provider} from 'react-redux'
import AppRouter from './Routers/AppRouter'
import store from './store/configureStore'
import 'react-dates/lib/css/_datepicker.css'


ReactDOM.render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>,
     document.querySelector('#app')
    )