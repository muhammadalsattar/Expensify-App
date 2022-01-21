import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from '../components/Header';

export const PrivateRoute = (props)=>(
    !props.isAuthenticated?
    <Redirect to="/"></Redirect>
    :
    <div><Header/><Route {...props}></Route></div>
)

const mapStateToProps = (state)=>({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute)