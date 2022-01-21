import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

export const PublicRoute = (props)=>(
    props.isAuthenticated?
    <Redirect to="/dashboard"></Redirect>
    :
    <Route {...props}></Route>
)

const mapStateToProps = (state)=>({
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)