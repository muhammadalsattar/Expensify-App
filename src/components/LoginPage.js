import React from "react";
import { connect } from "react-redux";
import {startLogin} from "../actions/auth";

export const LoginPage = (props)=> (
    <div className="loginpage">
        <h1 className="header my-3">Expensify</h1>
        <h3 className="subheading mx-auto">It's time to put your expenses under control.</h3>
        <button className="mt-5" onClick={props.login}>Sign In With Google</button>
    </div>
)

const mapDispatchToProps = (dispatch)=> {
    return {
        login: ()=>{dispatch(startLogin())}
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage)