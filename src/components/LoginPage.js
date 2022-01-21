import React from "react";
import { connect } from "react-redux";
import {startLogin} from "../actions/auth";

export const LoginPage = (props)=> (
    <div>
        <button onClick={props.login}>Login</button>
    </div>
)

const mapDispatchToProps = (dispatch)=> {
    return {
        login: ()=>{dispatch(startLogin())}
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage)